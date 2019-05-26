import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

var controller = new ScrollMagic.Controller();

//main tween
var aboutTween = new TimelineMax();

aboutTween
  .from(document.querySelector('.js-about-title'), 0.6, {
    x: -500,
    opacity: 0,
    ease: Back.easeOut.config(1.7),
  })
  .from(document.querySelector('.js-wild-free-ampersand'), 0.5, {
    opacity: 0,
  })
  .from(document.querySelector('.js-wild-free-text-1'), 0.25, {
    opacity: 0,
    y: 10,
    ease: Power1.easeInOut,
  })
  .from(
    document.querySelector('.js-wild-free-text-2'),
    0.25,
    {
      opacity: 0,
      y: -10,
      ease: Power1.easeInOut,
    },
    '-=0.25'
  )
  .staggerFrom(
    document.querySelectorAll('.js-about-text p'),
    1,
    {
      opacity: 0,
      y: 35,
      ease: Power2.easeOut,
    },
    0.25
  );

var aboutSceene = new ScrollMagic.Scene({
  triggerElement: document.querySelector('.js-about'),
  reverse: false,
})
  .setTween(aboutTween)
  .addTo(controller);

//Photo tweens
var aboutPhotoTween = new TimelineMax();

aboutPhotoTween
  .fromTo(
    document.querySelector('.js-about-face-serious'),
    0.25,
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
  )
  .fromTo(
    document.querySelector('.js-about-face-fun'),
    0.25,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .from(document.querySelector('.js-xoxo'), 0.25, {
    y: -200,
    opacity: 0,
  });

new ScrollMagic.Scene({
  triggerElement: document.querySelector('.js-projects'),
  reverse: true,
  offset: -500,
})
  .setTween(aboutPhotoTween)
  .addTo(controller);

export default aboutSceene;
