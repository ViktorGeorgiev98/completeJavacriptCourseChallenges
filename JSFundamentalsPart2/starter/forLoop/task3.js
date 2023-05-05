let listOfNeighbors = ['Canada', 'Mexico', 'Spain', 'Sweden', 'Norway'];
let realNeighbors = [];
let neighbor = 'Sweden';

for (let i = listOfNeighbors.length - 1; i >= 0; i--) {
    for (let j = listOfNeighbors.length - 1; j >= 0; j--) {
        if (listOfNeighbors[i] === neighbor) {
            if (listOfNeighbors[j] === 'Norway') {
                realNeighbors.push('Norway');
            }
        } else {
            console.log('Neighbor cant be the country with the same name!');
        }
    }
    
}

console.log(realNeighbors.shift());