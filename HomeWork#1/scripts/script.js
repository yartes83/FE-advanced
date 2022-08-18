let priceSweetmeats = 15.678;
let priceIceCream = 90.2345;
let pricePie = 123.965;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число:
console.log(Number(Math.max(priceSweetmeats, priceIceCream, pricePie)));

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число:
console.log(Number(Math.min(priceSweetmeats, priceIceCream, pricePie)));

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму:
let priceSum = priceSweetmeats + priceIceCream + pricePie;
console.log(Number(priceSum))

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону:
console.log(Math.floor(priceSweetmeats) + Math.floor(priceIceCream) + Math.floor(pricePie));
console.log(parseInt(priceSweetmeats) + parseInt(priceIceCream) + parseInt(pricePie)); //мабуть так не можна, нагуглив щось таке. Проте результат такий самий. Це через велику терпимість JS до кривого коду?

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300):


console.log(Number(priceSweetmeats.toFixed(2)))
console.log(Number(priceIceCream.toFixed(2)))

console.log(Math.floor(priceSweetmeats * 10) / 10)




