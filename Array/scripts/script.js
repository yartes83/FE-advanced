// https://www.youtube.com/watch?v=GULFKAX0nxY  Фрілансер

let arr = [] //створення массиву

let arrOne1 = [
    'Ваня',
    'Иштван',
    'Оля', //висяча кома
];

//різні типи масивів
let arrTwo = [
    "Коля",
    {
        type: "JS",
        age: 36
    },
    true,
    function () {
        console.log('Привіт, я Коля');
    }
];
console.log(arrTwo);
console.log(arrTwo[0])
console.log(arrTwo[1].age)
console.log(arrTwo[3])
arrTwo[3]()

//багатовимірні массиви
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[2][2])

//запит на отримання даних
let arrOne = [
    'Ваня', //0 позиція
    'Иштван', // 1 позиція
    'Оля', // 2 позиція
];
// console.log(arrOne[1]);
// console.log(arrOne[5]);

// довжина масиву
let arrOne2 = ['Федя','Коля','Андрюха'];
console.log(arrOne2[0]);
console.log(arrOne2.length);

let arrCopy = arrOne2;

console.log(arrCopy.length);
arrCopy.length = 2;
console.log(`Довжина масиву arrCopy.length = ${arrCopy.length}`);

//Зміна данних
let newArr = ['Федя','Коля','Андрюха'];

newArr[0] = 'Поликарп';
console.log(newArr)
//додати нове значення
newArr[3] = 'Іван';
console.log(newArr)
console.log(newArr.length)

//Додавання в кінець масиву
let arr1 = ['Федя','Коля','Андрюха'];
arr1.push('Вася');
console.log(arr1)
arr1.push('Полікарп', 'Зоряна');
console.log(arr1)

//видалення з масиву - SHIFT
let arrDel = ['Федя','Коля','Андрюха'];
arrDel.shift();
console.log(arrDel);
arrDel.pop();
console.log(arrDel);
arrDel.unshift('Полікарп');
console.log(arrDel)

//SPLICE - додавання, видалення і заміна елементів
let arrThree = ['Федя','Коля','Андрюха','Полікарп','Степан Срака'];
arrThree.splice(1, 1)
console.log(arrThree)

let arrFour = ['Федя','Коля','Андрюха','Полікарп','Степан Срака'];
let arrFourNew = arrFour.slice(2, 4)
console.log(arrFourNew)

// ФУНКЦІЯ СОРУТВАННЯ МАСИВУ
// function compare (a, b) {
//     console.log(`Порівнюємо ${a} и ${b}`);
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
//
// let arrNumeric = [1, 55, 6, 2, 19]
// console.log(arrNumeric.sort(compare))
//
// let arrHome = ['Ваня','Иштван'];
// arrHome.push('Оля');
// console.log(arrHome);
// arrHome.splice(1, 1, 'Петя');
// console.log(arrHome);
// let removeArrHome = arrHome.splice(0, 1)
// console.log(arrHome);
// arrHome.unshift('Маша', 'Паша');
// console.log(arrHome);

let arrNew = ['Федя','Коля','Андрюха'];

// let resultArrNew = arrNew.map(function (item, index, array){
//     return item[0];
// })
let resultArrNew = arrNew.map(index => index)
console.log(resultArrNew)






































