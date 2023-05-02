function calculateTeamsPoints(koalas, dolphins) {
    let averagePoints = team => (team[0] + team[1] + team[2]) / 3;
    let koalasAverage = averagePoints(koalas);
    let doplhinsAverage = averagePoints(dolphins);
    let winner = checkWinner(koalasAverage, doplhinsAverage);
    console.log(winner);



    function checkWinner(averagePoints1, averagePoints2) {
        let team1 = 'koalas';
        let team2 = 'dolphins';
        let winner = '';
        if (averagePoints1 > averagePoints2) {
            winner = team1;
        } else if (averagePoints1 < averagePoints2) {
            winner = team2;
        } else {
            winner = 'No winner, its a draw!';
        }
        return winner;
    }
}

calculateTeamsPoints([30, 50, 60], [40, 70, 90]);