import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function() {
  var controller = new ScrollMagic.Controller();

  window.addEventListener('load', () => {
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
        'start += 0.1'
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
        'start += 0.2'
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
        'start += 0.1'
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
        'start +=0.2'
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
        'start +=0.1'
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
        'start += 0.1'
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
        'start += 0.2'
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
        'start += 0.3'
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
        'start += 0.1'
      )
      .addLabel('group-3')
      .from(
        document.querySelector('.js-icon-telegram'),
        1,
        {
          ease: Expo.easeOut,
          x: 200,
          y: -400,
          opacity: 0,
        },
        'start += 0.2'
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
        'start += 0.4'
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
        'start += 0.3'
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
        'start += 0.5'
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
        'start += 0.2'
      )
      .from(
        document.querySelector('.js-icon-cloud'),
        1,
        {
          ease: Expo.easeOut,
          x: 400,
          y: 300,
          opacity: 0,
        },
        'start += 0.6'
      );
  });

  //animation on scroll

  var scrollIconsTween = new TimelineMax();

  scrollIconsTween
    .addLabel('start')
    .to(
      document.querySelector('.js-icon-network'),
      1,
      {
        ease: Expo.easeIn,
        x: -400,
        y: 300,
        opacity: 0,
      },
      'start += 0.1'
    )
    .to(
      document.querySelector('.js-icon-world'),
      1,
      {
        ease: Expo.easeIn,
        x: -400,
        y: 100,
        opacity: 0,
      },
      'start += 0.2'
    )
    .to(
      document.querySelector('.js-icon-mobile'),
      1,
      {
        ease: Expo.easeIn,
        x: -400,
        y: -100,
        opacity: 0,
      },
      'start += 0.1'
    )
    .to(
      document.querySelector('.js-icon-twitter'),
      1,
      {
        ease: Expo.easeIn,
        x: -400,
        y: 400,
        opacity: 0,
      },
      'start +=0.2'
    )
    .to(
      document.querySelector('.js-icon-folder'),
      1,
      {
        ease: Expo.easeIn,
        x: 0,
        y: 400,
        opacity: 0,
      },
      'start +=0.1'
    )
    .to(
      document.querySelector('.js-icon-github'),
      1,
      {
        ease: Expo.easeIn,
        x: 0,
        y: -400,
        opacity: 0,
      },
      'start += 0.1'
    )
    .to(
      document.querySelector('.js-icon-like'),
      1,
      {
        ease: Expo.easeIn,
        x: 0,
        y: -400,
        opacity: 0,
      },
      'start += 0.2'
    )
    .to(
      document.querySelector('.js-icon-robot'),
      1,
      {
        ease: Expo.easeIn,
        x: 0,
        y: -400,
        opacity: 0,
      },
      'start += 0.3'
    )
    .to(
      document.querySelector('.js-icon-cart'),
      1,
      {
        ease: Expo.easeIn,
        x: 100,
        y: 400,
        opacity: 0,
      },
      'start += 0.1'
    )
    .addLabel('group-3')
    .to(
      document.querySelector('.js-icon-telegram'),
      1,
      {
        ease: Expo.easeIn,
        x: 200,
        y: -400,
        opacity: 0,
      },
      'start += 0.2'
    )
    .to(
      document.querySelector('.js-icon-letter'),
      1,
      {
        ease: Expo.easeIn,
        x: 200,
        y: 400,
        opacity: 0,
      },
      'start += 0.4'
    )
    .to(
      document.querySelector('.js-icon-cup'),
      1,
      {
        ease: Expo.easeIn,
        x: 400,
        y: -400,
        opacity: 0,
      },
      'start += 0.3'
    )
    .to(
      document.querySelector('.js-icon-google'),
      1,
      {
        ease: Expo.easeIn,
        x: 400,
        y: 400,
        opacity: 0,
      },
      'start += 0.5'
    )
    .to(
      document.querySelector('.js-icon-facebook'),
      1,
      {
        ease: Expo.easeIn,
        x: 400,
        y: 200,
        opacity: 0,
      },
      'start += 0.2'
    )
    .to(
      document.querySelector('.js-icon-cloud'),
      1,
      {
        ease: Expo.easeIn,
        x: 400,
        y: 300,
        opacity: 0,
      },
      'start += 0.3'
    );

  new ScrollMagic.Scene({
    triggerElement: document.querySelector('.js-about'),
    offset: -250,
    reverse: true,
  })
    .setTween(scrollIconsTween)
    .addTo(controller);
})();
