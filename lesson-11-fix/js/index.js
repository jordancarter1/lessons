// 2 задание

 const string = 'строка с данными'

 console.log(str.length)

// (3)Написать функцию, которая принимает строку и возвращает
//  её в обратном порядке



  function reverseString(str) {
      return str.split('').reverse('').join('');
  }

  console.log(reverseString('viperr'));



//  (4)Написать функцию, которая принимает строку и проверяет,
//   содержит ли она подстроку:


 const str = 'тута есть подстрока?'
 console.log(str.includes('тута'))


// // (5) Функция принимает 2 аргумента: строку и подстроку
//  Функция возвращает true, если подстрока содержится в строке,
//   и false, если нет

 function containsSubstring(str, substr) {
     return str.includes(substr)
 }
 console.log(containsSubstring("привет мир"))
 console.log(containsSubstring("рис с курицей", "рис"))
 console.log(containsSubstring("плэйбой карти", "карти"))


// последнее задани

const array = ['string', 52]

console.log(array.length)

array.push('анаболические стероиды', 'последний элемент')
array.unshift(1488, 'чиназес')

//  console.log(array.length)

array.splice(2)
//  console.log(array)

 function reverseArray(array) {
     return array.reverse(array);
 }
 console.log(reverseArray(array))





