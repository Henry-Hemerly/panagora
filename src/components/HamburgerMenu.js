const HamburgerMenu = () => {
    const ul = document.createElement('ul');
    const btn = document.createElement('button');

    ul.classList.add('menu');
    ul.innerHTML = `
        <li><a class='menuItem' href='http://localhost:3000/'>Products</a></li>
        <li><a class='menuItem' href='http://localhost:3000/about'>About</a></li>
    `;
    btn.classList.add('hamburger');
    btn.innerHTML = `
        <i class='menuIcon material-icons'>menu</i>
        <i class='closeIcon material-icons'>close</i>
    `;

    document.querySelector('.header').append(ul, btn);

    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const closeIcon = document.querySelector('.closeIcon');
    const menuIcon = document.querySelector('.menuIcon');

    const toggleMenu = () => {
        if (menu.classList.contains('showMenu')) {
            menu.classList.remove('showMenu');
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'block';
        } else {
            menu.classList.add('showMenu');
            closeIcon.style.display = 'block';
            menuIcon.style.display = 'none';
        }
    };

    hamburger.addEventListener('click', toggleMenu);
};

export default HamburgerMenu;
