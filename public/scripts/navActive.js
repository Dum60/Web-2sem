(() => {
  window.addEventListener('load', () => {
    const loc = window.location.pathname.split('/').at(-1);

    let menuItems = document.querySelectorAll('.nav-list > li > a');

    menuItems.forEach(function (item) {
      if (item.getAttribute('href') === loc) {
        const parent = item.parentNode;
        parent.classList.add('nav-active');
        parent.classList.remove('tile');
      }
    });
  });
})();
