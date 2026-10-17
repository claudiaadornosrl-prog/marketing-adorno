// ═══════════════════════════════════════════════════════════════════════
//  Marketing Adorno · manual.js — Manual de uso (overlay 📖, autoinyectable)
//  🚨 REGLA: cada vez que se agrega o cambia una función del módulo,
//  actualizar la sección correspondiente acá (y bump del ?v= en index.html).
// ═══════════════════════════════════════════════════════════════════════

function _mEsc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function _manualSecciones() {
  return [
    {
      icon: '🔐', titulo: 'Entrar una sola vez',
      desc: 'La sesión se comparte entre todos los módulos del sistema.',
      pasos: [
        'En el Hub, con el ícono 👤, ingresás con tu usuario y podés tildar "Confiar en esta computadora": después entrás a todos los módulos sin volver a escribir la clave.',
        'Este módulo lo ven JP, Claudia y Administración.',
      ],
    },
    {
      icon: '📊', titulo: 'Tablero',
      desc: 'Un solo lugar para ver cómo va lo digital: tienda, redes y pauta.',
      pasos: [
        'Los números grandes comparan el período elegido (7, 30 o 90 días) contra el período anterior: ▲ mejoró, ▼ empeoró.',
        'Tienda online (Shopify): sesiones, cuántos agregaron al carrito, pedidos y ventas. Los datos los trae solo el servidor todas las mañanas.',
        '"Activos sin precio" es la cantidad de productos que se ven en la tienda a $0: no se pueden comprar. Es la primera tarea de la pestaña Tareas.',
        'Instagram, Facebook y la pauta aparecen vacíos hasta que se conecten las cuentas (Meta Business Suite y Google Ads).',
      ],
    },
    {
      icon: '💬', titulo: 'Respuestas (mensajes y comentarios de IG y FB)',
      desc: 'La bandeja de todo lo que escribieron en Instagram y Facebook, de las dos cuentas, y que nadie respondió.',
      pasos: [
        'El servidor trae mensajes privados y comentarios nuevos cada 10 minutos. Lo que ya respondió alguien desde la app no aparece.',
        'Cada mensaje viene con una respuesta sugerida: la corregís si hace falta y tocás Enviar. Sale en la próxima pasada del servidor (hasta 10 minutos). Nada se manda solo.',
        'Ignorar lo saca de la lista (stickers, saludos, spam). Se puede volver a pendientes desde el filtro "Ignorados".',
        'Las imágenes, stickers y audios no se pueden leer por acá: se ven en la app de Instagram o Facebook.',
        'Si algo lleva más de 2 horas sin responder, la fila se marca en ámbar y a JP le llega un aviso al celular. El número naranja de la pestaña es la cantidad sin responder.',
      ],
    },
    {
      icon: '📷', titulo: 'Contenido (calendario de publicaciones)',
      desc: 'Cada publicación pasa por: idea → borrador → aprobada → publicada.',
      pasos: [
        '➕ Nueva publicación: canal, tipo (post, carrusel, reel, historia), fecha prevista, texto, hashtags, SKU y foto.',
        'Claude deja propuestas en "borrador" con la voz del atelier (identidad de marca). Vos o Claudia las aprobás con ✓, o las editás con ✏ antes.',
        'Lo aprobado es lo que se publica. Hasta que esté conectada la API de Meta, "Marcar publicada" se toca a mano después de subirla desde el celular.',
        'Descartar (✕) no borra: queda en el filtro "Descartadas" por si sirve más adelante.',
      ],
    },
    {
      icon: '🛠', titulo: 'Tareas (web, redes, pauta)',
      desc: 'La lista de cosas que mejorar, con prioridad: rojo alta, ámbar media, gris baja.',
      pasos: [
        'Las de origen "auditoria" las genera la revisión automática de la tienda (productos sin precio, sin foto, sin descripción, sin texto para Google).',
        'Las "manual" las cargás vos con ➕ Tarea. Las "claude" son propuestas que surgen al revisar las métricas.',
        '✓ Hecha la saca de la lista (se puede ver con "ver hechas" y reabrir). Descartar es para lo que decidís no hacer.',
      ],
    },
    {
      icon: '📣', titulo: 'Pauta',
      desc: 'El módulo propone, vos aprobás. Nunca gasta solo.',
      pasos: [
        'Cuando estén conectadas Meta Ads y Google Ads, acá aparecen las sugerencias semanales: qué publicación promocionar, qué campaña frenar o bajar, cuánto costó cada venta.',
        'Cada sugerencia tiene su botón "aplicar"; recién ahí se toca la campaña.',
      ],
    },
  ];
}

function abrirManual() {
  if (document.getElementById('manual-overlay')) return;
  const items = _manualSecciones();
  const ov = document.createElement('div');
  ov.id = 'manual-overlay';
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,.5);z-index:900;display:flex;align-items:center;justify-content:center;padding:16px';
  ov.innerHTML = `<div style="background:white;border-radius:12px;max-width:720px;width:100%;max-height:90vh;overflow:auto;font-family:inherit">
    <div class="m-head" style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid #e2e8f0;position:sticky;top:0;background:white">
      <b style="font-size:15px">📖 Manual · Marketing</b><span style="flex:1"></span>
      <button onclick="document.getElementById('manual-overlay').remove()" style="border:1px solid #e2e8f0;background:white;border-radius:8px;padding:4px 10px;cursor:pointer">✕</button></div>
    ${items.map(s => `<div class="m-sec" style="padding:12px 16px;border-bottom:1px solid #f1f5f9">
      <div style="font-weight:700;font-size:14px">${s.icon} ${_mEsc(s.titulo)}</div>
      <div style="font-size:12.5px;color:#64748b;margin:3px 0 6px">${_mEsc(s.desc)}</div>
      <ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.5">${s.pasos.map(p => `<li>${_mEsc(p)}</li>`).join('')}</ul></div>`).join('')}
  </div>`;
  document.body.appendChild(ov);
  // Se cierra SOLO con ✕ o Escape (regla JP): nunca clickeando afuera.
  const esc = e => { if (e.key === 'Escape') { ov.remove(); document.removeEventListener('keydown', esc); } };
  document.addEventListener('keydown', esc);
}

// Botón 📖 en el header (autoinyectable)
(function () {
  function poner() {
    const hr = document.querySelector('header .header-right'); if (!hr || document.getElementById('btn-manual')) return;
    const b = document.createElement('button'); b.id = 'btn-manual'; b.className = 'hbtn'; b.title = 'Manual de uso'; b.setAttribute('aria-label', 'Manual');
    b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span class="lb">Manual</span>';
    b.onclick = abrirManual; hr.insertBefore(b, hr.querySelector('.hsep'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', poner); else poner();
})();
