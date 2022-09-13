// // https://www.youtube.com/watch?v=GULFKAX0nxY  Фрілансер
//
// let arr = [] //створення массиву
//
// let arrOne1 = [
//     'Ваня',
//     'Иштван',
//     'Оля', //висяча кома
// ];
//
// //різні типи масивів
// let arrTwo = [
//     "Коля",
//     {
//         type: "JS",
//         age: 36
//     },
//     true,
//     function () {
//         console.log('Привіт, я Коля');
//     }
// ];
// console.log(arrTwo);
// console.log(arrTwo[0])
// console.log(arrTwo[1].age)
// console.log(arrTwo[3])
// arrTwo[3]()
//
// //багатовимірні массиви
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[2][2])
//
// //запит на отримання даних
// let arrOne = [
//     'Ваня', //0 позиція
//     'Иштван', // 1 позиція
//     'Оля', // 2 позиція
// ];
// // console.log(arrOne[1]);
// // console.log(arrOne[5]);
//
// // довжина масиву
// let arrOne2 = ['Федя','Коля','Андрюха'];
// console.log(arrOne2[0]);
// console.log(arrOne2.length);
//
// let arrCopy = arrOne2;
//
// console.log(arrCopy.length);
// arrCopy.length = 2;
// console.log(`Довжина масиву arrCopy.length = ${arrCopy.length}`);
//
// //Зміна данних
// let newArr = ['Федя','Коля','Андрюха'];
//
// newArr[0] = 'Поликарп';
// console.log(newArr)
// //додати нове значення
// newArr[3] = 'Іван';
// console.log(newArr)
// console.log(newArr.length)
//
// //Додавання в кінець масиву
// let arr1 = ['Федя','Коля','Андрюха'];
// arr1.push('Вася');
// console.log(arr1)
// arr1.push('Полікарп', 'Зоряна');
// console.log(arr1)
//
// //видалення з масиву - SHIFT
// let arrDel = ['Федя','Коля','Андрюха'];
// arrDel.shift();
// console.log(arrDel);
// arrDel.pop();
// console.log(arrDel);
// arrDel.unshift('Полікарп');
// console.log(arrDel)
//
// //SPLICE - додавання, видалення і заміна елементів
// let arrThree = ['Федя','Коля','Андрюха','Полікарп','Степан Срака'];
// arrThree.splice(1, 1)
// console.log(arrThree)
//
// let arrFour = ['Федя','Коля','Андрюха','Полікарп','Степан Срака'];
// let arrFourNew = arrFour.slice(2, 4)
// console.log(arrFourNew)
//
// // ФУНКЦІЯ СОРУТВАННЯ МАСИВУ
// // function compare (a, b) {
// //     console.log(`Порівнюємо ${a} и ${b}`);
// //     if (a > b) return 1;
// //     if (a == b) return 0;
// //     if (a < b) return -1;
// // }
// //
// // let arrNumeric = [1, 55, 6, 2, 19]
// // console.log(arrNumeric.sort(compare))
// //
// // let arrHome = ['Ваня','Иштван'];
// // arrHome.push('Оля');
// // console.log(arrHome);
// // arrHome.splice(1, 1, 'Петя');
// // console.log(arrHome);
// // let removeArrHome = arrHome.splice(0, 1)
// // console.log(arrHome);
// // arrHome.unshift('Маша', 'Паша');
// // console.log(arrHome);
//
// let arrNew = ['Федя','Коля','Андрюха'];
//
// // let resultArrNew = arrNew.map(function (item, index, array){
// //     return item[0];
// // })
// let resultArrNew = arrNew.map(index => index)
// console.log(resultArrNew)

//https://www.youtube.com/watch?v=nEabP9CYCAQ&t=2s
// Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex). Js Массивы.
const people = [
    {name: 'Yarik', age: 39, budget: 40000,},
    {name: 'Tanya', age: 30, budget: 35000,},
    {name:'Zoryana', age: 4, budget: 1000,}
]

// --- for (let i = 0; i < people.length; i++){
//     console.log(people[i])
// }
// --- FOR OF - то же, что и обычный фор сверху
// for (let person of people) {
//     console.log(person)
// }
// --- ForEach вызывает функцию с параметрами: объект, индекс объекта и массив
// people.forEach(function (people, index, pArr){
//     console.log(people);
// })
// более лаконичная запись
// people.forEach(person => console.log(person))

// --- MAP создаёт новый массив
// const newPeople = people.map(person => {
//     return person;
// })
// const newPeople = people.map(person => `${person.name} (${person.age})`); //другой вариант
// //const newPeople = people.map(person => [person.name, person.age]) // создаёт новый массив с тремя массивами
//
// console.log(newPeople)


// --- FILTER
//как отобразить тех, у кого возраст больше 18?
//Вариант 1
// const adults = [];
// for (let i = 0; i < people.length; i++){
//     if (people[i].age >= 18) {
//         adults.push(people[i]);
//     }
// }

//Вариант 2
// const adults = people.filter(person => {
//     if (person.age >=18 ) {
//         return true;
//     }
// });
// ещё проще const adults = people.filter(person => person.age >= 18);

//--- REDUCE
//простой вариант сложения бюджета
// let names = 0;
// for (let i = 0; i < people.length; i++){
//     names += people[i].budget
// }
// console.log(names)

const amount = people.reduce((total, user) => total + user.budget, 0)
console.log(amount)

//--- FIND
const nameOfPeople = people.find(person => person.name === 'Yarik');
console.log(nameOfPeople)


// --- FindIndex
const indexOfPeople = people.findIndex(person => person.name === 'Yarik');
console.log(indexOfPeople)

const newPeople = people
    .filter(person => person.budget > 3000)
    .map (person => {
        return {
            name: `${person.name}`,
            age: `(${person.age})`,
            budget: person.budget
}
    })
console.log(newPeople)


people.forEach((name, i) => {
    console.log(name, i);
    }
)

//Стандартний перебор масива на найбільше число
let arrMax = [2, 5, 14, 66, 77, 8];

let max = arrMax[0];

for (let i = 0; i < arrMax.length; i++){
    if(arrMax[i] > max){
        max = arrMax[i];
    }
}

console.log(max)



//Як прибрати або замінити букву
function deleteLetters(letter, word) {
    return word.split(letter).join("!");
}

// Як вирахувати суму числе в масиві
let arrNew = [1, 2, 3, 4]

let sum = arrNew.reduce((prev, item) => {
    return prev + item
}, 0)
console.log(`Результат: ${sum}`)

//Як вивести найбільше число:
let arrMax = [2, 5, 14, 66, 77, 8];

// - Звичаний цикл:
let max = arrMax[0];
for (let i = 0; i < arrMax.length; i++){
    if(arrMax[i] > max){
        max = arrMax[i];
    }
}
console.log(max)

// - reduce
let arrMaxMax = arrMax.reduce((prev, item) => {
    if (prev < item) {
        return item;
    } else {
        return prev;
    }

})
console.log(arrMaxMax)

//Як об'єднати масиви в одномірний
let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = data.reduce( (previousValue, item) => {
    return previousValue.concat(item);
},[])
console.log(flat)































