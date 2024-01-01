import { Move, PokeAPIResponse } from "../interfaces/pokeapi-response.interface";
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";

export class Pokemon {
    // Podemos evitar escribir el public de la siguiente manera si lo definimos directamente en los argumentos del constructor
    // public id: number;
    // public name: string;

    get getImageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    // Argumentos del constructor
    // El readonly sirve para que precisamente no podamos cambiar ese valor de una instancia
    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
    ) { }

    scream() { console.log(`${this.name.toUpperCase()}!!!`); }

    speak() { console.log(`${this.name}, ${this.name}.`); }

    async getMoves(): Promise<Move[]> {
        // const moves = 10
        // const { data } = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        // Esto me permite modificar únicamente mi clase adaptadora si la dependencia ha cambiado. Por ejemplo, si en un futuro axios.get cambia a axios.getRequest,
        // ya no tendría que cambiar cada método donde utilizo axios.get, sino que cambiaría mi clase adaptadora y así conservaría la misma nomenclatura del método de mi clase.
        const data = await this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log({ moves: data.moves });
        return data.moves
    }
}

/* PRINCIPIO DE SUSTITUCIÓN DE LISKOV
    A continuación estamos creando dos instancias de diferente clase cada una, PERO ambas clases tienen algo
    en común: Las dos implementan HttpAdapter. Posteriormente, instanciamos pikachu, que es un Pokemón que
    recibe como tercer parámetro una de nuestras instancias declaradas previamente. En este caso, pokeApiFetch.
    Si sustituimos ese parámetro por pokeApiAxios, funcionará igual, porque ambas implementan la interfaz HttpAdapter
    que indica que nuestras clases deben contener un método llamado get.
    En el constructor de nuestra clase Pokemon, definimos que el tercer parámetro privado de solo lectura llamado "http"
    es de tipo HttpAdapter, por lo que cualquier valor que se pase en el tercer parámetro de nuestras intancias de tipo 
    Pokemon van a ser válidas siempre y cuando dicho parámetro (Que debe ser una clase) debe implementar HttpAdapter.
    A esto se le llama PRINCIPIO DE SUSTITUCIÓN DE LISKOV */
const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFetchAdapter()
export const pikachu = new Pokemon(25, 'Pikachu', pokeApiFetch)

pikachu.scream()
pikachu.speak()

pikachu.getMoves()