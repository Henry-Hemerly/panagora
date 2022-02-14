import Router from './Router';
import Logo from './Logo';
import Nav from './Nav';
import HamburgerMenu from './HamburgerMenu';

const formatUrl = URL => {
    if (URL.includes('http')) {
        URL.split('http://localhost:3000/')[1].replace('/', '-');
        return URL;
    }
    return URL.split(' ').join('-').replace('/', '-');
};

const handleTabSelection = () => {
    const border = '3px solid #131518';
    const navLinks = document.querySelectorAll('.navLink');
    navLinks.forEach(navLink => {
        if (navLink.style.borderBottom) {
            navLink.style.borderBottom = 'unset';
        }
        if (
            window.location.href.split('http://localhost:3000/')[1] === 'about'
        ) {
            navLinks[1].style.borderBottom = border;
        } else {
            navLinks[0].style.borderBottom = border;
        }
    });
};

const handleProductSelection = () => {
    window.addEventListener('click', event => {
        const product = window.location.href
            .split('http://localhost:3000/')[1]
            .split('-')
            .join(' ');
        if (event.target.classList.contains('size')) {
            document.querySelector('.button').disabled = false;
            document.querySelector('.dropdown-button').innerHTML =
                event.target.innerHTML;
        }
        if (
            event.target.classList.contains('button') &&
            !event.target.disabled
        ) {
            return window.confirm(`You've just added ${product} to your cart!`);
        }
    });
};

const handleLinkClick = link => {
    Router(link.href);
};

const handlePopState = () => {
    window.onpopstate = event => {
        if (event.target.location.href) {
            Router(event.target.location.href);
        }
    };
};

const handleScreenResize = () => {
    window.addEventListener('resize', () => {
        const header = document.querySelector('.header');
        const hamburger = document.querySelector('.hamburger');
        const hamMenu = document.querySelector('.menu');
        const nav = document.querySelector('.nav');
        const logo = document.querySelector('.logo');
        let width = window.innerWidth;

        if (hamburger && width > 480) {
            header.removeChild(document.querySelector('.hamburger'));

            header.removeChild(hamMenu);
            header.appendChild(Logo());
            header.appendChild(Nav());
        }

        if (nav && width < 480) {
            header.removeChild(logo);

            header.removeChild(nav);
            HamburgerMenu();
        }
    });
};
export {
    formatUrl,
    handleTabSelection,
    handleProductSelection,
    handleLinkClick,
    handlePopState,
    handleScreenResize,
};
