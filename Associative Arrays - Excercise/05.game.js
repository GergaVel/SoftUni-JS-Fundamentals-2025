function cardGame(arr){
    let players = {};

    for (let line of arr){
        let [playerName, cardsString] = line.split(': ');
        let cards = cardsString.split(', ');
        
        if (!players[playerName]){
            players[playerName] = [];
        }

        for (let card of cards) {
            if (!players[playerName].includes(card)) {
                players[playerName].push(card);
            }
        }
    }
    let powerValues = {
        "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10,
        "J":11, "Q":12, "K":13, "A":14
    };

    let typeValues = {
        "C":1, "D":2, "H":3, "S":4
    };

    for (let player in players) {
        let total = 0;

        for (let card of players[player]) {
            let type = card.slice(-1);
            let power = card.slice(0, -1);

            total += powerValues[power] * typeValues[type];
        }

        console.log(`${player}: ${total}`);
    }
}   

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);