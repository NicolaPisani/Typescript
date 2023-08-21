/**
 * START: Follow the instructions below.
 */

function getPopulation(): any {
  return 69_950_850;
}

// Add a type assertion after the call to `getPopulation()`.
// Hint: What's the actual type of the value returned by `getPopulation()`?
// In questo caso, il tipo effettivo del valore restituito da `getPopulation()` è un numero (number).

const population = getPopulation() as number;

// Now you've added a type assertion, there's a type error in the code below.
// Remove the code that is incorrect.

// Il codice seguente è errato poiché stai cercando di chiamare il metodo `toUpperCase()` su un numero,
// il che non ha senso in TypeScript. 
// console.log(population.toUpperCase());

// Questa riga è corretta, poiché moltiplicare un numero per 2 è una operazione valida.
console.log(population * 2);

// ----

export {};
