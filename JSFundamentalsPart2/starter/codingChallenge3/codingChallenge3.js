function createPerson(name, height, mass) {
    let person = {
        name: name,
        height: height,
        mass: mass,

        calcBMI() {
            let currentPersonBMI = this.mass / this.height * 2;
            return currentPersonBMI.toFixed(2);
        },
    }
    return person;
}

let john = createPerson('John Stones', 1.8, 80);
    let mark = createPerson('Mark Patel', 1.75, 69);

    let johnBMI = john.calcBMI();
    let markBMI = mark.calcBMI();

    if (johnBMI > markBMI) {
        console.log(`John has a higher BMI than Mark => ${johnBMI} to ${markBMI}`);
    } else {
        console.log(`Mark has a higher BMI than John => ${markBMI} to ${johnBMI}`);
    }

