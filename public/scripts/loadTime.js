const startTime = Date.now();
window.addEventListener('load', () => {
  const clientTime = Date.now() - startTime;
  let element = document.querySelector('footer div');
  element.textContent = `Время загрузки: ${clientTime} мс (клиент), ${serverTime} мс (сервер)`;
});
