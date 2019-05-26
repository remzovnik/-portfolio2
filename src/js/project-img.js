(function() {
  if (window.matchMedia('(min-width: 640px)').matches) {
    var projectImgArr = document.querySelectorAll('.js-project-img-container');

    var dx = document
      .querySelector('.js-project-wrapper')
      .getBoundingClientRect().left;

    projectImgArr.forEach((element) => {
      element.addEventListener('mousemove', (event) => {
        if (element.opened !== true) {
          element.querySelector(
            '.js-project-img'
          ).style.clipPath = `circle(35% at ${event.x - dx}px ${event.y}px)`;
        }
      });

      element.addEventListener('mouseleave', () => {
        if (element.opened !== true) {
          element.querySelector('.js-project-img').style.clipPath =
            'circle(35% at 50% 50%)';
        }
      });
    });
  }
})();
