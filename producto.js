import Precio from "./precio.js"
export default class Producto {
    /**
     * 
     * @param {string} nombre 
     * @param {Precio} precio 
     */
    constructor(nombre, precio){
        this._nombre = nombre
        this._precio = precio
        console.log("El objeto ha sido inicializado")
    }    
    getDescripcion(){
        let descripcion 
        descripcion = `${this._nombre}: ${this._precio.getPrecio()}`
        return `${descripcion}`
    }
    _getPrecioValor(){
        return this._precio._getValor()
    }
    _getPrecio(){
        return this._precio
    }
    _getNombre(){
        return this._nombre
    }
}