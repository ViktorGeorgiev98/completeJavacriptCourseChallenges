function countries (percentagePopulationForCountries, expectedPercentage) {
    for (let i = 0; i < percentagePopulationForCountries.length; i++) {
        if (percentagePopulationForCountries[i] === expectedPercentage[i]) {
            console.log('Percentage is not as expected!');
        } else {
            console.log('Percentage is good!');
        }
    }
}

countries([500, 400, 450, 550], [500, 410, 450, 540]);