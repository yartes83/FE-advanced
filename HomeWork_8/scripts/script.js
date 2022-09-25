// https://www.youtube.com/watch?v=qKEC18S8vVg&ab_channel=selfedu
class Book {
    constructor(tittle, author, price) {
        this.tittle = tittle;
        this.author = author;
        this.price = price;
    }
    getTittle() {return this.tittle;}
    setPrice(pr) {this.price = pr;}

     get titleBook() {return this.tittle};
     set titleBook(value) {this.tittle = value};
}

let book1 = new Book("Муму","Тургенев", 112);
console.log(book1)



//оголошення класу через функцію

function createFruit(name, weight) {
    return class {
        constructor() {
            this.name = name;
            this.weight = weight;
        };
        showInfo() {
            console.log(this.name + " " + this.weight)};
    }
}

let f = createFruit("Яблуко", 100);
let apple = new f();
apple.showInfo();

//геттери - для отримання аргументів об'єктів  -  get titleBook() {return this.tittle};
//сеттери - для зміни аргументів об'єкта  -       set titleBook(value) {this.tittle = value};

console.log(book1.titleBook); // геттер
book1.titleBook = "Абабагаламага" // сеттер
console.log(book1.titleBook)

//https://www.youtube.com/watch?v=13e7nw4Pm9c&list=PLA0M1Bcd0w8xXjtQlT1vf8xgJKtSh8j4w&index=1&ab_channel=selfedu

console.log("=======================================================")

// const pavlo = {
//     name: "Pavlo",
//     finished: 6,
//     inprogress: function (homework){
//         this.finished += 1;
//         return `${this.name} зробив з легкістю домашнє завдання по ${homework}, виконано: ${this.finished}`
//     }
// }
//
//
// const yurii = {
//     name: "Yurii",
//     finished: 7,
//     inprogress: function (homework){
//         this.finished += 1;
//         return `${this.name} зробив з легкістю домашнє завдання по ${homework}, виконано: ${this.finished}`
//     }
// }


// console.log(`${pavlo.finished} виконано`);
// console.log(pavlo.inprogress('Функції'))
// console.log(`${pavlo.finished} виконано`);
//
// console.log(`${yurii.finished} виконано`);
// console.log(yurii.inprogress('ООП'))
// console.log(`${yurii.finished} виконано`);


// const Student = function (name, finished, inprogress) {
//     this.name = name
//     this.finished = finished
//     this.inprogress = function (homework) {
//         this.finished += 1;
//         return `${this.name} зробив з легкістю домашнє завдання по ${homework}, виконано: ${this.finished}`
//
//     }
// }
//
// const pavlo = new Student("pavlo", 6);

// console.log(pavlo.inprogress(7))


class User {
    constructor(name) {
        this.fullName = name;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName (name) {
        [this.firstName, this.lastName] = name.split(' ')
    }
}

// const users = userInput.split(', ').map((name) => {
//     return new User(name);
//     }
// )
// console.log(users)

// const user5 = new User('Victor Dzezenko');
// console.log('------------------------------------------------------------------------------------------------')
// console.log(user5.fullName)
// console.log('------------------------------------------------------------------------------------------------')
// console.log(users.fullName)





class Users {
    constructor() {
        this.users = [];
    }
    addUser(newUser) {
        if (this._includes(newUser)) return;
        this.users.push(newUser)
    }
    _includes(newUser) {
        if (this.users.some((user) => user.lastName === newUser.lastName)) {
            console.log('already');
            return true;
        } else return false;
    }
}

const users = new Users();

const userInput = 'Yaroslav Golub, Zoryana Golub1, Tatjana Golub2';

userInput.split(', ').forEach((name) => {
    users.addUser(new User(name));
})

// console.log(users)

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        return this.name + ' ' + this.age;
    }
}

const human1 = new Human('Rachel', 25);

console.log(human1)

class SuperHero  extends Human {
    constructor(superPower, name, age) {
        super(name, age);
        this.superPower = superPower;
    }
}
const hero = new SuperHero('JS understanding ability', 'Ivan', 22);
console.log(hero)
console.log(human1.info)





























