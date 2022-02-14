const Logo = () => {
    const logo = document.createElement('figure');
    logo.setAttribute('class', 'logo');
    logo.innerHTML = `<a href='/products'><img src='/static/panagora-logo.svg' alt='Panagora Logo'/></a>`;
    return logo;
};

export default Logo;
