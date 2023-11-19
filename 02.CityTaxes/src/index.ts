interface cityInfo {
    name: string,
    population: number,
    treasure: number,
    taxRate: number,
    collectTaxes: Function,
    applyGrowth: Function,
    applyRecession: Function,
}

function cityTaxes(name: string, population: number, treasure: number) {

    const result: cityInfo = {
        name,
        population,
        treasure,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession,
    }

    return result;

    function collectTaxes(): void {
        result.treasure += (population * result.taxRate);
    }

    function applyGrowth(percentage: number): void {
        result.population = population + Math.floor(population * percentage / 100);
    }

    function applyRecession(percentage: number): void {
        result.population = population - Math.floor(population * percentage / 100);
    }
}

const city = cityTaxes('Tortyga', 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasure, 'treasure')
city.applyGrowth(5)
console.log(city.population, 'population');
city.applyRecession(10)
console.log(city.population, 'population');