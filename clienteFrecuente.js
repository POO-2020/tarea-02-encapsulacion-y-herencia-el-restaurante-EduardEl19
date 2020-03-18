import Cliente from "./cliente.js"
import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Direccion from "./direccion.js"

export default class ClienteFrecuente extends Cliente {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Direccion} direccion 
     * @param {number} telefono 
     * @param {number} numeroCliente 
     * @param {Fecha} fechaRegistro 
     */
    constructor(nombre, direccion, telefono, numeroCliente, fechaRegistro){
        super({nombre, direccion, telefono})
        this._numeroCliente = numeroCliente
        this._fechaRegistro = fechaRegistro
        console.log("El objeto ha sido inicializado")
    }
    getPerfil(){
        return `${this._numeroCliente}, ${this._fechaRegistro.getFecha()}, ${this._nombre.getNombreCompleto()}, ${this._direccion.getFormatoCorto()}, ${this._numero}`
    }
}