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

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function getSumAfterDuty(sum, duty) {
    let x = sum;
    let y = duty; //податок

    return result = x - (x / 100 * y);
}

function getSumAfterKnownDuty(sum) {
    let x = sum;
    let y = 19.5; //податок

    return result = x - (x / 100 * y);
}

//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M:
function getRandomNumber(N, M) {
    min = Math.ceil(N);
    max = Math.floor(M);
    return Math.floor(Math.random() * (M - N + 1)) + N;
}

// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові:
function countLetter (str, N) {
    let count = 0;
    let pos = str.indexOf(N)

    while (pos !== -1) {
        count++;
        pos = str.indexOf(N, pos + 1);
    }
    return count
}
//console.log(countLetter('Yaroslav', 'a')) - якщо так ввести - працює, якщо без лапок - ні. Соромно зізнатися, але як перевести в стрінгу? str = String(str) - не працює.
//Закінчу домашку - буду гуглити
function countLetter () {
    let str = prompt(String('Введіть слово'));
    let N = prompt(String('Введіть букву'));

    let count = 0;
    let pos = str.indexOf(N);

    while (pos !== -1) {
        count++;
        pos = str.indexOf(N, pos + 1);
    }
    alert (count)
}

//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку:
function convertation () {
    const dollar = 30;
    let currency = prompt('Введіть суму');
    let typeCurrency = prompt('Введіть тип валюти (UAH або $)');
    typeCurrency = typeCurrency.toLowerCase()

    if (typeCurrency !== 'uah' || '$') {
        alert('Тільки гривні або долари');
    }

    do {
        if (typeCurrency == 'uah') {
            result1 = (currency / dollar).toFixed(2);
        } if (typeCurrency == '$'){
            result2 = (currency * dollar).toFixed(2);
        } else {
            break;
        }
    }while (false);

    if (typeCurrency == 'uah') {
        alert(result1 + ' $');
    } else {
        alert(result2 + ' грн');
    }
}

function convert (currency) {
    currency = currency.toLowerCase();
    const dollar = 30;
    let sumCurrency = Number(currency.match(/\d+/g)); //беремо тільки цифру
    let typeOfCurrency = currency.indexOf('uah'); //беремо тільки тип валюти

    if (typeCurrency !== 'uah' || '$') {
        console.log('Тільки гривні або долари');
    }

    do {
        if (typeOfCurrency == -1) {
            result = ((sumCurrency * dollar).toFixed(2) + 'грн');
        } if (typeOfCurrency !== -1) {
            result = ((sumCurrency / dollar).toFixed(2) + 'usd');
        } else {
            break;
        }
    }while(false);

    return result;
}


//а це рішення від профі, мого друга. Круто і лаконічно :)
function convertProfi(currency) {
    const dollar = 30;
    let sumCurrency = Number(currency.match(/\d+/g)); //беремо тільки цифру
    let typeOfCurrency = String(currency.toLowerCase().match(/(uah|\$)/g)); //беремо тільки тип валюти

    switch (typeOfCurrency) {
        case '$': return `${(sumCurrency * dollar).toFixed(2)} грн`;
        case 'uah': return `${(sumCurrency / dollar).toFixed(2)} usd`;
        default: throw 'Only UAH and USD($) are supported';
    }
}





//Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам:

// function getRandomPassword (N) {
//
//     return Math.floor(Math.random() * max);
// }




































