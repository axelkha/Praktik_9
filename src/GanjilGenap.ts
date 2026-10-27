import * as readline from "readline-sync";

let jumlah: number = Number(readline.question("Masukkan jumlah bilangan : "));

let genap: number = 0;
let ganjil: number = 0;
let i: number = 1;

while (i <= jumlah) {
    let bilangan: number = Number(readline.question(`Masukkan bilangan ke-${i}\t: `));

    if (bilangan % 2 === 0) {
        genap++;
    } else {
        ganjil++;
    }
    i++;
}

console.log(`Jumlah bilangan genap\t: ${genap}`);
console.log(`Jumlah bilangan ganjil\t: ${ganjil}`);