/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        brand: 'Mercedes',
        model: 'A',
        fuel: 'oil',
    },
    {
        brand: 'Audi',
        model: 10,
        fuel: 'diesel',
    },
    {
        brand: 'Dacia',
        model: 'Sandero',
        fuel: 'GPL'
    },
    {
        brand: 'Mercedes',
        model: 'C',
        fuel: 'diesel'
    },
    {
        brand: 'Fiat',
        model: 'Punto',
        fuel: 'metano'
    },
    {
        brand: 'Toyota',
        model: 'CHR',
        fuel: 'electric'
    },
    {
        brand: 'Audi',
        model: 22,
        fuel: 'oil'
    },
    {
        brand: 'Kupra',
        model: 'Formentor',
        fuel: 'electric'
    },
    {
        brand: 'Mercedes',
        model: 'E',
        fuel: 'oil'
    },
    {
        brand: 'Fiat',
        model: 'Tipo',
        fuel: 'oil'
    }
]
//console.log(cars);

const benzina = cars.filter((carburante) => {
    if (carburante.fuel == 'oil') {
        return true
    } else {
        return false
    }
})
console.log(benzina);

const diesel = cars.filter((carburante) => {
    if (carburante.fuel == 'diesel') {
        return true
    } else {
        return false
    }
})
console.log(diesel);

const electric = cars.filter((carburante) => {
    if (carburante.fuel == 'electric') {
        return true
    } else {
        return false
    }
})
console.log(electric);

const other = cars.filter((carburante) => {
    if (carburante.fuel == 'diesel') {
        return false
    } else if (carburante.fuel == 'oil'){
        return false
    } else if (carburante.fuel == 'electric'){
        return false
    } else {
        return true
    }
})
console.log(other);