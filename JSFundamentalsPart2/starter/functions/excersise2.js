function percentageOfCountryFromWorldPopulation(countryPopulation) {
    let worldPopulation = 79000000;

    for (let country of countryPopulation) {
        let [currentCountry, population] = country.split(':');
        let currentCountryPercentage = calculatePercentageOfCountryPopulation(Number(population));
        console.log(`${currentCountry} has ${currentCountryPercentage.toFixed(3)} percentage from the total world population`);
    }
    function calculatePercentageOfCountryPopulation(population) {
        let percentage = population / worldPopulation * 100;
        return percentage;
    }
}

percentageOfCountryFromWorldPopulation(['Bulgaria:6000000', 'Portugal:10000000', 'UK:20000000'])