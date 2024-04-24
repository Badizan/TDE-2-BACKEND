function verificaNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

console.log("\nFunção verificaNumero:");
console.log("Número 10 é:", verificaNumero(10)); 
console.log("Número -5 é:", verificaNumero(-5)); 
console.log("Número 0 é:", verificaNumero(0));