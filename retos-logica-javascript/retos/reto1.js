// RETO 1

const obj1 = {a: 1, b: {c:2}}
    const obj2 = {d: 3}
    const obj3 = {...obj1, ...obj2}
    obj3.b.c = 4
    console.log(obj1.b.c + obj3.b.c)
	
// RESP. 8

