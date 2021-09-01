let upperLimitNumber = +prompt("Input the number", 100); // upper limit
let arrayOfSigns = [];
initializeArray(arrayOfSigns, upperLimitNumber + 1); // initializing the array with true, 
                                                     // where index of array is numbers, 
                                                     // that can be prime or not (true - > prime)
findPrimes(arrayOfSigns);
printPrimes(arrayOfSigns);

function initializeArray(arrayOfSigns, toNumber) {
    for (let i = 0; i < toNumber; i++) {
        arrayOfSigns[i] = true;
    }
}

function findPrimes(arrayOfSigns) {
    // 0 and 1 are not prime
    arrayOfSigns[0] = arrayOfSigns[1] = false;
    for (let i = 2; i < arrayOfSigns.length ** (1 / 2) + 1; i++) {
        // arrayOfSigns[i] == false are prime
        if (arrayOfSigns[i] == true) {
            // all i*j are not prime
            for(let j = 2; j * i < arrayOfSigns.length; j++){
                arrayOfSigns[i * j] = false;
            }
        }
    }
}

function printPrimes(arrayOfSigns) {
    for (let i = 2; i < arrayOfSigns.length; i++) {
        if (arrayOfSigns[i] == true) { // that means number=i is prime
            console.log(i);
        }
    }
}


