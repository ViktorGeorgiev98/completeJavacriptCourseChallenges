function calcTips(bills) {
    let totalBillsPaid = [];
    for (let bill of bills) {
        let currentTip = currentTips(bill);
        console.log(`Current tip is : ${currentTip}`);
        let currentTotalPaid = bill + currentTip;
        totalBillsPaid.push(currentTotalPaid);
        console.log(`Current bill with tip is ${currentTotalPaid}`);
    }
    console.log(`Number of bills paid for the evening : ${totalBillsPaid.length}`);
    console.log(`Bills: ${totalBillsPaid}`);
    function currentTips(bill) {
        let percentage = 0;
        if (bill >= 50 && bill <= 200) {
            percentage = 0.15;
        } else {
            percentage = 0.20;
        }
        let currentTip = bill * percentage;
        return currentTip;
    }
}

calcTips([100, 200, 300]);