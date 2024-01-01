export const pokeIds = [1, 2, 3]

interface Pokemon {
    id: number;
    name: string;
    age: number
    // El signo de interrogación indica que la propiedad puede venir nulo.
    // age?: number;
    // El undefined permite que la propiedad no exista, pero debe ser declarada como undefined.
    // age: number | undefined
} 

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 2
}

export const charmander: Pokemon = {
    id: 4,
    name: "Charmander",
    age: 1
}

// Para indicar que mi arreglo va a almacenar objetos de tipo Pokemon, debo declarar pokemons de la siguiente manera: pokemons: Pokemon[]
export const pokemons: Pokemon[] = []

pokemons.push(charmander, bulbasaur)