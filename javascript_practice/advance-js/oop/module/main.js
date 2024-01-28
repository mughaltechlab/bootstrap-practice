import {name, user, salaryBonus as bonus} from './library.js';
import * as mgN from './name-list-module.js';

console.log(mgN);  //expected outuput Module{....}
console.log(mgN.manager1 + " is absent");
console.log(name);

// function from library.js
user('Saqib');
// function that will return something
let bonusOfTwoPeople = bonus(1000,1000);
console.log(bonusOfTwoPeople);