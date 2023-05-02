let countryPopulations = ['Bulgaria : 7000000', 'Turkey : 70000000', 'Croatia : 700000'];
console.log(countryPopulations.length >= 4);
let worldPopulation = 7000000000;
for (let country of countryPopulations) {
    let [currentCountry, currentPopulation] = country.split(' : ');
    let currentCountryPercentage = calculatePercentage(Number(currentPopulation), worldPopulation);
    console.log(`${currentCountry} has ${currentCountryPercentage} percentage of the world population`);
}



function calculatePercentage(population, worldPopulation) {
    let currentCountryPercentageFromWorldPopulation = (population / worldPopulation * 100).toFixed(2);
    return currentCountryPercentageFromWorldPopulation;
}