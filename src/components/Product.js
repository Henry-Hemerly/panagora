const Product = async id => {
    const data = await fetch(`../data/${id}.json`);
    const product = await data.json();
    const section = document.createElement('section');
    section.setAttribute('class', 'product');
    document.querySelector('.mainPage').appendChild(section);
    section.innerHTML = `
        <figure>
            <img src=${product.image} class='product-image'>
        </figure>
        <section class='product-content'>
            <p class ='product-name'>${product.name}</p>
            <p class ='product-description'>${product.description}</p>
            <div class='product-price'>
                <p>${product.price}</p>  
                <p>${product.currency}</p>
            </div>
            <div class='dropdown'>
                <button class='dropdown-button'>Pick a size</button>
                    <ul class='dropdown-content'>
                        <a onclick='return false' href='' class='size'>36</a>
                        <a onclick='return false' href='' class='size'>44</a>
                        <a onclick='return false' href='' class='size'>46</a>
                    </ul>
                </div>          
            <button type='button' disabled class='button'>Add to cart</button>
        </section>
    `;
    return section;
};

export default Product;

{
    /* <form>
                    <label> Pick your size </label>
                    <select>
                        <option value='36'>36</option>
                        <option value='38'>38</option>
                        <option value='39'>39</option>
                        <option value='41'>41</option>
                        <option value='42'>42</option>
                        <option value='44'>44</option>
                    </select> 
                </form> */
}
