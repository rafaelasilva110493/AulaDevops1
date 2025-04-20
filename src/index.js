const array = [1,2,1,2,2]
let numAnterior = 0
let moda = "Nao existe"

for (let n = 0; n < array.length; n++) {
    let numvezes = 0
    const numero = array[n]; 
    
    for (let i = 0; i < array.length; i++) {
        const num = array[i]
        if (numero === num) {
            numvezes++
        }
    }

    if (numvezes > numAnterior ) {
        numAnterior = numvezes
        moda = numero
    } else if (numvezes === numAnterior && moda !== numero) {
        moda = "Nao existe"
    }
}

console.log("moda", moda)