(function() {
  var projectImgArr = document.querySelectorAll('.js-project-img-container');

  var dx = document.querySelector('.js-project-wrapper').getBoundingClientRect()
    .left;

  projectImgArr.forEach((element) => {
    element.addEventListener('mousemove', (event) => {
      if (element.opened !== true) {
        element.querySelector(
          '.js-project-img'
        ).style.clipPath = `circle(35% at ${event.x - dx}px ${event.y}px)`;
      }
    });

    element.addEventListener('click', () => {
      element.querySelector('.js-project-img').style.clipPath = '';
      element.querySelector('.js-project-img').classList.add('opened');
      element.opened = true;
    });

    element.addEventListener('mouseleave', () => {
      if (element.opened !== true) {
        element.querySelector(
          '.js-project-img'
        ).style.clipPath = `circle(35% at 50% 50%)`;
      }
    });
  });
})();
