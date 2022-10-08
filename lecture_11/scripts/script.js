//selectors
//оголошуємо змінні з HTML
const firstNameHTML = document.querySelector('[data-first-name]');
const lastNameHTML = document.querySelector('[data-last-name]');
const emailHTML = document.querySelector('[data-email]');
const buttonHTML = document.querySelector('[data-submit]');
const buttonRevove = document.querySelector('[data-remove]');
const car = document.querySelector('[data-car]');

//vars

//перевірка чи була НАТИСНУТА кнопка. По замовчуванню false
let isFormSubmitted = false;

//оголошуємо змінні в JS
let firstName = '';
let lastName = '';
let email = '';


//підключаємо прослуховувачі подій
firstNameHTML.addEventListener('input', setFirstName);
lastNameHTML.addEventListener('input', setLastName);
emailHTML.addEventListener('input', setEmail);
buttonHTML.addEventListener('click', submit);// прослуховувач натискання кнопки
buttonRevove.addEventListener('click', removeListeners);

//додавання кнопки клавіатури
document.body.addEventListener('keydown', function (e)  { //keyup - коли відпускаємо, keydown - коли натискаємо
    console.log(e)
    if (e.code==='Escape') {
        console.log(e)
        alert('Ти куда вже тікаєш?')
    }

    if (e.code === 'KeyD') {
        const styles = getComputedStyle(car);
        car.style.left = `${parseInt(styles.left) + 5}px`
    }
    if (e.code === 'KeyA') {
        const styles = getComputedStyle(car);
        car.style.left = `${parseInt(styles.left) - 5}px`
    }
});

//вішаємо на кнопку дію, яка спрацьовує при натисканні
function submit() {
    isFormSubmitted = true;
    console.log({firstName, lastName, email});
    if (!firstName) {      //якщо не було заповнено -
        firstNameHTML.classList.add('invalid');//додаємо клас до HTML
    }
}

//функції, які прикручуємо в прослуховувачі
function setFirstName(e) {
    console.log(e.target.value);
    firstName = e.target.value;
    if (isFormSubmitted && !e.target.value){ //ящо кнопка натуснута (true), але поле не заповнено
        firstNameHTML.classList.add('invalid');
    } else {              //а якщо потім заповнили -
        firstNameHTML.classList.remove('invalid');//то видаляємо клас "invalid", що не було обведено червоним
    }

}
function setLastName(e) {
    console.log(e.target.value);
    lastName = e.target.value;
}
function setEmail(e) {
    console.log(e.target.value);
    email = e.target.value;
}
function removeListeners() {
    firstNameHTML.removeEventListener('input', setFirstName)
    lastNameHTML.removeEventListener('input', setLastName)
    emailHTML.removeEventListener('input', setEmail)
}