import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

var controller = new ScrollMagic.Controller();

//main tween
var projectsTween = new TimelineMax();

projectsTween
  .from(document.querySelector('.js-projects-title'), 0.6, {
    x: -500,
    opacity: 0,
    ease: Back.easeOut.config(1.7),
  })
  .from(document.querySelector('.js-hot'), 0.5, {
    y: 10,
    opacity: 0,
  });

var projectsScene = new ScrollMagic.Scene({
  triggerElement: document.querySelector('.js-projects'),
  reverse: false,
})
  .setTween(projectsTween)
  .addTo(controller);

export default projectsScene;
