function manufacture(gifts, materials) {
    let result = [];

    for (let gift of gifts) {
        // Creamos un conjunto de caracteres únicos para el regalo actual
        let giftSet = new Set(gift);
        // Verificamos si todos los caracteres del regalo están en los materiales
        let canManufacture = true;
        for (let char of giftSet) {
            if (!materials.includes(char)) {
                canManufacture = false;
                break;
            }
        }
        // Si podemos fabricar el regalo, lo agregamos al resultado
        if (canManufacture) {
            result.push(gift);
        }
    }
    return result;
}

const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'tronesa';
console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';
console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ['libro', 'ps5'];
const materials3 = 'psli';
console.log(manufacture(gifts3, materials3)); // []
