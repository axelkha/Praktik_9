import * as readline from "readline-sync"; ;

let batas: number = Number(readline.question("Masukkan batas nilai maksimum : "));

let total: number = 0;
let deret: string = "";

for (let i = 1; i <= batas; i++) {
    if (i % 2 === 1) {
        total += i;
        deret += `+${i}`;
    } else {
        total -= i;
        deret += `-${i}`;
    }
}

console.log(`${deret}=${total}`);