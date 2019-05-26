import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import TweenMax from 'gsap/src/uncompressed/TweenMax';

(function() {
  var btnMenu = document.querySelector('.js-btn-menu');
  var menu = document.querySelector('.js-menu');
  menu.isActive = false;

  var menuOpenTween = new TimelineMax({ paused: true });

  menuOpenTween
    .to(btnMenu, 0.25, { color: '#f9d02f' })
    .to(document.querySelector('body'), 0, { className: '+=menu-is-opened' })
    .to(document.querySelector('.js-menu-substrate'), 0.5, {
      scale: 450,
    })
    .to(document.querySelector('.js-menu'), 0, {
      className: '+=is-active',
      backgroundColor: '#f9d02f',
    })
    .staggerFrom(
      menu.querySelectorAll('.js-menu-item'),
      0.5,
      {
        y: -100,
        opacity: 0,
        ease: Power2.easeOut,
      },
      0.15
    )
    .to(btnMenu, 0.25, { color: '#f9d02f' });

  var menuCloseTween = new TimelineMax({ paused: true });

  menuCloseTween
    .to(
      menu.querySelectorAll('.js-menu-item'),
      0.25,
      {
        opacity: 0,
        ease: Power2.easeOut,
      },
      0
    )
    .to(document.querySelector('body'), 0, { className: '-=menu-is-opened' })
    .to(document.querySelector('.js-menu'), 0, {
      className: '-=is-active',
      backgroundColor: 'transparent',
    })
    .to(document.querySelector('.js-menu-substrate'), 0.5, {
      scale: 0,
    })
    .to(btnMenu, 0.25, { color: '#fff' });

  btnMenu.addEventListener('click', () => {
    if (menu.isActive) {
      menuCloseTween.play(0);
      menu.isActive = false;
    } else {
      menuOpenTween.play(0);
      menu.isActive = true;
    }
  });

  menu.querySelectorAll('.js-menu-item').forEach((element) => {
    element.addEventListener('click', () => {
      menuCloseTween.play(0);
      menu.isActive = false;
    });
  });
})();
