// Статическая и Динамическая типизация

// Статическая типизация
// String a = 'abc' // Обьявление статической переменной типа String - строка
// int b = 10      // Обьявление статической переменной типа Integer - число
// b = 'xyz' // Error! Попытка переприсвоить переменной b строчное значение

// Динамическая типизация (без обьявления типа перед переменной)
let a = 'abc' // присвоение переменной а значения типа String
a = 10 // переприсвоение переменной а значения типа Integer (Number)
a = true // переприсвоение переменной а значения типа boolean
a = undefined // переприсвоение переменной а значения (нету) undefined
console.log(a) // Вывод в консоль значения переменной

// Обьявление функции стрелочного типа с помощю const
// ! Если использовать стандартный тип вызова функции "function" - значение переменных можно изменять в дальнейшем...
// ...что может привести к ошибке
const car =() => { // car - в данном случае - ето функция обьявлена с помощью const car =() => {}
    console.log('BMW') // Вывод в консоль значения функции
}
car() // BMW
car = 10 // попытка переприсвоить значение типа int (number) значению 'BMW' типа String которое обьявлено...
         //...как функция const стрелочного типа не будет возможна!
car()
