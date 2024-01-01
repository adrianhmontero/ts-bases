import axios from "axios";
import { Move, PokeAPIResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    // Podemos evitar escribir el public de la siguiente manera si lo definimos directamente en los argumentos del constructor
    // public id: number;
    // public name: string;

    get getImageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    // Argumentos del constructor
    // El readonly sirve para que precisamente no podamos cambiar ese valor de una instancia
    constructor(public readonly id: number, public name: string) { }

    scream() { console.log(`${this.name.toUpperCase()}!!!`); }

    speak() { console.log(`${this.name}, ${this.name}.`); }

    async getMoves(): Promise<Move[]> {
        // const moves = 10
        const { data } = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log({ moves: data.moves });
        return data.moves
    }
}

export const pikachu = new Pokemon(25, 'Pikachu')

pikachu.scream()
pikachu.speak()

pikachu.getMoves()