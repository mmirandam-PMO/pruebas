function getProjectColor(q) {
  if (q.destacado === 'muted') return '#7F8C8D';
  if (q.destacado === 'blue') return '#1B355D';
  if (q.destacado === 'orange') return '#D35400';
  if (q.destacado === 'red') return '#C0392B';
  if (q.destacado === 'pink') return '#9B59B6';
  return '#24292F';
}

function getProgEmoji(name) {
  if (name.includes('Minorista')) return '🔷';
  if (name.includes('Regulatorios')) return '⚖️';
  if (name.includes('Mayorista')) return '🔶';
  if (name.includes('Hub')) return '🔘';
  if (name.includes('Habilitadores')) return '📂';
  return '📂';
}

const roadmapBadgeHtml = `
  <span style="
    background: rgba(27, 42, 74, 0.06); 
    color: #1B355D; 
    padding: 3px 10px; 
    border-radius: 12px; 
    font-size: 11px; 
    font-weight: 700; 
    letter-spacing: 0.2px;
    display: inline-flex;
    align-items: center;
    transition: background 0.15s;
  " onmouseover="this.style.background='rgba(27, 42, 74, 0.12)'" onmouseout="this.style.background='rgba(27, 42, 74, 0.06)'">
    Roadmap
  </span>
`;

function buildProjectRows(proyectos, term) {
  let html = '';
  let matches = 0;

  proyectos.forEach(q => {
    const nameMatch = q.nombre ? q.nombre.toLowerCase().includes(term) : false;
    const ownerMatch = q.responsable ? q.responsable.toLowerCase().includes(term) : false;

    if (nameMatch || ownerMatch) {
      matches++;
      const isTbd = !q.responsable || q.responsable === 'TBD' || q.responsable === '--';
      html += `
        <div class="proj-row">
          <span class="proj-name" style="color: ${getProjectColor(q)}">${q.nombre}</span>
          <span class="proj-owner ${isTbd ? 'tbd' : ''}">${q.responsable}</span>
        </div>
      `;
    }
  });

  return { html, matches };
}

function render() {
  const container = document.getElementById('dashboard-container');
  if (!container) return;
  
  container.innerHTML = '';
  const term = document.getElementById('search-input').value.toLowerCase().trim();
  const findProg = name => pmoData.programas.find(p => p.nombre === name);

  // 1. Obtener los datos de los programas
  const minor = findProg('Banca Minorista');
  const reg = findProg('Regulatorios');
  const may = findProg('Banca Mayorista');
  const hub = findProg('Hub de Innovación');
  const co = findProg('Habilitadores');

  // Generar HTML individuales
  let minorHtml = '';
  if (minor) {
    minorHtml = `<div class="card header-minorista"><div class="card-head"><h2>${getProgEmoji(minor.nombre)} ${minor.nombre}</h2><div style="display:flex; align-items:center; gap:8px;"><a href="roadmap-minorista.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">${roadmapBadgeHtml}</a> <span class="badge">${minor.total_proyectos}</span></div></div>`;
    minor.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') minorHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    minorHtml += `</div>`;
  }

  let regHtml = '';
  if (reg) {
    regHtml = `<div class="card header-regulatorios"><div class="card-head"><h2>${getProgEmoji(reg.nombre)} ${reg.nombre}</h2><div style="display:flex; align-items:center; gap:8px;"><a href="roadmap-regulatorios.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">${roadmapBadgeHtml}</a> <span class="badge">${reg.total_proyectos}</span></div></div>`;
    reg.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') regHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    regHtml += `</div>`;
  }

  let mayHtml = '';
  if (may) {
    mayHtml = `<div class="card header-mayorista"><div class="card-head"><h2>${getProgEmoji(may.nombre)} ${may.nombre}</h2><div style="display:flex; align-items:center; gap:8px;"><a href="roadmap-mayorista.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">${roadmapBadgeHtml}</a> <span class="badge">8</span></div></div><div class="section-area">`;
    may.subprogramas.forEach(sp => {
      const res = buildProjectRows(sp.proyectos, term);
      if (res.matches > 0 || term === '') {
        const leads = sp.responsables ? `<div class="subprogram-leads">${sp.responsables.join(' / ')}</div>` : '';
        mayHtml += `<div class="subprogram-card"><div class="subprogram-title">${sp.nombre}</div>${leads}<div class="proj-list">${res.html}</div></div>`;
      }
    });
    mayHtml += `</div>`;
    may.transversales.forEach(t => {
      const res = buildProjectRows(t.proyectos, term);
      if (res.matches > 0 || term === '') mayHtml += `<div style="margin-top:14px;"><div class="section-info"><span class="section-title">${t.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    mayHtml += `</div></div>`;
  }

  let hubHtml = '';
  if (hub) {
    hubHtml = `<div class="card header-hub"><div class="card-head"><h2>${getProgEmoji(hub.nombre)} ${hub.nombre}</h2><div style="display:flex; align-items:center; gap:8px;"><a href="roadmap-hub.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">${roadmapBadgeHtml}</a> <span class="badge">${hub.total_proyectos}</span></div></div>`;
    hub.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') hubHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    hubHtml += `</div>`;
  }

  let coHtml = '';
  if (co) {
    coHtml = `<div class="card header-carryover"><div class="card-head"><h2>${getProgEmoji(co.nombre)} ${co.nombre}</h2><div style="display:flex; align-items:center; gap:8px;"><a href="roadmap-habilitadores.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">${roadmapBadgeHtml}</a> <span class="badge">${co.total_proyectos}</span></div></div>`;
    co.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') coHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    coHtml += `</div>`;
  }

  // Construcción del diseño final balanceado por bloques horizontales
  const gridHtml = `
    <div class="gantt-column-block">
      <div class="gantt-row-block">${minorHtml}</div>
      <div class="gantt-row-block style-align-target">${mayHtml}</div>
    </div>
    <div class="gantt-column-block">
      <div class="gantt-row-block">${regHtml}</div>
      <div class="gantt-row-block style-align-target">${hubHtml}</div>
    </div>
    <div class="gantt-column-block">
      <div class="gantt-row-block h-100">${coHtml}</div>
    </div>
  `;

  container.appendChild(document.createRange().createContextualFragment(gridHtml));
}

document.getElementById('search-input').addEventListener('input', render);
window.addEventListener('DOMContentLoaded', render);
