function tipCalculator(bills) {
    let tips = [];
    let totals = [];

    for (let bill of bills) {
        let tip = calcTip(bill);
        let currentTotal = tip + bill;
        tips.push(tip);
        totals.push(currentTotal);
        console.log(`Current bill is: ${currentTotal}, the tip for this bill was ${tip}`);
    }

    console.log(`Tips: ${tips.join(', ')}`);
    console.log(`Bills: ${totals.join(', ')}`);

    let averageBillForTheNight = calcAverageTotalBill(totals);
    console.log(`The average bill for the night was ${averageBillForTheNight.toFixed(2)}`);



    function calcTip(bill) {
        let tip = 0;
        if (bill >= 50 && bill <= 200) {
            tip = bill * 0.15;
        } else {
            tip = bill * 0.20;
        }
        return tip;
    }

    function calcAverageTotalBill(bills) {
        let totalMoney = 0;
        let numberOfBills = bills.length;
        for (let bill of bills) {
            totalMoney += bill;
        }
        let average = totalMoney / numberOfBills;
        return average;
    }
}

tipCalculator([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);