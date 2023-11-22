          /* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

let es1 = 0;
function crazySum (num1,num2) {
    if ((typeof num1 === "number") && (typeof num2 === "number")) {
        let res = num1 + num2;
        if (num1 === num2) {
            res *= 3;
        }
        return res; 
    } else {
        return "Il parametro inserito non è un numero!"
    }
}

// es1 = crazySum("ciao",2);
// console.log(es1);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) 
 o se è esattamente uguale a 400.
*/

let es2;
function boundary (num1) {
    if (typeof num1 === "number") {
        if ((20 < num1) && (num1 <= 100) || (num1 === 400)) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Il parametro inserito non è un numero!"
    }   
} 

 // es2 = boundary("Ciao");
 // console.log (es2);


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (word) {
    if (typeof word === "string" ) {
        let res = [];
        let pointer = word.length - 1;
        for (let index = 0; index < word.length; index++) {
            res.push(word [pointer]);
            console.log (word[pointer]);
            console.log (res);
            pointer --;
            console.log (pointer);
            
        }
        return res.join("");
    } else {
        return "Il parametro inserito non è una stringa!"
    }
}


//let es3 = reverseString("supercalifragili");
//console.log (es3); 

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

// stringa corrispondente a una sola parola
 /* function upperFirst (word) {
    if (typeof word === "string" ) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
        return "Il parametro inserito non è una stringa!"
    }
} */

// stringa corrispondente a più parole
function upperFirst (word) {
    if (typeof word === "string" ) {
        word = word.toLowerCase ();
        let res = word.split("");
        for (let index = 0; index < word.length; index++) {
            if (word[index-1] === " ") {
                res [index]= res [index].toUpperCase ();
                console.log(res);
            }             
        }
        return res[0].toUpperCase() + res.slice(1).join("");
    } else {
        return "Il parametro inserito non è una stringa!"
    }
}

// let es4 = upperFirst("Ciao mi chiamo eni");
// console.log(es4); 


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n) {
    if (typeof n === "number"){
        let res = [];
        for (let index = 0; index < n; index++) {
            res.push (Math.floor(Math.random () * 10) + 1);  
        }
        return res;  
    } else {
        return "Il parametro inserito non è un numero";
    }
}

// let es5 = giveMeRandom(70);
// console.log (es5);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1,l2) {
    if ((typeof l1 === "number") && (typeof l2 === "number")) {
        return l1 * l2;
    } else {
        return "I parametri inseriti non sono numeri!"
    }
}

// let extra1 = area (3,"ciao");
// console.log(extra1);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (n) {
    if (typeof n === "number") {
        let res = Math.abs (n);
        res = res - 19;
        if (res > 19) {
            res *= 3;
        }
        return res;
    } else {
        return "Il parametro inserito non è un numero!";
    }
}

// let extra2 = crazyDiff(100);
// console.log(extra2);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio 
 con "code" allora deve ritornarla senza modifiche.
*/

function codify (word) {
    if (typeof word === "string") {
        if (word.startsWith("code")) {
            return word
        } else {
            return "code" + word; 
        }
    } else {
        return "Il parametro inserito non è una stringa!";
    }
    
}


//let extra3 = codify ("Codeciao");
//console.log(extra3);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (n) {
    if (typeof n === "number") {
        if ((n % 3 === 0) || (n % 7 === 0)) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Il parametro inserito non è un numero!";
    }
}


// let extra4 = check3and7 ("ciao");
// console.log (extra4);


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (word) {
    if (typeof word === "string") {
        if (word.length > 2) {
            return word.slice(1,word.length - 1);
        } else {
            return "la stringa è troppo corta, il risultato è ' ' ";
        }
    } else {
        return "Il parametro inserito non è una stringa";
    }
}


//let extra5 = cutString (67);
// console.log(extra5);