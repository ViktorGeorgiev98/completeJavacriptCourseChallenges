function countryForSarah(country, language, population, typeOfCountry) {
    if (language === 'english' && population < 50000000 
    && typeOfCountry != 'island') {
        console.log(`You should live in ${country}!`);
    } else {
        console.log(`${country} does not meet your criteria...`);
    }
}

countryForSarah('Bulgaria', 'bulgarian', 6000000, 'mainland');

console.log('=================');

countryForSarah('USA', 'english', 49999999, 'mainland');