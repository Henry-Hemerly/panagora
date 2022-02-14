const Nav = () => {
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'nav');
    nav.innerHTML = `
        <ul class='navList'>
            <li><a href='http://localhost:3000/products' class='navLink' style='border-bottom: 3px solid #131518;'>Products</a></li> 
            <li><a href='http://localhost:3000/about' class='navLink'>About</a></li>
        </ul>
    `;
    document.querySelector('.header').appendChild(nav);
    return nav;
};

export default Nav;
