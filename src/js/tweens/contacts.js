import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

var controller = new ScrollMagic.Controller();

//main tween
var contactsTween = new TimelineMax();

contactsTween
  .from(document.querySelector('.js-contacts-title'), 0.6, {
    x: -500,
    opacity: 0,
    ease: Back.easeOut.config(1.7),
  })
  .from(document.querySelector('.js-yeah'), 0.5, {
    scale: 0,
    ease: Bounce.easeOut,
  })
  .staggerFrom(
    document.querySelectorAll('.js-contacts-item'),
    0.5,
    {
      x: -300,
      opacity: 0,
      ease: Power3.easeOut,
    },
    0.25
  );

var contactsScene = new ScrollMagic.Scene({
  triggerElement: document.querySelector('.js-contacts'),
  reverse: false,
})
  .setTween(contactsTween)
  .addTo(controller);

export default contactsScene;
