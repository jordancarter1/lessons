
const products = {
    product: 'рис',
    price: 300,
    quantity: 10
}


if (products.quantity >= 10) {
    console.log('мало товара')
} else if (products.quantity <= 10) {
    console.log('достаточно товара')
} else if(products.quantity === 0) {
    
}



function GetProductInfo(products) {
    return `${products.product} стоят ${products.price} рублей`
}

// console.log(GetProductInfo(products));


for (let i = 1; i <= 10; i++) {
    products.quantity += i;
}

console.log(products.quantity + 'как бута ни то')