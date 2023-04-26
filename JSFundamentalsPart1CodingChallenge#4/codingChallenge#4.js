function tip(bill) {
    let totalValuePaid = 0;
    let tipForTheCurrentBill = bill >= 50 && bill <= 300 ? 0.15 : 0.20;
    console.log(`The tip that you need to give is ${tipForTheCurrentBill * 100} percents from the current bill`);
    let totalTip = tipForTheCurrentBill * bill;
    totalValuePaid = totalTip + bill;
    console.log(`The bill was ${bill}, the tip was ${totalTip} and the total value paid was ${totalValuePaid}`);
    
}

tip(275);
tip(40);
tip(430);