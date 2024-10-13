// 2 задание

 const str = 'строка с данными'

 console.log(str.length)

// (3)Написать функцию, которая принимает строку и возвращает
//  её в обратном порядке



  function reverseString(str) {
      return str.split('').reverse('').join('');
  }

  console.log(reverseString('viperr'));



//  (4)Написать функцию, которая принимает строку и проверяет,
//   содержит ли она подстроку:

 const substringcheck = 'проверить есть ли подстрока в этом элементе'
  console.log(substringcheck.substring(0, 10));

 const substringcheck = 'проверить есть ли подстрока в этом элементе'
 console.log(substringcheck.slice(-9, -2));

 const str = 'тута есть подстрока?'
 console.log(str.includes('тута'))


// // (5) Функция принимает 2 аргумента: строку и подстроку
//  Функция возвращает true, если подстрока содержится в строке,
//   и false, если нет

 function check(str, substr) {
     return str.includes(substr)
 }
 console.log(check("привет мир"))
 console.log(check("рис с курицей", "рис"))
 console.log(check("плэйбой карти", "карти"))


// последнее задани

const array = ['string', 52]

console.log(array.length)

array.push('анаболические стероиды')
array.unshift(1488)

//  console.log(array.length)

array.splice(2, 2)
//  console.log(array)

 function reversedArray(array) {
     return array.reverse(array);
 }
 console.log(reversedArray(array))





