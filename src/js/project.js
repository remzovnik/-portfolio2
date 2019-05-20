(function() {
  const imgWrapper = document.querySelector('.js-project-img-wrapper');
  const img = document.querySelector('.js-project-img');
  let isStopped = false;

  imgWrapper.addEventListener('mousemove', (event) => {
    if (!isStopped)
      img.style.clipPath = `circle(100px at ${event.x}px ${event.y}px)`;
  });

  imgWrapper.addEventListener('click', () => {
    img.style.clipPath = 'circle(100%)';
    isStopped = !isStopped;
  });
})();
