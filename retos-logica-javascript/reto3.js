// la  función findFirstRepeated recibe un arreglo que muestra:
// la cantidad total de números en el arreglo, 
// cuántos números se repiten,
// cuáles son esos números, 
// el primer número que se repite

function findFirstRepeated(gifts) {
    const seen = new Set();
    const duplicates = new Set();
    let firstRepeated = -1;
    const notRepeated = new Set();

    for (let id of gifts) {
        if (seen.has(id)) {
            if (firstRepeated === -1) {
                firstRepeated = id;
            }
            duplicates.add(id);
            notRepeated.delete(id); // Eliminar del conjunto de no repetidos si se encuentra duplicado
        } else {
            seen.add(id);
            notRepeated.add(id); // Agregar al conjunto de no repetidos si no se ha visto antes
        }
    }

    return {
        totalNumbers: gifts.length,
        totalUniqueNumbers: seen.size,
        totalDuplicateNumbers: duplicates.size,
        duplicateNumbers: Array.from(duplicates),
        firstRepeatedNumber: firstRepeated === -1 ? "no se repite" : firstRepeated,
        notRepeatedNumbers: Array.from(notRepeated)
    };
}

// Ejemplos de uso:
const giftIds = [2, 1, 3, 5, 3, 2];
const result1 = findFirstRepeated(giftIds);
console.log(result1);

const giftIds2 = [1, 2, 3, 4];
const result2 = findFirstRepeated(giftIds2);
console.log(result2);

const giftIds3 = [5, 1, 5, 1];
const result3 = findFirstRepeated(giftIds3);
console.log(result3);
