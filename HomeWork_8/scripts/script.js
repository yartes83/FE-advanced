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

for (let p in book1) {
    console.log(p+": "+book1[p]);
}