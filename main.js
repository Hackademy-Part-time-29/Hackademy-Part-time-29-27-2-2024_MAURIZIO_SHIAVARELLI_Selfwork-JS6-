// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
// Variante:
// Prova ad ordinali in modo crescente.


let arrayCrescente = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

arrayCrescente.sort((a,b)=> a-b)

console.log(arrayCrescente);

let arrayDecrescente = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

arrayDecrescente.sort((a,b) => b-a);

console.log(arrayDecrescente);