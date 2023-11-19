import { Drink } from "./Drink";

export class VendingMachine {
    buttonCapacity: number;
    drinks: Drink[];
    getCount: number;

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
        this.getCount = 0;
    }

    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
            this.getCount = this.drinks.length;
        }
    }

    removeDrink(name: string): boolean {
        const index = this.drinks.findIndex((d) => d.name === name);

        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }

        return false;
    }

    getLongest(): string {
        const biggestDrink = [...this.drinks].sort((a, b) => b.volume - a.volume)[0];
        const result = biggestDrink.toString();
        return result;
    }

    getCheapest(): string {
        const smallPrice = [...this.drinks].sort((a, b) => a.price - b.price)[0];
        const result = smallPrice.toString();
        return result;
    }

    buyDrink(name: string): string {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            const result = this.drinks[index]
            
            return result.toString();
        }
        return '';
    }

    report(): string {
        const drinksForReport = this.drinks.map((c) => c.toString()).join("\n");
        return drinksForReport;
      }
}