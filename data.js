const pmoData = {
  programas: [
    {
      nombre: "Banca Minorista",
      total_proyectos: 7,
      categorias: [
        {
          tipo: "Nuevos proyectos · 7",
          proyectos: [
            { nombre: "App de Inversiones MVP 2", responsable: "S. Olivero" },
            { nombre: "Rediseño Proceso de Originación MVP 2", responsable: "S. Olivero" },
            { nombre: "Copiloto MVP 2", responsable: "S. Olivero" },
            { nombre: "Seguros RANMA", responsable: "S. Olivero" },
            { nombre: "Créditos Asociados a Nómina (CAN)", responsable: "S. Olivero" },
            { nombre: "Cash Loans", responsable: "S. Olivero" },
           // { nombre: "Personalización de Ofertas", responsable: "S. Olivero" },
            { nombre: "Cuenta Rocket", responsable: "S. Olivero" }
          ]
        }
      ]
    },
    {
      nombre: "Regulatorios",
      total_proyectos: 7,
      categorias: [
        {
          tipo: "Carry-over 2026 · 4",
          proyectos: [
            { nombre: "PCI DSS", responsable: "C. Carreón" },
            { nombre: "Segundo factor de autenticación (Trxs no presenciales)", responsable: "C. Carreón" },
            { nombre: "Formulario FATCA / CRS", responsable: "C. Budar" },
            { nombre: "Identificador Cliente Derechos ARCO", responsable: "C. Carreón" }
          ]
        },
        {
          tipo: "Nuevos proyectos · 3",
          proyectos: [
            { nombre: "Nueva Plataforma PLD", responsable: "C. Carreón" },
            { nombre: "Plataforma Reportes Regulatorios", responsable: "C. Budar", destacado: "blue" },
            { nombre: "Herramientas de Ciberseguridad", responsable: "C. Carreón" }
          ]
        }
      ]
    },
    {
      nombre: "Banca Mayorista",
      total_proyectos: 9,
      subprogramas: [
        { 
          nombre: "Banca de Empresas · Programa", 
          responsables: ["R. Galindo", "B. Flores"], 
          proyectos: [
            { nombre: "Plataforma Banca Empresarial Fase 1 (PyME, Empresa Mediana y Gpos Corporativos)", responsable: "R. Galindo / B. Flores", destacado: "blue" }, 
            { nombre: "• Proyectos Crédito", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Captación", responsable: "TBD", destacado: "muted" },
            { fontname: "sans-serif", nombre: "• Proyectos Servicios", responsable: "TBD", destacado: "muted" }
          ] 
        },
        { 
          nombre: "Banca de Gobierno · Programa", 
          responsables: ["R. Vázquez"], 
          proyectos: [
            { nombre: "Plataforma Banca Gobierno Fase 1 (TBD)", responsable: "R. Vázquez", destacado: "blue" },
            { nombre: "• Proyectos Crédito", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Captación", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Servicios", responsable: "TBD", destacado: "muted" }
          ] 
        }
      ],
      transversales: [
        {
          tipo: "Transversales · 3",
          proyectos: [
            { nombre: "Banca Electrónica y Móvil", responsable: "--" },
           // { nombre: "Hub de pagos", responsable: "--" },
            { nombre: "Dispersión de Nóminas", responsable: "--" },
            { nombre: "Banco Recaudador", responsable: "R. Vázquez" }
          ]
        }
      ]
    },
   {
  nombre: "Hub de Innovación",
  total_proyectos: 5,
  categorias: [
    {
      tipo: "Por autorizar · 5",
      proyectos: [
        { nombre: "Comunidad Lazos", responsable: "R. Flores" },
        { nombre: "MVNO", responsable: "--" },
        { nombre: "Producto de crédito 1", responsable: "--" },
        { nombre: "Producto de crédito 2", responsable: "--" }, // <-- Recuerda poner esta coma
        { nombre: "Producto de crédito 3", responsable: "--" }
      ]
    }
  ]
},
    {
      nombre: "Habilitadores",
      total_proyectos: 13,
      categorias: [
        {
          tipo: "Enfoque al Cliente · 4",
          proyectos: [
            { nombre: "Programa Lazos", responsable: "A. Nava" },
            { nombre: "Vista Integral 360 (20%)", responsable: "A. Nava" },
            { nombre: "Activación de crédito en Salesforce", responsable: "A. Nava" },
            { nombre: "Automatización de procesos ATC (3 SOWs)", responsable: "A. Nava" }
          ]
        },
        {
          tipo: "Operaciones · 3",
          proyectos: [
            { nombre: "Automatización proceso trxs POS", responsable: "A. Nava" },
            { nombre: "Implementación de TEF", responsable: "A. Nava" },
            { nombre: "Tokenización", responsable: "A. Nava" },
            ]
        },
        {
          tipo: "Modernización Tecnológica · 6",
          proyectos: [
            { nombre: "CRM Objetivo", responsable: "M. Matus" },
            { fontname: "sans-serif", nombre: "Content Manager Objetivo (Filenet)", responsable: "M. Matus" },
            { nombre: "Upgrade S4 HANNA (ERP)", responsable: "C. Budar" },
            { nombre: "Robustecimiento Bkaya", responsable: "M. Matus" },
            { nombre: "Middleware", responsable: "M. Matus" },
            { nombre: "Nuevo Core Bancario & Bca Empresarial", responsable: "M. Matus" }
          ]
        }
      ]
    }
  ]
};
