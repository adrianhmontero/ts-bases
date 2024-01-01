import axios from "axios";

/* Clase abstracta */
export interface HttpAdapter {
    get<T>(url: string): Promise<T>
}

/* Al añadir implements HttpAdapter estamos indicando que esta clase debe tener la misma
    estructura que la clase abstracta/interface HttpAdapter. En este caso, nuestra clase debe contener 
    un método llamado get, que reciba el parámetro url de tipo string y que devuelva una promesa de
    tipo T (Definida donde se use el método). */
export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios
    /* Las < y > representan un genérico, mientras que la T representa el tipo de dato que va a ser
    definido donde se use el método get (En este caso). */
    async get<T>(url: string) {
        // petición Get
        /* En esta parte, definimos que axios.get va a retornar una respuesta de tipo T.
        Es decir, el tipo que se defina donde este scope (método get de nuestra clase) se ejecute. */
        const { data } = await this.axios.get<T>(url);
        return data;
    }
    async post(url: string, data: any) {
        // petición Get
        return;
    }
    async patch(url: string, data: any) {
        // petición Get
        return;
    }
    async delete(url: string) {
        // petición Get
        return;
    }
}

/* Al añadir implements HttpAdapter estamos indicando que esta clase debe tener la misma
    estructura que la clase abstracta/interfaz HttpAdapter. En este caso, nuestra clase
    debe contener un método llamado get, que reciba el parámetro url de tipo string y que
    devuelva una promesa de tipo T (Definida donde se use el método). */
export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string) {
        const resp = await fetch(url);
        const data: T = await resp.json()
        return data
    }
}