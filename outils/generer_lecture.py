#!/usr/bin/env python3
"""Génère une copie HTML autonome des chapitres actifs, sans dépendance externe."""

from html import escape
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def inline(text):
    text = escape(text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    return re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", text)


def render(text):
    """Rend les paragraphes, emphases et séparateurs employés par le manuscrit."""
    blocks = []
    for block in re.split(r"\n\s*\n", text.strip()):
        if block.startswith("#") or block.startswith("<!--"):
            continue
        if block.strip() in ("***", "---", "___"):
            blocks.append('<hr aria-label="Changement de scène">')
        else:
            blocks.append("<p>" + inline(block).replace("\n", "<br>\n") + "</p>")
    return "\n".join(blocks)


def generate():
    navigation, chapters = [], []
    # L'index actif décide de l'ordre et des versions ; aucune archive n'est chargée.
    for row in (ROOT / "manuscrit/index.md").read_text().splitlines():
        cells = [cell.strip() for cell in row.strip("|").split("|")]
        if not cells or not re.fullmatch(r"CH-[\w-]+", cells[0]):
            continue
        identifier, order, title, link, status = cells[:5]
        relative = re.search(r"\]\(([^)]+)\)", link).group(1)
        source = (ROOT / "manuscrit" / relative).resolve()
        source.relative_to(ROOT / "manuscrit")
        navigation.append(
            f'<a href="#{identifier}" data-chapter="{identifier}">'
            f'<span>{escape(order.zfill(2))}</span> {escape(title)}</a>'
        )
        chapters.append(
            f'<article id="{identifier}" aria-labelledby="titre-{identifier}">'
            f'<header class="chapter-header"><p class="eyebrow">Chapitre {escape(order)}</p>'
            f'<h2 id="titre-{identifier}" tabindex="-1">{escape(title)}</h2>'
            f'<p class="status">{escape(status)}</p></header>'
            f'<div class="prose">{render(source.read_text())}</div>'
            f'<footer class="chapter-footer"><a href="{escape(source.relative_to(ROOT).as_posix())}">'
            'Texte source du chapitre</a> · <a href="#sommaire">Sommaire</a></footer></article>'
        )
    if not chapters:
        raise ValueError("Aucun chapitre actif trouvé dans manuscrit/index.md")
    template = (ROOT / "lecture/modele.html").read_text()
    output = template.replace("{{SOMMAIRE}}", "\n".join(navigation)).replace(
        "{{CHAPITRES}}", "\n".join(chapters)
    ).replace("{{NOMBRE_CHAPITRES}}", str(len(chapters)))
    (ROOT / "index.html").write_text(output)
    print(f"index.html : {len(chapters)} chapitres actifs générés.")


if __name__ == "__main__":
    generate()
