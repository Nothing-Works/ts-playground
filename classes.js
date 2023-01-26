'use strict'


// this is the old way

// Initialize an Item class
function Item(name, category) {
    this.name = name
    this.category = category
}

// Create a method called getDetails() for an Item
Item.prototype.getItemDetails = function() {
    return `${this.name} - ${this.category}`
}

// Initialize a PurchasedItem class, inherits the Item class
function PurchasedItem(name, category, price) {
    Item.call(this, name, category)
    this.price = price
}

// Sets the inherited methods and properties of the base class
PurchasedItem.prototype = Object.create(Item.prototype) // to copy all the methods and that's going to reset the constructor
PurchasedItem.prototype.constructor = PurchasedItem // so here we need to reset the constructor

// Creates a new method just for the extended PurchaseItem class
PurchasedItem.prototype.getItemDetailsWithPrice = function() {
    return `${this.name} - ${this.category} - ${this.price}`
}

const item = new Item('andy', 'test')
item.category = 'changed'

const purchased = new PurchasedItem('milk', 'buy', '2.49')
console.log(item.getItemDetails())
console.log(purchased.getItemDetailsWithPrice())


// new way.
class Item1 {
    constructor(name, category) {
        this.name = name
        this.category = category
    }

    static maxItems = 10

    static getHelperText(){
        return 'Add some item'
    }

    getItemDetails() {
        return `${this.name} - ${this.category}`
    }
}

class PurchasedItem1 extends Item1 {
    constructor(name, category, price) {
        super(name, category)
        this.price = price
    }

    getItemDetailsWithPrice() {
        return `${this.name} - ${this.category} - ${this.price}`
    }

    static getNumberOfItems(){
        return `3/${super.maxItems}`
    }
}

const item1 = new Item1('andy', 'drink')
console.log(Item1.maxItems);
console.log(PurchasedItem1.getNumberOfItems());