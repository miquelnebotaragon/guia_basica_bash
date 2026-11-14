const modules = [
  ['01','La consola de comandos','Consola, terminal, shell, Bash y redirecciones','01_la_consola_de_comandos.html','⌁'],
  ['02','Me oriento por el sistema','Rutas, directorios, archivos y permisos básicos','02_me_oriento_por_el_sistema.html','⌖'],
  ['03','Me muevo entre directorios','El comando cd y las rutas absolutas y relativas','03_me_muevo_entre_directorios.html','↗'],
  ['04','Gestión de archivos','Crear, copiar, mover y eliminar con seguridad','04_gestion_de_archivos.html','✦'],
  ['05','Archivos de texto','cat, less, head y tail para leer información','05_trabajo_con_archivos_de_texto.html','▤'],
  ['06','Buscar y organizar','grep, wc, sort y uniq para encontrar patrones','06_buscar_organizar_informacion.html','⌕'],
  ['07','Tuberías y filtros','Conecta comandos y transforma sus resultados','07_tuberias_y_filtros.html','⟫'],
  ['08','Editar con nano','Edita archivos desde la propia consola','08_edicion_con_nano.html','✎'],
  ['09','Permisos y usuarios','chmod, chown, chgrp y grupos','09_permisos_y_usuarios.html','◈'],
  ['10','Comandos del sistema','Información, memoria, procesos y señales','10_comandos_del_sistema.html','◉'],
  ['11','Búsqueda de archivos','find, locate, which y whereis','11_busqueda_de_archivos.html','⌕'],
  ['12','Introducción a scripts','Automatiza tareas con Bash, variables y bucles','12_introduccion_a_scripts.html','⚙']
];

const $ = (selector) => document.querySelector(selector);
const nav = $('#module-nav');
const grid = $('#module-grid');
const search = $('#module-search');

nav.innerHTML = modules.map(([num, title]) => `<a class="module-nav-item" href="#modulo-${num}" data-module="${num}"><span class="nav-num">${num}</span><span>${title}</span></a>`).join('');
grid.innerHTML = modules.map(([num, title, description, file, icon]) => `<a class="module-card" id="modulo-${num}" href="?modulo=${num}"><div class="card-top"><span class="module-number">MÓDULO ${num}</span><span class="card-icon">${icon}</span></div><h3>${title}</h3><p>${description}</p><span class="card-arrow">↗</span></a>`).join('');

function fixAssetPaths(root) {
  root.querySelectorAll('img, a').forEach((element) => {
    const attr = element.tagName === 'IMG' ? 'src' : 'href';
    const value = element.getAttribute(attr);
    if (value && value.startsWith('/assets/')) element.setAttribute(attr, `assets/${value.slice(8)}`);
  });
}

async function loadMarkdown(file, target) {
  const response = await fetch(`content/${file}`);
  if (!response.ok) throw new Error(`No se pudo cargar ${file}`);
  target.innerHTML = await response.text();
  fixAssetPaths(target);
}

async function showModule(num) {
  const module = modules.find((item) => item[0] === num);
  if (!module) return;
  const app = $('#app');
  app.innerHTML = `<section class="reference-section module-view"><a class="back-link" href="index.html#lecciones">← Volver al recorrido</a><article class="markdown-content" id="module-content"><p>Cargando módulo...</p></article></section>`;
  try { await loadMarkdown(module[3], $('#module-content')); }
  catch (error) { $('#module-content').innerHTML = `<p>No se ha podido cargar este módulo. Abre la página mediante GitHub Pages o un servidor local.</p>`; }
  document.title = `${module[1]} · Guía Linux para docentes`;
  window.scrollTo({top: 0, behavior: 'instant'});
}

async function loadReference() {
  try { await loadMarkdown('datasheet_comandos.html', $('#reference-content')); }
  catch (error) { $('#reference-content').innerHTML = '<p>No se ha podido cargar la hoja de referencia.</p>'; }
}

const requestedModule = new URLSearchParams(location.search).get('modulo');
if (requestedModule) showModule(requestedModule);
else loadReference();

search.addEventListener('input', () => {
  const term = search.value.toLowerCase().trim();
  document.querySelectorAll('.module-card').forEach((card) => { card.classList.toggle('hidden', term && !card.textContent.toLowerCase().includes(term)); });
  document.querySelectorAll('.module-nav-item').forEach((item) => { item.classList.toggle('hidden', term && !item.textContent.toLowerCase().includes(term)); });
});
document.addEventListener('keydown', (event) => { if (event.key === '/' && document.activeElement !== search) { event.preventDefault(); search.focus(); } });
$('#theme-toggle').addEventListener('click', () => { document.body.classList.toggle('dark'); localStorage.setItem('linux-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); });
if (localStorage.getItem('linux-theme') === 'dark') document.body.classList.add('dark');
