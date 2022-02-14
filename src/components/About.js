const About = () => {
    const about = document.createElement('section');
    about.setAttribute('class', 'about');
    document.querySelector('.mainPage').appendChild(about);
    about.innerHTML = `This is a mock tab for functionality purposes`;
    return about;
};

export default About;
