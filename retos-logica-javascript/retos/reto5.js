const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', (firstInput) => {
    const a = parseInt(firstInput, 10);
    rl.question('Ingrese el segundo número: ', (secondInput) => {
        const b = parseInt(secondInput, 10);
        const max = (a > b) ? a : b;
        const suma = a + b;

        const resultSuma =(suma > 10) ? 'La suma es mayor a 10' : 'La suma es menor a 10';
        const result = (max % 2 === 0) ? 'Es par' : 'Es impar';

        console.log("");
        console.log("Resultados: ");
        console.log(`El mayor número es: ${max}`);
        console.log(`La suma de los números ${a} y ${b} es: ${suma}`);
        console.log(resultSuma);
        console.log(result);
        rl.close();
    });
});
