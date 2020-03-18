import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js"
import ElementoPedido from "./elementoPedido.js"
import Precio from "./precio.js"

export default class Pedido {
    /**
     * 
     * @param {number} numeroPedido
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente
     * @param {ElementoPedido} elementoPedido 
     */
    constructor(numeroPedido, fecha, hora, cliente, elementoPedido){
        this._numeroPedido = numeroPedido
        this._fecha = fecha
        this._hora = hora
        this._cliente = cliente
        this._elementosPedido = elementoPedido
        this._elementoPedido = new Array()   
        console.log("El objeto ha sido inicializado")
    }
    getResumen(){
        let resumen 
        resumen = `El cliente ${this._cliente._nombre.getNombreCompleto()} ha hecho el pedido No. ${this._numeroPedido} - ${this._elementosPedido._producto}, a entregar el día ${this._fecha.getFecha()}, antes de la hora marcada ${this._hora.getFormato24()} en la direccion ${this._cliente._direccion.getFormatoCorto()}.`
        return `${resumen}`
    }
    getNumeroElementos(){
        return `${this._elementoPedido.length}`
    }
    getNumeroProductos(){
        let i = 0
        this._elementoPedido.forEach(this._elementosPedido => {i = this._elementosPedido._getCantidad() + i})
    }
    getCostoTotal(){
        let precio 
        precio = new Precio(`${this._elementosPedido._getPrecioProducto()} * ${this._elementosPedido._getCantidad()}`)
        return `${precio}`
    }
    agregarElementos(elementoPedido){
        this._elementoPedido.push(elementoPedido)
    }
    listarElementos(){
        this._elementoPedido.forEach((elementoPedido, i) => {
            console.log(`${i}. - ${this._elementosPedido.getDescripcion()}`)
        })
    }
    _getNumeroPedido(){
        return this._numeroPedido
    }
    _encontrarPedido(pedido){
        if (pedido._getNumeroPedido() === this._numeroPedido){
            return true 
        }
    }
}