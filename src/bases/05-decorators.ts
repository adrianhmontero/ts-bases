class newPokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() { console.log(`...`); }

    speak() { console.log(`...`); }
}


const MyDecorator = () => {
    return (target: Function) => {
        return newPokemon
    }
}

@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() { console.log(`${this.name.toUpperCase()}!!!`); }

    speak() { console.log(`${this.name}, ${this.name}.`); }
}

export const squirtle = new Pokemon(7, 'Squirtle')

squirtle.speak()
squirtle.scream()