
// Function
// function Book(tittle, author, ISBN, numCopies) {
//     this.tittle = tittle;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }
// Book.prototype.getAvailibity = function(){
//     if(this.numCopies === 0) {
//         return "Out of Stock";
//     } else if (this.numCopies < 10){
//         return "Low Stock";
//     }
//     return "In Stock";
// }

// Book.prototype.sell = function(numCopiesSold = 1){
//     this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5){
//     this.numCopies += numCopiesStocked;
// }



// Class
class Book {
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availibity(){
        return this.getAvailibity();
    }

    getAvailibity(){
        if(this.numCopies === 0) {
                    return "Ooout of Stock";
                } else if (this.numCopies < 10){
                    return "Low Stock";
                }
                return "In Stock";
    }

    sell(numCopiesSold = 1){
        this.numCopies -= numCopiesSold;
    }
    restock(numCopiesStocked = 5){
        this.numCopies += numCopiesStocked;
    }
}


const HungerGames = new Book("Hunger Game", "Suzanne  Collins", 12312, 5);
console.log(HungerGames.getAvailibity());
HungerGames.restock(12);
console.log(HungerGames.getAvailibity());
HungerGames.sell(17);
console.log(HungerGames.getAvailibity());