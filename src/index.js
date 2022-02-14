import './index.scss';
import Router from './components/Router';

const mainPage = document.createElement('div');
mainPage.setAttribute('class', 'globalGrid mainPage');
document.querySelector('body').appendChild(mainPage);

Router(window.location.href);
