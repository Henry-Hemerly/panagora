import Header from './Header';
import {
    handleTabSelection,
    formatUrl,
    handleProductSelection,
    handleLinkClick,
    handlePopState,
    handleScreenResize,
} from './Helpers';

const MainPage = page => {
    (async function render() {
        const mainPage = document.querySelector('.mainPage');
        const as = document.querySelectorAll('a');

        mainPage.innerHTML = '';
        Header();
        mainPage.appendChild(await page);

        as.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState(
                    { page: 'products' },
                    '',
                    `${formatUrl(this.href)}`
                );
                handleLinkClick(this);
            });
        });
    })();

    handleTabSelection();
    handlePopState();
    handleProductSelection();
    handleScreenResize();
};

export default MainPage;
