let country = {
    name: 'Bulgaria',
    continent: 'Europe',
    population: 7000000
}

console.log(`${country.name} is a country in ${country.continent} with a population of ${country.population}`);
console.log(`${country['name']} is a country in ${country['continent']} with a population of ${country['population']}`);

country.population *= 2;
console.log(`${country.name} is a country in ${country.continent} with a population of ${country.population}`);
country['population'] /= 3;
console.log(`${country['name']} is a country in ${country['continent']} with a population of ${country['population']}`);

