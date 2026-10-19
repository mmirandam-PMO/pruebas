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

// Estilo de etiqueta "Roadmap" basado en el badge gris redondeado de la imagen 2
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
      
      // Vínculo idéntico a un Roadmap: misma pestaña y sin subrayados
      let nameContent = q.nombre;
      if (q.nombre === "Nuevo Core Bancario & Bca Empresarial") {
        nameContent = `<a href="descriptiva-nuevo-core-bancario-bca-empresarial.html" style="color: ${getProjectColor(q)}; cursor: pointer; text-decoration: none; font-weight: 500;">${q.nombre}</a>`;
      }

      html += `
        <div class="proj-row">
          <span class="proj-name" style="color: ${getProjectColor(q)}">${nameContent}</span>
          <span class="proj-owner ${isTbd ? 'tbd' : ''}">${q.responsable}</span>
        </div>
      `;
    }
  });

  return { html, matches };
}

function render() {
  const col1 = document.getElementById('col-1');
  const col2 = document.getElementById('col-2');
  const col3 = document.getElementById('col-3');
  
  if (!col1 || !col2 || !col3) return;
  
  col1.innerHTML = ''; col2.innerHTML = ''; col3.innerHTML = '';
  const term = document.getElementById('search-input').value.toLowerCase().trim();
  const findProg = name => pmoData.programas.find(p => p.nombre === name);

  // 1. Banca Minorista
  const minor = findProg('Banca Minorista');
  if (minor) {
    let cardHtml = `
      <div class="card header-minorista">
        <div class="card-head">
          <h2>${getProgEmoji(minor.nombre)} ${minor.nombre}</h2>
          <div style="display:flex; align-items:center; gap:8px;">
            <a href="roadmap-minorista.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">
              ${roadmapBadgeHtml}
            </a> 
            <span class="badge">${minor.total_proyectos}</span>
          </div>
        </div>
    `;
    minor.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 2. Regulatorios
  const reg = findProg('Regulatorios');
  if (reg) {
    let cardHtml = `
      <div class="card header-regulatorios">
        <div class="card-head">
          <h2>${getProgEmoji(reg.nombre)} ${reg.nombre}</h2>
          <div style="display:flex; align-items:center; gap:8px;">
            <a href="roadmap-regulatorios.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">
              ${roadmapBadgeHtml}
            </a> 
            <span class="badge">${reg.total_proyectos}</span>
          </div>
        </div>
    `;
    reg.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 3. Banca Mayorista
  const may = findProg('Banca Mayorista');
  if (may) {
    let cardHtml = `
      <div class="card header-mayorista">
        <div class="card-head">
          <h2>${getProgEmoji(may.nombre)} ${may.nombre}</h2>
          <div style="display:flex; align-items:center; gap:8px;">
            <a href="roadmap-mayorista.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">
              ${roadmapBadgeHtml}
            </a> 
            <span class="badge">9</span>
          </div>
        </div>
        <div class="section-area">
    `;
    
    cardHtml += `<div class="subprogram-block-grid">`;
    may.subprogramas.forEach(sp => {
      const res = buildProjectRows(sp.proyectos, term);
      if (res.matches > 0 || term === '') {
        const leads = sp.responsables ? `<div class="subprogram-leads">${sp.responsables.join(' / ')}</div>` : '';
        cardHtml += `<div class="subprogram-card"><div class="subprogram-title">${sp.nombre}</div>${leads}<div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;

    may.transversales.forEach(t => {
      const res = buildProjectRows(t.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div style="margin-top:14px;"><div class="section-info"><span class="section-title">${t.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });

    cardHtml += `</div></div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 4. Hub de Innovación
  const hub = findProg('Hub de Innovación');
  if (hub) {
    let cardHtml = `
      <div class="card header-hub">
        <div class="card-head">
          <h2>${getProgEmoji(hub.nombre)} ${hub.nombre}</h2>
          <div style="display:flex; align-items:center; gap:8px;">
            <a href="roadmap-hub.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">
              ${roadmapBadgeHtml}
            </a> 
            <span class="badge">${hub.total_proyectos}</span>
          </div>
        </div>
    `;
    hub.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 5. Habilitadores
  const co = findProg('Habilitadores');
  if (co) {
    let cardHtml = `
      <div class="card header-carryover">
        <div class="card-head">
          <h2>${getProgEmoji(co.nombre)} ${co.nombre}</h2>
          <div style="display:flex; align-items:center; gap:8px;">
            <a href="roadmap-habilitadores.html" title="Ver Roadmap" style="display:inline-flex; align-items:center; cursor: pointer; text-decoration: none;">
              ${roadmapBadgeHtml}
            </a> 
            <span class="badge">${co.total_proyectos}</span>
          </div>
        </div>
    `;
    co.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col3.appendChild(document.createRange().createContextualFragment(cardHtml));
  }
}

document.getElementById('search-input').addEventListener('input', render);
window.addEventListener('DOMContentLoaded', render);
