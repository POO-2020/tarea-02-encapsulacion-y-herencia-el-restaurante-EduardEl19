import Nombre from "./nombre.js"
import Direccion from "./direccion.js"
export default class Cliente {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Direccion} direccion 
     * @param {number} telefono 
     */
    constructor(nombre, direccion, telefono){
        this._nombre = nombre
        this._direccion = direccion
        this._numero = telefono
        console.log("El objeto ha sido inicializado")
    }
    getPerfil(){
        return `${this._nombre.getNombreCompleto()}, ${this._direccion.getFormatoCorto()}, ${this._numero}`
    }
}