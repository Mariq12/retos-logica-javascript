function decode(message) {
    let stack = [];
    for (let char of message) {
        if (char === ")") {
            let segment = "";
            while (stack.length && stack[stack.length - 1] !== "(") {
                segment = stack.pop() + segment;
            }
            stack.pop(); // Remove the '('
            for (let reversedChar of segment.split("").reverse().join("")) {
                stack.push(reversedChar);
            }
        } else {
            stack.push(char);
        }
    }
    return stack.join("");
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
