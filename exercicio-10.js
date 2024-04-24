function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * fatorial(numero - 1);
}

console.log("\nFunção fatorial:");
console.log("Fatorial de 5:", fatorial(5));
console.log("Fatorial de 0:", fatorial(0));