// El código define una función findFirstRepeated que busca el primer elemento repetido en un arreglo gifts. 
// Si encuentra un elemento repetido, lo devuelve; si no, devuelve -1.
function findFirstRepeated(gifts) {
    const seen = new Set();
    for (let id of gifts) {
        if (seen.has(id)) {
            return id;
        }
        seen.add(id);
    }
    return -1;
}

// Ejemplos de uso:
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
