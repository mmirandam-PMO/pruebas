// ... (El inicio de app.js se mantiene exactamente igual)

function render() {
  const col1 = document.getElementById('col-1');
  const col2 = document.getElementById('col-2');
  const col3 = document.getElementById('col-3');
  
  if (!col1 || !col2 || !col3) return;
  
  col1.innerHTML = ''; col2.innerHTML = ''; col3.innerHTML = '';
  const term = document.getElementById('search-input').value.toLowerCase().trim();
  const findProg = name => pmoData.programas.find(p => p.nombre === name);

  // 1. Banca Minorista -> Redirige a roadmap-minorista.html
  const minor = findProg('Banca Minorista');
  if (minor) {
    let cardHtml = `<div class="card header-minorista"><div class="card-head"><h2>${getProgEmoji(minor.nombre)} ${minor.nombre}</h2><div style="display:flex; align-items:center; gap:6px;"><a href="roadmap-minorista.html" title="Ver Roadmap" style="display:inline-flex; align-items:center;">${barChartIconSvg}</a> <span class="badge">${minor.total_proyectos}</span></div></div>`;
    minor.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 2. Regulatorios -> Redirige a roadmap-regulatorios.html
  const reg = findProg('Regulatorios');
  if (reg) {
    let cardHtml = `<div class="card header-regulatorios"><div class="card-head"><h2>${getProgEmoji(reg.nombre)} ${reg.nombre}</h2><div style="display:flex; align-items:center; gap:6px;"><a href="roadmap-regulatorios.html" title="Ver Roadmap" style="display:inline-flex; align-items:center;">${barChartIconSvg}</a> <span class="badge">${reg.total_proyectos}</span></div></div>`;
    reg.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 3. Banca Mayorista -> Redirige a roadmap-mayorista.html
  const may = findProg('Banca Mayorista');
  if (may) {
    let cardHtml = `<div class="card header-mayorista"><div class="card-head"><h2>${getProgEmoji(may.nombre)} ${may.nombre}</h2><div style="display:flex; align-items:center; gap:6px;"><a href="roadmap-mayorista.html" title="Ver Roadmap" style="display:inline-flex; align-items:center;">${barChartIconSvg}</a> <span class="badge">8</span></div></div><div class="section-area">`;
    
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

  // 4. Hub de Innovación -> Redirige a roadmap-hub.html
  const hub = findProg('Hub de Innovación');
  if (hub) {
    let cardHtml = `<div class="card header-hub"><div class="card-head"><h2>${getProgEmoji(hub.nombre)} ${hub.nombre}</h2><div style="display:flex; align-items:center; gap:6px;"><a href="roadmap-hub.html" title="Ver Roadmap" style="display:inline-flex; align-items:center;">${barChartIconSvg}</a> <span class="badge">${hub.total_proyectos}</span></div></div>`;
    hub.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 5. Habilitadores -> Redirige a roadmap-habilitadores.html
  const co = findProg('Habilitadores');
  if (co) {
    let cardHtml = `<div class="card header-carryover"><div class="card-head"><h2>${getProgEmoji(co.nombre)} ${co.nombre}</h2><div style="display:flex; align-items:center; gap:6px;"><a href="roadmap-habilitadores.html" title="Ver Roadmap" style="display:inline-flex; align-items:center;">${barChartIconSvg}</a> <span class="badge">${co.total_proyectos}</span></div></div>`;
    co.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col3.appendChild(document.createRange().createContextualFragment(cardHtml));
  }
}

// ... (El final de app.js se mantiene exactamente igual)
