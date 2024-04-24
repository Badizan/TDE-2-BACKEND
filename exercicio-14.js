function somaDivisivelPor5(num1, num2) {
    return (num1 + num2) % 5 === 0;
}

console.log("\nFunção somaDivisivelPor5:");
console.log("A soma de 3 e 7 é divisível por 5? ", somaDivisivelPor5(3, 7)); // true
console.log("A soma de 8 e 12 é divisível por 5? ", somaDivisivelPor5(8, 12));