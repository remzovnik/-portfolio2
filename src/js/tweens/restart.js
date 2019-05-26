import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

var controller = new ScrollMagic.Controller();

var restartTween = new TimelineMax();

restartTween.from(document.querySelector('.js-restart-go'), 15, {
  strokeDashoffset: 500,
});

var restartScene = new ScrollMagic.Scene({
  triggerElement: document.querySelector('.js-contacts'),
  reverse: false,
  offset: 250,
})
  .setTween(restartTween)
  .addTo(controller);

export default restartScene;
