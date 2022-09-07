// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.

function getRandomArray (length, min, max) {
    let arr = [];

    for (let i = 0; i <= length; i++){
        arr.push(Math.round(min - 0.5 + Math.random() * (max - min +1)));
    }
    return arr;
}
console.log(getRandomArray (10, 1, 10))

// 2. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції:

example = (value) => [...Array]
    .map((value) =>)

}
