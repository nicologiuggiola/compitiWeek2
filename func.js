function divideByTwo(myNumber) {
    let result = myNumber / 2;
    return result;
}

console.log(divideByTwo(8));

let capitalize = function (myString) {
    return myString.toUpperCase();
}

console.log(capitalize("ciao a tutti"));

let multiplyByTwo = (myNumber) => myNumber * 2;

console.log(multiplyByTwo(8));

let double = multiplyByTwo;

console.log(double(8));

let pippo = 8;

function scriviPippo() {
    let pippo = "pippo";
    console.log(pippo);
}

scriviPippo();

function multiplyBy4(firstNumber) {
    function multiplyBy2(secondNumber) {
        return secondNumber * 2;
    }

    let result = multiplyBy2(firstNumber) * 2;
    return result;
}

console.log(multiplyBy4(5));

function fibonacci(number) {
    if (number === 0) {
        return 0;
    }

    if (number === 1) {
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(10));

function somma(primoNumero, secondoNumero) {
    return primoNumero + secondoNumero;
}

let risultato = somma();

function minus(primoNumero, secondoNumero) {
    if (secondoNumero === undefined) {
        return -primoNumero;
    }
    else {
        return primoNumero - secondoNumero;
    }
}

console.log(minus(20));


function multiplyBy(primoNumero, secondoNumero = 2) {
    return primoNumero * secondoNumero;
}

console.log(multiplyBy(5, 7));
console.log(multiplyBy(5));


let variable = 4;
let myFunction;

if (variable >= 0) {
    let multiplier = 2;

    myFunction = function (number) {
        return number * multiplier;
    }
}
else {
    let multiplier = 3;

    myFunction = function (number) {
        return number * multiplier;
    }
}

let result = myFunction(4);
console.log(result);

function multiplyByNumber(moltiplicatore) {
    return (number) => number * moltiplicatore;
}

let moltiplicaPer2 = multiplyByNumber(2);

console.log(moltiplicaPer2(5));

function applicaFunzioneSuNumero(mioNumero, funzioneDaApplicare) {
    return funzioneDaApplicare(mioNumero)
}

function dividiPerDue(numero) {
    return numero / 2
}

function dividiPerTre(numero) {
    return numero / 3;
}

let res1 = applicaFunzioneSuNumero(8, dividiPerDue);

console.log(res1);

// function min(numero1, numero2){
//     if (numero1 < numero2) {
//         return numero1;
//     } else{
//         return numero2;
//     }
// }

function min(numero1, numero2) {
    return (numero1 < numero2) ? numero1 : numero2;
}

console.log(min(1, 2));
console.log(min(5, 3));

let numeroFib = 100;
let array = [];

for (let i = 0; i < numeroFib; i++) {

    if (i === 0) {
        array.push(0)
    }

    if (i === 0) {
        array.push(1)
    }

    if (i > 1) {
        array[i] = array[i - 1] + array[i - 2];
    }
}

console.log(array[array.length - 1]);

function trovaFib(numeroFib2, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numeroFib2) {
            return i + 1;
        }
    }
}

console.log(trovaFib(144, array));


function fib1() {
    let array = [];
    for (let i = 0; i < 100; i++) {

        if (i === 0) {
            array.push(0)
        }

        if (i === 0) {
            array.push(1)
        }

        if (i > 1) {
            array[i] = array[i - 1] + array[i - 2];
        }
        console.log(array[i]);
    }
}

fib1();

function fib2(numeroFib, array) {
    for (let i = 0; i < numeroFib; i++) {

        if (i === 0) {
            array.push(0)
        }

        if (i === 0) {
            array.push(1)
        }

        if (i > 1) {
            array[i] = array[i - 1] + array[i - 2];
            return array[i];
        }

        if (numeroFib === 0) {
            return 0;
        }

        if (numeroFib === 1){
            return 1;
        }

    }
}
let array2 = []
console.log(fib2(100, array2));