class Book {
    constructor(tittle, author, price) {
        this.tittle = tittle;
        this.author = author;
        this.price = price;
    }
    getTittle() {return this.tittle;}
    setPrice(pr) {this.price = pr;}
}

let book1 = new Book("Муму","Тургенев", 112);
console.log(book1)

//аргументи класу
for (let p in book1) {
    console.log(p+": "+book1[p]);
}

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

for (let p in ukraine) {
    console.log(p+": "+ukraine[p])
}