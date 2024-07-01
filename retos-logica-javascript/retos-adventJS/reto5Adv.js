function cyberReindeer(road, time) {
    let position = 0;
    const result = [road];
    road = road.replace("S", ".");

    const roadString = { 5: road.replaceAll("|", "*") };
    const roadDelay = { ".": 1, "*": 1, "|": 0 };

    for (let i = 1; i <= time; i++) {
        road = roadString[i] ?? road;
        if (position + 1 < road.length && roadDelay[road[position + 1]] !== 0) {
            position += roadDelay[road[position + 1]];
        }
        result.push(`${road.substring(0, position)}S${road.substring(position + 1)}`);
        if (result.length === time) break;  // Detener si se alcanza el número de tiempo especificado
    }
    return result;
}

// Ejemplo de uso:
const road = 'S..|...|..';
const time = 10;
const result = cyberReindeer(road, time);
console.log(result.join('\n'));



/* -> result:
[
  'S..|...|..', //1 estado inicial
  '.S.|...|..', //2 avanza el trineo la carretera
  '..S|...|..', //3 avanza el trineo la carretera
  '..S|...|..', //4 el trineo para en la barrera
  '..S|...|..', //5 el trineo para en la barrera
  '...S...*..', //6 se abre la barrera, el trineo avanza
  '...*S..*..', //7 avanza el trineo la carretera
  '...*.S.*..', //8 avanza el trineo la carretera
  '...*..S*..', //9 avanza el trineo la carretera
  '...*...S..', //10 avanza por la barrera abierta
]

S..|...|.. 1
.S.|...|.. 2
..S|...|.. 3
..S|...|.. 4
..S|...|.. 5
...S...*.. 6
...*S..*.. 7
...*.S.*.. 8
...*..S*.. 9
...*...S.. 10

*/


