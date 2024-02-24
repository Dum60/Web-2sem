async function loadImages() {
  let wrapper = document.getElementById('swiper-wrapper');
  let swiper = document.getElementById('swiper');

  let loader = document.createElement('div');
  loader.classList.add('loader');
  wrapper.appendChild(loader);

  let response;

  try {
    response = await fetch(
      'https://my-json-server.typicode.com/Dum60/Web/photos',
    );
  } catch {
    let error = document.createElement('div');
    error.innerHTML = 'failed to load images';
    swiper.appendChild(error);
    wrapper.removeChild(loader);
    throw response.statusText;
  }

  let images = await response.json();
  wrapper.removeChild(loader);
  for (let image of images) {
    let slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    let img = document.createElement('img');
    img.setAttribute('src', image.source);
    slide.appendChild(img);
    wrapper.appendChild(slide);
  }
  swiper.setAttribute('visibility', 'visible');
}
