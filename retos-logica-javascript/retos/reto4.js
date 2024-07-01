const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su edad: ', (input) => {
    // El 10 indica que convierte la cadena input en un número entero en
    // base decimal (sistema numérico habitual).
    // Para hexadecimal es (parseInt(input, 16)) o binario (parseInt(input, 2)).
    const age = parseInt(input, 10);
    // Condición: (age >= 18)
    // Si la edad es mayor o igual a 18, la persona puede votar (true),
    // caso contrario no puede votar (false).
    const canVote = (age >= 18) ? 'Puede votar' : 'No puede votar';
    console.log(canVote);
    rl.close();
});
