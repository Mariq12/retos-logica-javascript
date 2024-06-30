function findNaughtyStep(original, modified) {
    // Recorrer ambas cadenas simultáneamente
    for (let i = 0; i < Math.max(original.length, modified.length); i++) {
        // Si encontramos una diferencia en los caracteres, devolvemos el carácter diferente
        if (original[i] !== modified[i]) {
            // Si 'original' se ha agotado o los caracteres son diferentes, devolvemos el carácter correspondiente
            if (!original[i]) {
                return modified[i];
            } else if (!modified[i]) {
                return original[i];
            } else {
                return original.length > modified.length ? original[i] : modified[i];
            }
        }
    }
    // Si no se encuentra ninguna diferencia, devolvemos una cadena vacía
    return '';
}

// Ejemplos de uso
const original1 = 'abcd';
const modified1 = 'abcde';
console.log(findNaughtyStep(original1, modified1)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // ''

