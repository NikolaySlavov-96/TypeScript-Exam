"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
        this.getCount = 0;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
            this.getCount = this.drinks.length;
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const biggestDrink = [...this.drinks].sort((a, b) => b.volume - a.volume)[0];
        const result = biggestDrink.toString();
        return result;
    }
    getCheapest() {
        const smallPrice = [...this.drinks].sort((a, b) => a.price - b.price)[0];
        const result = smallPrice.toString();
        return result;
    }
    buyDrink(name) {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            const result = this.drinks[index];
            return result.toString();
        }
        return '';
    }
    report() {
        // const sortedClothes = [...this.clothes].sort((a, b) => a.size - b.size);
        const drinksForReport = this.drinks.map((c) => c.toString()).join("\n");
        const store = [];
        // console.log(drinksForReport)
        return drinksForReport;
    }
}
exports.VendingMachine = VendingMachine;
