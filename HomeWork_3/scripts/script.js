// https://www.youtube.com/watch?v=KuAcDbDwxHM - лекція Макса про функції
// https://youtu.be/CxgOKJh4zWE?t=9731 - функції

// https://uk.javascript.info/function-basics


// function showMessage() {
//     alert("Привіт, бро!")
// }
// showMessage()

// function sum (a, b) {
//     return a + b;
// }
//
// let result = sum (50, 60)
// alert (result);

// function checkAge (age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let age = prompt("Скільки Вам років?");
//
// if (checkAge(age)) {
//     alert("Доступ надано");
// } else {
//     alert("Треба трішки підрости :)");
// }
//
//
// function showMovie(age) {
//     if (!checkAge(age)) {
//         return;
//     }
//
//     alert("Показуємо фільм");
// }


// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function maxDigit(n){
    if(n == 0){
        return 0;
    }
    else{
        return Math.max(n%10, maxDigit(Math.floor(n/10)));
    }
}

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}

//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function nameFormat(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

//Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function getSumAfterDuty(sum, duty) {
    let x = sum;
    let y = duty; //податок

    return result = x - (x / 100 * y);
}

console.log(getSumAfterDuty(1000, 19.5))
















