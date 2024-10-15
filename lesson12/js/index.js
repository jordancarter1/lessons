 let i = 0

 while (i < 20) {
   i++
   if (i === 10) {
     continue
   }
   if (i === 13) {
     continue
  }
 }

 function count(number) {
   if (number % 10 === 0) {
     console.log(number + "является четным")
   } else {
     console.log(number + " не является четынм")
   }
 }



 const users = [
   { name: 'Alice', age: 25 },
   { name: 'Bob', age: 30 },
   { name: 'Charlie', age: 35 }
 ]



 users.forEach(user => {
   console.log(`Имя пользователя: ${users.name}, Возраст: ${user.age} `);
 });


 const products = [
   { name: 'Laptop', price: 1000 },
   { name: 'Phone', price: 500 },
   { name: 'Tablet', price: 300 }
 ]

 цены увеличины на 10%

 products.forEach (products => {
   products.price *= 1.10;
   console.log(products)
 });


  Используя заданный массив задач tasks,
  создать новый массив,
   в котором будут только выполненные задачи





 const tasks = [
   { title: 'Task 1', completed: true },
   { title: 'Task 2', completed: false },
   { title: 'Task 3', completed: true }
 ];


 let readytasks = tasks.filter(tasks => tasks.completed);


 console.log(readytasks);


 Используя заданный массив студентов students,
  отсортировать студентов по оценкам по убыванию


 const students = [
   { name: 'John', grade: 85 },
   { name: 'Jane', grade: 92 },
   { name: 'Alex', grade: 78 }
 ]


 students.sort((a, b) => b.grade - a.grade);
 console.log(students);  

 ну хз, но в теории вот так должно быть



 const books = [
   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
   { title: '1984', author: 'George Orwell' },
   { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
 ]

 let findBook = 'George Orwell'
 let finalFound = books.find(books => books.title === findBook);
 console.log(findBook);




 const cars = [
   { model: 'Tesla', color: 'red' },
  { model: 'BMW', color: 'blue' },
   { model: 'Audi', color: 'black' }
 ]

function find(cars, color) {
   return cars.some(cars => cars.color === color);
 }

 console.log(find(cars, 'red'));
console.log(find(cars, 'pink'));


const purchases = [
  { item: 'Book', date: '2023-09-10' },
  { item: 'Laptop', date: '2023-09-05' },
  { item: 'Phone', date: '2023-09-01' }
]

purchases.reverse();
console.log(purchases);