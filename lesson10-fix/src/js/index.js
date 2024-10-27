
const product = {
    name: "Смартфон",
    price: 52,
    quantity: 10; 
};

console.log("Информация о продукте:");
console.log(`Название: ${product.name}`);
console.log(`Цена: $${product.price}`);
console.log(`Количество на складе: ${product.quantity}`);



function getInfo(product) {
    if (product.quantity === 0) {
        console.log("Товар закончился");
    } else if (product.quantity > 0 && product.quantity <= 10) {
        console.log("Мало товара");
    } else if (product.quantity > 10) {
        console.log("Товара достаточно");
    }
}
getInfo(product)



function getProductInfo(products) {
    return `${products.product} стоят ${products.price} рублей`
}

// console.log(GetProductInfo(products));


for(let i = 1; i => 10; i++) {
    console.log(i);
}