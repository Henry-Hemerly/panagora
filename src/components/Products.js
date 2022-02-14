import ProductCard from './ProductCard';
import database from '../data/products.json';

const Products = () => {
    const products = document.createElement('section');
    products.setAttribute('class', 'products');
    document.querySelector('.mainPage').appendChild(products);
    database.map(product => products.appendChild(ProductCard(product)));
    return products;
};

export default Products;
