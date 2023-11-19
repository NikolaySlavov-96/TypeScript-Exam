function cityTaxes(name, population, treasure) {
    // const taxRate = 10;
    const result = {
        name,
        population,
        treasure,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession,
    };
    return result;
    function collectTaxes() {
        result.treasure += (population * result.taxRate);
    }
    function applyGrowth(percentage) {
        result.population = population + Math.floor(population * percentage / 100);
    }
    function applyRecession(percentage) {
        result.population = population - Math.floor(population * percentage / 100);
    }
}
const city = cityTaxes('Tortyga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasure, 'treasure');
city.applyGrowth(5);
console.log(city.population, 'population');
city.applyRecession(10);
console.log(city.population, 'population');
