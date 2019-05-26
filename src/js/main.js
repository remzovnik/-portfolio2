import './tweens/intro';
import restartScene from './tweens/restart';
import aboutSceene from './tweens/about';
import projectsScene from './tweens/projects';
import contactsScene from './tweens/contacts';
import './tweens/menu';
import './project-img';
import './project-bg';
import Typer from './hello';
import './cursor';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
window.UIkit = UIkit;

//typing Hello, world!
var typer = new Typer(document.querySelector('.js-hello'), ['Hello, World!']);
typer.init();

document.querySelector('.js-restart').addEventListener('click', () => {
  typer.reset();
});

//reset scenes
var scenes = [aboutSceene, projectsScene, contactsScene, restartScene];
document.querySelector('.js-restart').addEventListener('click', () => {
  scenes.forEach((element) => {
    element.reverse(true);
  });
});

console.log('٩(◕‿◕)۶');
