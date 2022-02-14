import MainPage from './MainPage';
import database from '../data/products.json';
import Product from './Product';
import Products from './Products';
import About from './About';
import { formatUrl } from './Helpers';

const Router = URL => {
    if (
        URL.split('http://localhost:3000/')[1] === 'products' ||
        URL.split('http://localhost:3000/')[1] === ''
    ) {
        document.title = 'Our products';
        MainPage(Products());
    } else if (URL.split('http://localhost:3000/')[1] === 'about') {
        document.title = 'About Panagora';
        MainPage(About());
    } else {
        database.map(product => {
            if (
                formatUrl(product.name) ===
                URL.split('http://localhost:3000/')[1]
            ) {
                document.title = product.name;
                MainPage(Product(product.id));
            }
        });
    }
};

export default Router;
