import Logo from './Logo';
import Nav from './Nav';
import HamburgerMenu from './HamburgerMenu';
import { handleScreenResize } from './Helpers';

const Header = () => {
    const header = document.createElement('header');
    header.setAttribute('class', 'header');
    document.querySelector('.mainPage').appendChild(header);

    if (window.innerWidth < 480) {
        HamburgerMenu();
    } else {
        header.appendChild(Logo());
        header.appendChild(Nav());
    }

    // window.addEventListener('resize', () => {
    //     const hamburger = document.querySelector('.hamburger');
    //     const hamMenu = document.querySelector('.menu');
    //     const nav = document.querySelector('.nav');
    //     const logo = document.querySelector('.logo');
    //     let width = window.innerWidth;

    //     if (hamburger && width > 480) {

    //         header.removeChild(document.querySelector('.hamburger'));

    //         header.removeChild(hamMenu);
    //         header.appendChild(Logo());
    //         header.appendChild(Nav());
    //     }

    //     if (nav && width < 480) {
    //         header.removeChild(logo);

    //         header.removeChild(nav);
    //         HamburgerMenu();
    //     }
    // });
    return header;
};

export default Header;
