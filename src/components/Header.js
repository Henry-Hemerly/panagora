import Logo from './Logo';
import Nav from './Nav';
import HamburgerMenu from './HamburgerMenu';

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

    return header;
};

export default Header;
