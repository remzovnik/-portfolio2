(function() {
  if (window.matchMedia('(min-width: 960px)').matches) {
    var cursor = document.querySelector('.js-cursor');
    var interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, .about__love'
    );
    document.addEventListener('mousemove', (event) => {
      cursor.style.left = `${event.pageX - 10}px`;
      cursor.style.top = `${event.pageY - 10}px`;
    });
    document.addEventListener('  touchmove', (event) => {
      cursor.style.left = `${event.pageX - 10}px`;
      cursor.style.top = `${event.pageY - 10}px`;
    });

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', function() {
        cursor.classList.add('is-hovering');
      });
      element.addEventListener('mouseleave', function() {
        cursor.classList.remove('is-hovering');
      });
    });
  }
})();
