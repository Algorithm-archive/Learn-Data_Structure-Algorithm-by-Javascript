const Hanoi = require('./tower_of_hanoi')

/****** Testing Tower of Hanoi code *******/
Hanoi(3, 'A', 'B', 'C').forEach((move) => console.log(`moved ${move.disk} from: ${move.from} to: ${move.to}`))
