class KioskCalc {                                        
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = {"Orange": 30, "Mango": 15, "Avocado": 40 };
        this.getTotalCost = function () {
            return ` ${quantity} ${fruit} for KES ${quantity * this.price}`
        }
    }
}
KioskCalc.prototype.price = 30;

var kiosk = new KioskCalc('Mango', 4);
console.log(kiosk.getTotalCost());