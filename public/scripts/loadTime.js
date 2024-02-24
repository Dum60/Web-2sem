const startTime = Date.now();

window.addEventListener('load', () => {
  const loadTime = Date.now() - startTime;
  let element = document.querySelector('footer div');
  element.textContent = `Время загрузки: ${loadTime} мс`;
});
