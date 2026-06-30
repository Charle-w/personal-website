#!/usr/bin/env python3
"""
个人网站项目自动更新脚本
========================
从本地项目目录提取元数据，更新 main.js 中的项目数据，复制截图到 assets/images/。

用法:
  python update_projects.py              # 直接运行，更新个人网站
  python update_projects.py --dry-run    # 预览变更，不实际写入
  python update_projects.py --commit     # 更新后自动 git commit & push

项目数据源:  配置文件中的 PROJECTS 列表
截图源:      assets/images/ (手动放入或由脚本自动截图)
目标网站:    当前目录 (personal-website-clone)
"""

import os
import sys
import json
import shutil
import hashlib
import subprocess
from datetime import datetime
from pathlib import Path

# ═══════════════════════════════════════════
# 配置区 — 修改这里来添加/修改项目
# ═══════════════════════════════════════════

PROJECTS = [
    {
        "id": "change-point",
        "title_zh": "🔄 5M变化点管理系统",
        "title_en": "🔄 5M Change Point Management System",
        "body_zh": (
            "基于 AGCN.AA01.046 5M变化点管理指导书开发的 Web 端变化点全生命周期管理系统。"
            "覆盖末件确认→首件确认→持续监控→关闭的完整闭环，支持5M1E分类（人机料法环测）、"
            "产线维度管理、权限矩阵控制（RBAC）及仪表盘可视化。FastAPI + Jinja2 + SQLite 全栈架构，"
            "服务端渲染（SSR），部署零依赖。"
        ),
        "body_en": (
            "A web-based change point lifecycle management system built on AGCN.AA01.046 5M Change Point Guideline. "
            "Covers the full closed loop: Last Part Confirmation → First Piece Confirmation → Continuous Monitoring → Closure. "
            "Supports 5M1E categorization (Man/Machine/Material/Method/Measurement/Environment), "
            "production line management, RBAC permission matrix, and dashboard visualization. "
            "FastAPI + Jinja2 + SQLite full-stack, server-side rendering, zero-dependency deployment."
        ),
        "tags_zh": ["Python", "FastAPI", "Jinja2", "SQLite", "IATF16949"],
        "tags_en": ["Python", "FastAPI", "Jinja2", "SQLite", "IATF16949"],
        "screenshot": "project-change-point.png",
        "links": {}
    },
    {
        "id": "audit-tool",
        "title_zh": "📋 汽车质量体系审核工具",
        "title_en": "📋 Automotive Quality System Audit Tool",
        "body_zh": (
            "面向 IATF 16949 / VDA 6.3 / VDA 6.5 三大审核标准的全功能审核管理平台。"
            "支持审核计划制定、条款检查清单、不符合项管理、纠正措施跟踪及仪表盘分析。"
            "FastAPI 后端 + Vue3 前端分离架构，PostgreSQL 数据持久化，"
            "支持审核数据导入导出、自动评分及多维度报告生成。"
        ),
        "body_en": (
            "A full-featured audit management platform for IATF 16949 / VDA 6.3 / VDA 6.5 standards. "
            "Supports audit planning, clause checklists, non-conformity management, corrective action tracking, "
            "and dashboard analytics. FastAPI backend + Vue3 frontend separated architecture, "
            "PostgreSQL persistence, with import/export, auto-scoring and multi-dimensional reporting."
        ),
        "tags_zh": ["Python", "FastAPI", "Vue3", "PostgreSQL", "VDA6.3"],
        "tags_en": ["Python", "FastAPI", "Vue3", "PostgreSQL", "VDA6.3"],
        "screenshot": None,  # 暂无截图，可后续补充
        "links": {}
    },
    {
        "id": "doc-mgmt",
        "title_zh": "📁 汽车质量体系文件管理系统",
        "title_en": "📁 Automotive QMS Document Management System",
        "body_zh": (
            "严格对齐 IATF 16949:2016 第 7.5 条「成文信息」要求的 Web 版文件全生命周期管理系统。"
            "覆盖文件创建→审批→发布→受控→变更→作废→归档的完整闭环，支持 RBAC 权限控制、"
            "版本历史追溯与差异对比、全文检索、在线预览（PDF/Word/Excel）。"
            "FastAPI + Jinja2 SSR 架构，解决企业 OneDrive 公共盘文件管理的合规痛点。"
        ),
        "body_en": (
            "A web-based document lifecycle management system strictly aligned with IATF 16949:2016 Clause 7.5 "
            "'Documented Information' requirements. Covers the full lifecycle: Create → Approve → Publish → "
            "Control → Revise → Obsolete → Archive. Features RBAC access control, version history with diff, "
            "full-text search, and online preview (PDF/Word/Excel). FastAPI + Jinja2 SSR architecture, "
            "solving compliance pain points of shared-drive document management."
        ),
        "tags_zh": ["Python", "FastAPI", "Jinja2", "SQLite", "IATF16949"],
        "tags_en": ["Python", "FastAPI", "Jinja2", "SQLite", "IATF16949"],
        "screenshot": "project-doc-mgmt.png",
        "links": {}
    },
]

# 图片目录 (相对于网站根目录)
IMAGES_DIR = Path("assets/images")
MAIN_JS_PATH = Path("assets/js/main.js")

# 项目主体色 (用于生成占位图)
BRAND_COLORS = {
    "change-point": "#1a237e",
    "audit-tool": "#004d40",
    "doc-mgmt": "#1a1a2e",
}


def find_unique_filename(dest_dir: Path, filename: str) -> Path:
    """确保文件名不冲突，冲突时加 _1, _2 后缀"""
    dest = dest_dir / filename
    if not dest.exists():
        return dest
    stem, ext = os.path.splitext(filename)
    counter = 1
    while True:
        dest = dest_dir / f"{stem}_{counter}{ext}"
        if not dest.exists():
            return dest
        counter += 1


def copy_image(src: str, dest_dir: Path) -> str | None:
    """复制图片到目标目录，返回相对路径 (相对于网站根)"""
    src_path = Path(src)
    if not src_path.exists():
        print(f"  ⚠ 图片不存在: {src}")
        return None

    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = find_unique_filename(dest_dir, src_path.name)
    shutil.copy2(src_path, dest)
    print(f"  ✓ 图片已复制: {dest.name} ({dest.stat().st_size / 1024:.0f} KB)")
    return str(dest.relative_to(dest_dir.parent.parent))  # 相对于网站根


def generate_project_entries(projects: list, lang: str) -> list[dict]:
    """生成项目条目列表 (用于替换 main.js 中的 projects 数组)"""
    entries = []
    for p in projects:
        entry = {
            "title": p.get(f"title_{lang}", p.get("title_zh", "")),
            "body": p.get(f"body_{lang}", p.get("body_zh", "")),
            "tags": p.get(f"tags_{lang}", p.get("tags_zh", [])),
        }

        # 如果有截图，添加图片引用
        screenshot = p.get("screenshot")
        if screenshot:
            entry["img"] = f"assets/images/{screenshot}"

        entries.append(entry)
    return entries


def format_project_entry(entry: dict, indent: str = "      ") -> str:
    """将项目条目格式化为 main.js 中的 JS 对象字符串"""
    lines = []
    lines.append(f'{indent}{{ title: {json.dumps(entry["title"], ensure_ascii=False)},')
    lines.append(f'{indent} body: {json.dumps(entry["body"], ensure_ascii=False)},')
    lines.append(f'{indent} tags: {json.dumps(entry["tags"], ensure_ascii=False)} }}')
    return "\n".join(lines)


def update_main_js(base_dir: Path, projects: list, dry_run: bool = False):
    """更新 main.js 中的 DATA.projects 部分"""
    js_path = base_dir / MAIN_JS_PATH

    if not js_path.exists():
        print(f"❌ 文件不存在: {js_path}")
        return False

    content = js_path.read_text(encoding="utf-8")

    # 分别生成中英文项目条目
    zh_entries = format_project_entries_js(projects, "zh")
    en_entries = format_project_entries_js(projects, "en")

    # 找到并替换中文 projects 块
    import re

    # 中文 projects 替换
    zh_pattern = r"(projects:\s*\[)[^\]]*?(\s*\]\s*,)"
    zh_replacement = f"projects: [\n{zh_entries}\n    ]"

    new_content = re.sub(zh_pattern, zh_replacement, content, count=1, flags=re.DOTALL)

    # 英文 projects 替换 (第二个 projects 块)
    # 先找到中文块之后的部分
    remaining = new_content.split(zh_replacement, 1)
    if len(remaining) > 1:
        before_en = remaining[0] + zh_replacement
        after_zh = remaining[1]
        after_zh_new = re.sub(
            r"(projects:\s*\[)[^\]]*?(\s*\]\s*,)",
            lambda m: f"projects: [\n{en_entries}\n    ]",
            after_zh,
            count=1,
            flags=re.DOTALL,
        )
        new_content = before_en + after_zh_new

    if dry_run:
        print("\n--- 预览变更 (前200行) ---")
        lines = new_content.split("\n")
        for i, line in enumerate(lines):
            if "projects:" in line:
                # 打印 projects 块附近
                start = max(0, i - 2)
                end = min(len(lines), i + 25)
                for j in range(start, end):
                    marker = ">>>" if j >= i and j < i + min(20, len(lines) - i) else "   "
                    print(f"{marker} {j+1:4d}| {lines[j]}")
                break
        return True

    js_path.write_text(new_content, encoding="utf-8")
    print(f"✓ main.js 已更新 ({js_path})")
    return True


def format_project_entries_js(projects: list, lang: str) -> str:
    """格式化项目条目为 JS 数组内容"""
    entries = generate_project_entries(projects, lang)
    lines = [format_project_entry(e) for e in entries]
    return ",\n".join(lines)


def update_last_updated(js_path: Path, dry_run: bool = False):
    """更新 meta.lastUpdated 和 footer 中的日期"""
    content = js_path.read_text(encoding="utf-8")
    today = datetime.now().strftime("%Y-%m-%d")

    import re
    # 更新中文 meta.lastUpdated
    content = re.sub(
        r"(lastUpdated:\s*')[^']*(')",
        rf"\1{today}\2",
        content,
    )
    # 更新英文 meta.lastUpdated
    # (同一个模式会匹配两个)

    if dry_run:
        print(f"\n  📅 日期将更新为: {today}")
    else:
        print(f"  📅 日期已更新为: {today}")

    if not dry_run:
        js_path.write_text(content, encoding="utf-8")


def git_commit_and_push(base_dir: Path, message: str = None):
    """提交并推送到 GitHub"""
    if message is None:
        today = datetime.now().strftime("%Y-%m-%d")
        message = f"Update projects & screenshots ({today})"

    print(f"\n🚀 Git 提交: {message}")
    result = subprocess.run(
        ["git", "add", "-A"],
        cwd=base_dir,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        print(f"  ⚠ git add 失败: {result.stderr}")
        return False

    result = subprocess.run(
        ["git", "commit", "-m", message],
        cwd=base_dir,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        if "nothing to commit" in result.stdout or "nothing to commit" in result.stderr:
            print("  ℹ 无变更需要提交")
            return True
        print(f"  ⚠ git commit 失败: {result.stderr}")
        return False
    print(f"  ✓ {result.stdout.strip()}")

    result = subprocess.run(
        ["git", "push", "origin", "main"],
        cwd=base_dir,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        print(f"  ⚠ git push 失败: {result.stderr}")
        return False
    print(f"  ✓ 已推送到 GitHub")
    return True


def copy_all_screenshots(base_dir: Path):
    """复制所有项目截图到 assets/images/"""
    dest_dir = base_dir / IMAGES_DIR
    dest_dir.mkdir(parents=True, exist_ok=True)

    for p in PROJECTS:
        screenshot = p.get("screenshot")
        if screenshot:
            src = Path(screenshot) if Path(screenshot).is_absolute() else dest_dir / screenshot
            # 如果图片已经在目标目录中，跳过
            if (dest_dir / screenshot).exists():
                print(f"  ✓ 截图已存在: {screenshot}")
                continue
            # 尝试从当前目录查找
            if src.exists():
                shutil.copy2(src, dest_dir / screenshot)
                print(f"  ✓ 截图已复制: {screenshot}")


def main():
    base_dir = Path(os.path.dirname(os.path.abspath(__file__)))
    dry_run = "--dry-run" in sys.argv
    do_commit = "--commit" in sys.argv

    print("=" * 60)
    print("  个人网站项目自动更新")
    print("=" * 60)
    print(f"  网站根目录: {base_dir}")
    print(f"  模式: {'预览 (dry-run)' if dry_run else '实际更新'}")
    print(f"  项目数: {len(PROJECTS)}")
    print()

    # 1. 复制截图
    print("📸 步骤 1/3: 复制项目截图...")
    copy_all_screenshots(base_dir)

    # 2. 更新 main.js
    print("\n📝 步骤 2/3: 更新 main.js...")
    js_path = base_dir / MAIN_JS_PATH
    if not dry_run:
        update_last_updated(js_path)
    success = update_main_js(base_dir, PROJECTS, dry_run=dry_run)

    if not success:
        print("\n❌ 更新失败")
        sys.exit(1)

    # 3. Git 提交 (可选)
    if do_commit:
        print("\n🔀 步骤 3/3: Git 提交 & 推送...")
        git_commit_and_push(base_dir)
    elif not dry_run:
        print(f"\n💡 预览无误后运行以下命令提交:")
        print(f"   cd {base_dir}")
        print(f"   python update_projects.py --commit")
        print(f"   或手动: git add -A && git commit -m 'Update projects' && git push origin main")

    print("\n✅ 完成!")


if __name__ == "__main__":
    main()
