import Producto from "./producto.js"
import Precio from "./precio.js"
export default class ElementoPedido {
    /**
     * 
     * @param {Producto} producto 
     * @param {number} cantidad 
     */
    constructor(cantidad, producto){
        this._producto = producto
        this._cantidad = cantidad
        console.log("El objeto ha sido inicializado")
    }
    getDescripcion(){
        let precioTotal
        precioTotal = new Precio (this._cantidad * this._producto._precio._valor)
        return `${this._cantidad} x ${this._producto._nombre} : ${precioTotal.getPrecio()}`
    }
    _getPrecioProducto(){
        return this._producto._getPrecioValor()   
    }
    _getCantidad(){
        return this._cantidad
    }
}