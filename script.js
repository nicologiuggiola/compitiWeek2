// console.log("ciao a tutti"[2]);
// console.log(typeof 5);
// console.log(typeof true);
// console.log(5 <= 5);
// console.log(5 == 5);
// console.log(5 === 5);
// console.log(5 !== 5);
// console.log(NaN == NaN);
// console.log(true && true);
// console.log(false && true);
// console.log(true || true);
// console.log(false || false);
// console.log(true ? 1 : 2);
// console.log(false? 1 : 2);
// console.log((5 > 7) ? 1 : 2);
// console.log((5 < 7) ? 1 : 2);
// console.log(null);
// console.log(undefined);

// let numero = 5;
// console.log("prima assegnazione della variabile numero", numero);

// numero = 7;
// console.log("seconda assegnazione della varbaile numero", numero);

// const costante = 12;
// console.log(costante);

// var numero2 = 27;
// console.log("log var", numero2);

// numero2 = 134;
// console.log("secondo var", numero2)

// pippo  = "Ciao a tutti!";
// console.log("log pippo", pippo);

// var pippo = "ciao ad alcuni";
// console.log("secondo log pippo", pippo);

// //let pippo, pluto, paperino;

// let operazione = 5 + 6;
// console.log(operazione);

// if (5 > 8)
// {
//     console.log("sono passato dall'if");
// }

// if ((operazione > 10) || (operazione !== 11)) 
// {
//     console.log("sono passato");
// } 
// else 
// {
//     console.log("non sono passato");
// }

// let numero3 = 0;

// if (numero3 > 0) 
// {
//     console.log('il numero è positivo');
// }
// else if (numero3 === 0)
// {
//     console.log('è 0');
// }
// else
// {
//     console.log('il numero è negativo');
// }

// let i = 0;
// console.log("while");
// while (i < 10) {
//     console.log(i);
//     i = i + 1;
// }

// let j = 0;
// console.log("do");
// do {
//     console.log(j);
//     j = j + 1;
// } while (j < 10);

// console.log("for");
// for (let k = 0; k < 10; k++) 
// {
//     console.log(k);
// }



// let stringa = "#";

// for (let index = 0; index < 7; index++) {
//     console.log(stringa);
//     //stringa = stringa + "#";
//     stringa += "#";
// }

// let conto = 0;
// let stringa2 = "#";

// while (conto < 7) 
// {
//     console.log(stringa2);
//     stringa2 += "#";
//     conto++;
// }

// let conto2 = 0;
// let stringa3 = "";

// do {
//     stringa3 += "#";
//     console.log(stringa3);
//     conto2++;
// } while (conto2 <7);
let w_H = 8;
let stringa4 = "";

for (let i = 0; i < w_H; i++) {
    for (let j = 0; j < w_H; j++) {
        switch ((i+j) % 2) {
            case 0:
                stringa4 += " ";
                break;
        
            default:
                stringa4 += "#";
                break;
        }
    }
    stringa4 += "\n";
}

console.log(stringa4);


let stringa5 = "";

for (let i = 0; i < w_H; i++) {
    for (let j = 0; j < w_H; j++) {
        if ((i+j) % 2 === 0) {
            stringa5 += " ";
        } else {
            stringa5 += "#";
        }
    }
    stringa5 += "\n";
}

console.log(stringa5);

let stringa6 = "";

for (let i = 0; i < w_H; i++) {
    for (let j = 0; j < w_H; j++) {

        let result = ((i +j) % 2 === 0) ? 1 : 2;
        
        switch (result) {
            case 1:
                stringa6 += " ";
                break;
        
            case 2:
                stringa6 += "#";
                break;
        }
    }
    stringa6 += "\n";
}

console.log(stringa6);

let grid = "";

for (let i = 0; i < w_H; i++) {
    for (let j = 0; j < w_H; j++) {
        let result = ((i +j) % 2 === 0) ? ' ': '#';
        grid += result;
    }
    grid += "\n";
}

console.log(grid);

