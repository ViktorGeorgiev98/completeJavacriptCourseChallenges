function cutFruit(fruit) {
    return fruit * 4;
}

function processFood(apples, peas) {
    apples = cutFruit(apples);
    peas = cutFruit(peas);
    console.log(`We have ${apples} pieces of apples and ${peas} pieces of peas`);
}

processFood(10, 5);