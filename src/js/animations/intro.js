import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function() {
  var controller = new ScrollMagic.Controller();

  var introIconsTween = new TimelineMax();

  introIconsTween
    .addLabel('start')
    .from(
      document.querySelector('.js-icon-network'),
      1,
      {
        ease: Expo.easeOut,
        x: -400,
        y: 300,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-world'),
      1,
      {
        ease: Expo.easeOut,
        x: -400,
        y: 100,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-mobile'),
      1,
      {
        ease: Expo.easeOut,
        x: -400,
        y: -100,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-twitter'),
      1,
      {
        ease: Expo.easeOut,
        x: -400,
        y: 400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-folder'),
      1,
      {
        ease: Expo.easeOut,
        x: 0,
        y: 400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-github'),
      1,
      {
        ease: Expo.easeOut,
        x: 0,
        y: -400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-like'),
      1,
      {
        ease: Expo.easeOut,
        x: 0,
        y: -400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-robot'),
      1,
      {
        ease: Expo.easeOut,
        x: 0,
        y: -400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-cart'),
      1,
      {
        ease: Expo.easeOut,
        x: 100,
        y: 400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-telegram'),
      1,
      {
        ease: Expo.easeOut,
        x: 200,
        y: -400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-letter'),
      1,
      {
        ease: Expo.easeOut,
        x: 200,
        y: 400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-cup'),
      1,
      {
        ease: Expo.easeOut,
        x: 400,
        y: -400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-google'),
      1,
      {
        ease: Expo.easeOut,
        x: 400,
        y: 400,
        opacity: 0,
      },
      'start'
    )
    .from(
      document.querySelector('.js-icon-facebook'),
      1,
      {
        ease: Expo.easeOut,
        x: 400,
        y: 200,
        opacity: 0,
      },
      'start'
    );
})();
