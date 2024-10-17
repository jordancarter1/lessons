 const nestedArray = [[1, 2], [3, [4, 5]], 6];

 let array = nestedArray.flat(2);

 console.log(array);


 const products = [
     { id: 1, name: 'Телефон', inStock: true },
     { id: 2, name: 'Ноутбук', inStock: false },
     { id: 3, name: 'Часы', inStock: false }
  ]


   function find(products, name) {
     return products.some(products => products.name === name);    
  }


   console.log(find(products, 'Телефон'));
   console.log(find(products, 'планшет'));


 const transactions = [
     { id: 1, type: 'income', amount: 500 },
    { id: 2, type: 'expense', amount: 100 },
     { id: 3, type: 'income', amount: 200 },
     { id: 4, type: 'expense', amount: 50 }
   ]

   function count(transactions) {
     return transactions.reduce((total, transactions) => total + transactions.amount, 0);

   }

   let balance = count(transactions);
   console.log(count(transactions) + 'баланс');



 const user = {
     name: 'John',
     email: 'john@example.com',
     age: 25
   }

   function getObject(obj, returnKeys = true) {
     return returnKeys ? Object.keys(obj) : Object.values(obj);
   }

   console.log(getObject(user, true));
   console.log(getObject(user, false));



 const cart = {
     apple: 2,
     banana: 3,
     orange: 1
   }

   function printRec(cart) {
     console.log('чек магазина');
     for(let item in cart) {
         console.log(`${[item]}: ${cart[item]} шт`);
     }
   }
   printRec(cart);




 function checkAge(age) {
     if (age < 18) {
       throw new Error("Возраст должен быть 18 лет или больше.");
     } else {
       console.log("Возраст подходит.");
     }
   }

   try {
     let userAge = 19;
     checkAge(userAge);
   } catch(error) {
     console.error('error', error.massage);
   }




 function checkNumber(num) {
     return new Promise((resolve, reject) => {
       if (num > 10) {
         resolve("Число больше 10");
      } else {
        reject("Число 10 или меньше");
      }
     });
   }
  
 checkNumber(15)
   .then((message) => {
     console.log(message); 
   })
   .catch((error) => {
     console.error(error); 
   });



 function count(n) {
     for(let i = 0; i < 5; i++)
         if(i === 0) {
             console.error('нечего выводить не нужно')
         }
 }

 console.log(count(i));

 const main = {
     string: 'some words',
     age: 20
 }

/setTimeout(  function summ(main) {   
     console.log('сообщение')
 }, 4000)

 console.log(summ(main));


    
function fetchProducts() {
    fetch('https://dummyjson.com/products?limit=10&select=title,price')
      .then(response => {
        if (!response.ok) {
          throw new Error("Не удалось получить данные");
        }
        return response.json();
      })
      .then(data => {
        if (data.products && data.products.length > 0) {
          console.log("Первый продукт:", data.products[0]);
        } else {
          console.log("Продукты не найдены.");
        }
      })
      .catch(error => {
        console.error("Ошибка:", error.message);
      })};

      fetchProducts()
      