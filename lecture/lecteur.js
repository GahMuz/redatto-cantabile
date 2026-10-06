'use strict';

const navigation = document.querySelector('nav[aria-label="Chapitres"]');
const message = document.getElementById('message');
const article = document.getElementById('chapter');
const pager = document.querySelector('.pager');
const retry = document.getElementById('retry');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const manuscriptURL = new URL('manuscrit/', document.baseURI);
let chapters = [];
let current = 0;
let request = 0;

async function read(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Fichier indisponible (HTTP ${response.status}).`);
  return response.text();
}

function parseIndex(text) {
  const result = [];
  for (const row of text.split(/\r?\n/)) {
    const cells = row.replace(/^\||\|$/g, '').split('|').map(cell => cell.trim());
    if (!/^CH-[\w-]+$/.test(cells[0])) continue;
    const [id, order, title, link, status] = cells;
    const path = link && link.match(/\]\(([^)]+)\)/);
    if (!path || !title || !status || !/^\d+$/.test(order)) {
      throw new Error('Une entrée de l’index des chapitres est incomplète.');
    }
    const url = new URL(path[1], manuscriptURL);
    if (url.origin !== manuscriptURL.origin ||
        !url.pathname.startsWith(manuscriptURL.pathname) ||
        !url.pathname.endsWith('.md')) {
      throw new Error('Un lien de chapitre sort du dossier du manuscrit.');
    }
    if (result.some(chapter => chapter.id === id)) throw new Error('Identifiant de chapitre répété.');
    result.push({ id, order: Number(order), title, status, url });
  }
  if (!result.length) throw new Error('Aucun chapitre actif trouvé dans l’index.');
  return result.sort((a, b) => a.order - b.order);
}

function inline(text) {
  // Le Markdown reste du texte : aucun HTML provenant du manuscrit n'est exécuté.
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>');
}

function render(text) {
  return text.replace(/\r\n/g, '\n').trim().split(/\n\s*\n/).map(block => {
    if (block.startsWith('#') || block.startsWith('<!--')) return '';
    if (['***', '---', '___'].includes(block.trim())) {
      return '<hr aria-label="Changement de scène">';
    }
    return '<p>' + inline(block).replace(/\n/g, '<br>\n') + '</p>';
  }).join('\n');
}

function showError(error) {
  message.textContent = 'Impossible de charger le manuscrit. ' + error.message;
  message.hidden = false;
  retry.hidden = false;
}

async function showChapter(focus = false) {
  const selected = chapters.findIndex(chapter => '#' + chapter.id === location.hash);
  if (selected >= 0) current = selected;
  const chapter = chapters[current];
  const ticket = ++request;
  article.hidden = true;
  pager.hidden = true;
  retry.hidden = true;
  message.hidden = false;
  message.textContent = 'Chargement de « ' + chapter.title + ' »…';
  navigation.querySelectorAll('a').forEach(link => {
    if (link.hash === '#' + chapter.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  try {
    const text = await read(chapter.url);
    // Une requête lente ne doit pas remplacer un chapitre choisi plus récemment.
    if (ticket !== request) return;
    document.getElementById('chapter-number').textContent = 'Chapitre ' + chapter.order;
    document.getElementById('chapter-title').textContent = chapter.title;
    document.getElementById('chapter-status').textContent = chapter.status;
    document.getElementById('chapter-text').innerHTML = render(text);
    document.getElementById('chapter-source').href = chapter.url.href;
    previous.hidden = current === 0;
    next.hidden = current === chapters.length - 1;
    if (current > 0) previous.href = '#' + chapters[current - 1].id;
    if (current < chapters.length - 1) next.href = '#' + chapters[current + 1].id;
    article.hidden = false;
    pager.hidden = false;
    message.hidden = true;
    if (focus) document.getElementById('chapter-title').focus();
  } catch (error) {
    if (ticket === request) showError(error);
  }
}

async function initialize() {
  if (location.protocol === 'file:') {
    showError(new Error('Ouvrir cette page via GitHub Pages ou un serveur local pour lire les fichiers Markdown.'));
    retry.hidden = true;
    return;
  }
  retry.hidden = true;
  try {
    chapters = parseIndex(await read(new URL('index.md', manuscriptURL)));
    navigation.replaceChildren();
    for (const chapter of chapters) {
      const link = document.createElement('a');
      link.href = '#' + chapter.id;
      const number = document.createElement('span');
      number.textContent = String(chapter.order).padStart(2, '0');
      link.append(number, ' ' + chapter.title);
      navigation.append(link);
    }
    document.getElementById('chapter-count').textContent = 'Manuscrit actif · ' + chapters.length + ' chapitres';
    await showChapter();
  } catch (error) {
    showError(error);
  }
}

window.addEventListener('hashchange', () => {
  if (chapters.length && chapters.some(chapter => '#' + chapter.id === location.hash)) showChapter(true);
});
// Un clic sur le chapitre déjà ouvert relit aussi son fichier, même sans changement de hash.
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (link && link.hash === location.hash) {
    event.preventDefault();
    showChapter(true);
  }
});
retry.addEventListener('click', () => chapters.length ? showChapter(true) : initialize());
document.querySelector('.tools').hidden = false;
let size = 20;
function resize(delta) {
  size = Math.min(28, Math.max(16, size + delta));
  document.documentElement.style.setProperty('--reading-size', size + 'px');
  document.getElementById('smaller').disabled = size === 16;
  document.getElementById('larger').disabled = size === 28;
}
document.getElementById('smaller').addEventListener('click', () => resize(-2));
document.getElementById('larger').addEventListener('click', () => resize(2));
document.getElementById('theme').addEventListener('click', event => {
  const dark = document.documentElement.classList.toggle('dark');
  event.currentTarget.setAttribute('aria-pressed', String(dark));
  event.currentTarget.textContent = dark ? 'Mode clair' : 'Mode sombre';
});
initialize();
