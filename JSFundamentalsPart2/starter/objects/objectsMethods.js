let country = {
    name: 'Bulgaria',
    continent: 'Europe',
    population: '7 million',
    isIsland: false,
    neighbor: 'Romania',

    description() {
        console.log(`${this.name} is a country in ${this.continent} with a population of ${this.population}`);
    },

    checkIfIsland() {
        if (this.isIsland === true) {
            console.log(`${this.name} is an island`);
        } else {
            console.log(`${this.name} is not an island`);
        }
    },

    checkForNeighbor() {
        if (country.hasOwnProperty(this.neighbor)) {
            console.log(`${this.name} has a neighbor: ${this.neighbor}`);
        } else {
            console.log(`no neighbors...`);
        }
    }
}

country.description();
country.checkIfIsland();
country.checkForNeighbor();