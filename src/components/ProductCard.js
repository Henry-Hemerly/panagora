import { formatUrl } from './Helpers';

const ProductCard = product => {
    const productCard = document.createElement('article');
    productCard.setAttribute('class', 'productCard');
    document.querySelector('.products').appendChild(productCard);

    productCard.innerHTML = `
        <figure>
        <a href='http://localhost:3000/${formatUrl(product.name)}'>
        <img src=${product.thumbnail} alt='${
        product.name
    }' class='productCard-image' />
        </a>
        </figure>      
        <ul class='productCard-details'>
                <li class='productCard-name'><a href='http://localhost:3000/${formatUrl(
                    product.name
                )}'>${product.name}</a></li>
                <li class='productCard-price'><a href='http://localhost:3000/${formatUrl(
                    product.name
                )}'>${product.price} SEK</a></li>
        </ul>
    `;
    return productCard;
};

export default ProductCard;
