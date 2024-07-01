const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ', (input) => {
    const number = parseInt(input, 10);
    // Condición: (number % 2 === 0)
// number % 2 es una operación de módulo que devuelve el resto de la división de number por 2.
// Si el resto es 0, significa que el número es par (true), caso contrario es impar (false).
    const result = (number % 2 === 0) ? 'Es par' : 'Es impar';
    console.log(result);
    rl.close();
});
