function testBodyMass(markBodyWeight, markHeight, johnBodyWeight, johnHeight) {
    let markBodyMass = calculateBodyMass(markBodyWeight, markHeight);
    let johnBodyMass = calculateBodyMass(johnBodyWeight, johnHeight);
    let markHigherBMI = markBodyMass > johnBodyMass;

    console.log(markBodyMass);
    console.log(johnBodyMass);
    console.log(markHigherBMI);
    function calculateBodyMass(bodyWeight, height) {
        let bodyMass = (bodyWeight / Math.pow(height, 2)).toFixed(3);
        return bodyMass;
    }
}

testBodyMass(68, 1.69, 92, 1.95);

console.log('-------------');

testBodyMass(95, 1.88, 85, 1.76);