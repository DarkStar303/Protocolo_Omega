// Control del iframe WebGL de Unity y pantalla completa para GitHub Pages.
(function () {
  const frame = document.getElementById('gameFrame');
  const wrap = document.getElementById('gameWrap');
  const btnFullscreen = document.getElementById('btnFullscreen');

  // Dar foco al canvas del juego al hacer clic en el contenedor
  wrap.addEventListener('click', () => {
    if (frame && frame.contentWindow) {
      frame.contentWindow.focus();
    }
  });

  btnFullscreen.addEventListener('click', () => {
    try {
      if (frame && frame.contentWindow && frame.contentWindow.unityInstance) {
        frame.contentWindow.unityInstance.SetFullscreen(1);
        frame.contentWindow.focus();
        return;
      }
    } catch (_) {}

    const el = frame || wrap;
    if (el.requestFullscreen) el.requestFullscreen();
  });
})();
