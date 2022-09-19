// ==============================СОЗДАНИЕ КОЛЛЕКЦИЙ ТОВАРОВ=======================time: 1:47
import products from './product.js'
console.log(products);


// const product = {
//     name: 'Сервоприводы',
//     description: 'lorem bla bla bla',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

{/* <article class="product">
    <h2 class="product__name">Название</h2>
    <p class="product__desc">Описание</p>
    <p class="product__price">Цена</p>
</article> */}

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descEl = document.createElement('p');
// descEl.textContent = product.description;
// descEl.classList.add('product__desc');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${product.price} деняк`;
// priceEl.classList.add('product__price');

// console.log(nameEl);
// console.log(descEl);
// console.log(priceEl);

// productEl.append(nameEl, descEl, priceEl);

// console.log(productEl);

// напишем функцию, которая будет создавать одну карточку товара
// используем деструкткризацию. вместо product пишем {name, description, price}

const productsContainerEl = document.querySelector('.js-product');

const makeProductCard = ({name, description, price}) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
    nameEl.textContent = name;
    nameEl.classList.add('product__name');

    const descEl = document.createElement('p');
    descEl.textContent = description;
    descEl.classList.add('product__desc');

    const priceEl = document.createElement('p');
    priceEl.textContent = `Цена: ${price} деняк`;
    priceEl.classList.add('product__price');

    productEl.append(nameEl, descEl, priceEl);

    return productEl;
}

console.log(makeProductCard(products[2]));

// напишем функцию, которая будет создавать много карточек товара
const elements = products.map(makeProductCard);

console.log(elements);
productsContainerEl.append(...elements);

