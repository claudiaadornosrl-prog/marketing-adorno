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
      icon: '☀', titulo: 'Hoy',
      desc: 'La pantalla de entrada: qué hay que hacer ahora, sin recorrer las demás pestañas.',
      pasos: [
        'Arriba, cuatro números: mensajes sin responder (rojo si alguno pasó las 2 horas), respondidos hoy, descripciones por aprobar y tareas pendientes. Tocando cada uno vas a la pestaña.',
        'Abajo, la lista de lo urgente: cada mensaje que espera hace más de 2 horas con su botón Responder, las descripciones, las tareas de prioridad alta y el último resumen semanal.',
        'El resumen semanal llega también al celular los lunes a las 8.',
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
        'Arriba elegís la cuenta: Atelier o Claudia Adorno. Cada una tiene su propio contador naranja y su lista; nunca se mezclan.',
        'El servidor trae mensajes privados y comentarios nuevos cada 10 minutos. Lo que ya respondió alguien desde la app no aparece.',
        'Cada mensaje viene con una respuesta sugerida: la corregís si hace falta y tocás Enviar. Sale en menos de un minuto. Nada se manda solo.',
        'Precios: nunca en público. En el comentario va "te paso la info por mensaje" y, en el cuadro de abajo, el mensaje privado con el link del producto en www.claudiaadorno.com. Se mandan los dos juntos.',
        'La voz es la de Claudia (firma "Clau"): guía completa en Marketing/redes/voz-respuestas.md. El atelier no se menciona hasta mayo de 2027.',
        'Consultas de precio (en comentarios y también en privados): aparece un buscador del catálogo. Escribís parte del nombre, elegís el producto y el mensaje privado se arma solo con el nombre y el precio. Mientras la tienda del atelier tenga contraseña, el link que se manda es el de claudiaadorno.com.',
        'Cada mensaje es una tarjeta de tres partes: arriba quién escribió, la red y etiquetas de color cuando importa (⏰ lleva más de 2 h, 💲 pregunta precio, ⚠ parece ofensivo); en el medio, en gris, lo que escribió el cliente con la publicación al lado; abajo "Tu respuesta" con el texto ya sugerido (✨), las frases rápidas y, en comentarios, la casilla del privado con el link. Los botones de abajo son íconos: 📤 Enviar (el grande, en color), 🚫 Ignorar y 🙈 Ocultar; pasá el mouse por arriba y te dice qué hace cada uno. El ⚡ muestra las frases rápidas: tocás una y se pega en la respuesta, con el ✏️ la editás, y con "+ Nueva" creás otra. Si la persona tiene más mensajes sin responder aparece 🔁 al lado de Privado/Comentario con el detalle al pasar el mouse.',
        'En los comentarios, tocá la miniatura de la publicación y se abre ahí mismo: si es un video o reel se reproduce, si es foto se ve grande. Desde ahí tenés el link para abrir la publicación en Instagram o Facebook.',
        'Fotos, stickers y audios: si el cliente mandó una foto, se ve la miniatura en el mensaje (clic para verla grande); los audios tienen reproductor y los videos se abren ahí mismo. Antes solo decía 📎 y había que ir a Meta.',
        'Mensaje privado con el link: cuando preguntan precio, el módulo arma un privado cálido con el link, los horarios de Alcorta y Unicenter y el WhatsApp de cada local (sin firma: los privados no llevan Clau). Con el buscador 🔎 elegís el producto por nombre, código Dragonfish o SKU: los que están en www.claudiaadorno.com (🌐) mandan el link directo a ese producto con su precio; los que solo están en la tienda del atelier (🔒, todavía con contraseña) mandan la portada de la web. El catálogo de la web se actualiza solo cada mañana.',
        'Link del producto en la sugerencia de Claude: cuando preguntan precio y la publicación deja claro de qué producto se trata, Claude busca la ficha en www.claudiaadorno.com y arma el privado con ese link y el precio. Si no puede saberlo (por ejemplo respondieron a una historia), manda la portada y pide que cuenten qué producto vieron; ahí usás el buscador 🔎 para completar el link.',
        'Enviar todos (sobre con número, arriba a la derecha de los filtros): escribís o corregís las respuestas de todas las tarjetas que quieras y después tocás ese botón una sola vez. Manda todas las respuestas escritas de la vista actual (cuenta, red y tipo que tengas filtrados). Antes te muestra cuántas son, cuántas corregiste vos y cuántas son sugerencias sin tocar, y te pide confirmar. Los privados de más de 24 h no entran (Meta no deja responderlos).',
        'Emojis (😊 al lado de ⚡): abre una paleta con los emojis que usa Clau; tocás uno y se pega donde está el cursor, en el último cuadro que tocaste de esa tarjeta.',
        'El buscador de producto aparece también cuando preguntan por medidas, colores, material, stock o modelo (no solo precio), para armar el privado con el link de la ficha.',
        'Productos con variantes a distintos precios (por ejemplo Twin / Queen / King): el buscador muestra el rango (de… a…) y el privado va SIN precio, diciendo que en la ficha está el precio de cada medida o color. Antes ponía el precio más bajo y confundía.',
        'Casilla "Enviar todos" en cada tarjeta: viene tildada. Si le sacás el tilde a una, esa queda afuera cuando tocás el botón Enviar todos (la tarjeta se ve atenuada); la podés mandar aparte con su propio botón o dejarla para después. El resumen antes de confirmar te dice cuántas quedaron sin tilde.',
        'Lo que escribís no se pierde: cada tarjeta que tocás queda marcada con una línea de color y el texto se guarda en tu navegador, aunque la lista se refresque, cambies de filtro o cierres la pestaña. Se borra solo cuando ese mensaje se envía.',
        'Privados de más de 24 h: Meta no deja responderlos por API pasado ese plazo (la tarjeta lo marca en rojo con ⏳). Si lo enviás igual va a quedar en error; contestalo desde la app de Instagram o Facebook con el botón ↗.',
        'Comentarios ofensivos o spam: el botón 🙈 Ocultar los esconde en Instagram o Facebook (todos dejan de verlo menos quien lo escribió, que no se entera). Cuando el sistema detecta insultos o estafas, lo avisa en rojo y sugiere ocultarlo en vez de responder. Los ocultados se ven en el filtro "Ocultados".',
        'Historial: al lado de la fecha, el enlace "historial" muestra qué escribió antes esa persona (en cualquiera de las dos redes) y qué le respondimos.',
        'Frases guardadas: los botoncitos arriba del cuadro (Horarios, Comprar online, WhatsApp…) agregan ese texto a la respuesta con un clic.',
        'Si una publicación tiene varios comentarios sin responder, en el primero aparece "Enviar los N de esta publicación": manda de una vez lo que está escrito en cada cuadro.',
        'Si la misma persona escribió en dos lados (comentario y privado, o Instagram y Facebook), la ficha lo avisa en ámbar para responder una sola vez.',
        '✨ Mejorar respuestas: Claude redacta una respuesta a medida para cada mensaje pendiente (lee el mensaje y la publicación, con la voz de Clau) y la deja como sugerencia. Lo hace una PC de la oficina que tenga Claude instalado; tarda unos minutos. También pasa solo a las 9 y a las 17. Nunca envía nada.',
        'Ignorar lo saca de la lista (stickers, saludos, spam). Se puede volver a pendientes desde el filtro "Ignorados".',
        'Las imágenes, stickers y audios no se pueden leer por acá: se ven en la app de Instagram o Facebook.',
        'Si algo lleva más de 2 horas sin responder, la fila se marca en ámbar y a JP le llega un aviso al celular. El número naranja de la pestaña es la cantidad sin responder.',
      ],
    },
    {
      icon: '💲', titulo: 'Oportunidades',
      desc: 'Cada pregunta de precio es alguien con ganas de comprar.',
      pasos: [
        'Acá quedan todos los mensajes y comentarios que preguntaron precio (últimos 90 días), con el estado de la respuesta y si se mandó el link.',
        'Anotá qué producto era y, cuando sepas, si compró o no. Con eso el módulo cuenta cuántas consultas terminan en venta.',
      ],
    },
    {
      icon: '🖼', titulo: 'Publicaciones',
      desc: 'Qué publicación funcionó: las últimas 25 de cada cuenta con alcance, me gusta, comentarios, compartidos y guardados.',
      pasos: [
        'Ordená por interacción para saber qué repetir. Se actualiza todas las mañanas.',
        'Cuando arranque la pauta, las de arriba son las candidatas a promocionar.',
      ],
    },
    {
      icon: '📝', titulo: 'Descripciones de la tienda',
      desc: 'Los productos de Shopify sin descripción (o en mayúsculas del Dragonfish) reciben un texto con la identidad del atelier.',
      pasos: [
        '✨ Redactar 30 más: Claude escribe 30 propuestas (texto + título y descripción para Google). Las ves en "Propuestas por aprobar".',
        'Aprobá, corregí o descartá cada una. Lo aprobado se sube a Shopify solo cada hora, o al toque con "⬆ Subir aprobadas". Nunca se tocan precios ni títulos.',
        'La auditoría de la tienda corre todos los lunes y deja las tareas en Tareas: sin precio, sin foto, sin descripción, sin SEO.',
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
