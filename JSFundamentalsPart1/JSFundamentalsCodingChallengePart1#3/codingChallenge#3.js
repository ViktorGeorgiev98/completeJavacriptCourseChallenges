function competition(Dolphins, Koalas) {
    let dolphinsAveragePoints = 0;
    let koalasAveragePoints = 0;
    for (let round of Dolphins) {
        dolphinsAveragePoints += Number(round);
    }
    dolphinsAveragePoints /= Dolphins.length;

    for (let round of Koalas) {
        koalasAveragePoints += Number(round);
    }
    koalasAveragePoints /= Koalas.length;

    if (dolphinsAveragePoints > koalasAveragePoints) {
        if (dolphinsAveragePoints >= 100) {
            console.log('Dolphis are the winners!');
        } else {
            console.log('No winner this time, doplhins have more points but are less than 100')
        }
    } else if (koalasAveragePoints > dolphinsAveragePoints) {
        if (koalasAveragePoints >= 100) {
            console.log('Koalas are the winners!');
        } else {
            console.log('No winner this time, koalas have more points but are less than 100')
        }
    } else {
        if (dolphinsAveragePoints >= 100 && koalasAveragePoints >= 100) {
            console.log('We have a draw!');
        } else {
            console.log('No winner this time, points are equal but below 100')
        }
    }
}

competition([96, 108, 89], [88, 91, 110]);

console.log('===============');

competition([97, 112, 101], [109, 95, 123]);