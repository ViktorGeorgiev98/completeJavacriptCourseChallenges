let worldPopulation = 7000000000;
let chinaPopulation = 1000000000;
let chinaPercentagePopulation = chinaPopulation => (chinaPopulation / worldPopulation * 100).toFixed(2);
console.log(chinaPercentagePopulation(chinaPopulation, worldPopulation))