import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import Precio from "./precio.js"
import Pedido from "./pedido.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"

export default class Restaurante {
    /**
     * 
     * @param {string} nombre 
     * @param {number} telefono 
     * @param {Direccion} direccion 
     * @param {Producto} productos 
     * @param {Pedido} pedidos 
     */
    constructor(nombre, telefono, direccion, productos, pedidos){
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion
        this._productos = new Array()
        this._pedidos = new Array()
        console.log("El objeto ha sido inicializado")
    }
    registrarProducto(producto){
        this._productos.push(producto.getDescripcion())
    }
    listarProductos(){
        this._productos.forEach((producto, i) => {
            console.log(`${i + 1}. - ${producto}`)
        })
    }
    registrarPedido(pedido){
        if (this.buscarPedido(pedido) !== undefined){
            return false
        }
        this._pedidos.push(pedido)
        return true
    }
    listarPedidos(){
        this._pedidos.forEach((pedido, i) => {
            console.log(`${i}. - ${pedido.getResumen()}`)
        })
    }
    buscarPedido(pedido){
        let result = this._pedidos.find(p => p._encontrarPedido(pedido))
        return result
    }
    eliminarPedido(pedido){
        let result = this._buscarPedido(pedido)
        if (result < 0){
            return false
        }
        this._pedidos.splice(result, 1)
        return true
    }
    modificarPedido(pedido, nuevoPedido){
        let result = this._buscarPedido(pedido)
        if (result < 0){
            return false
        }
        this._pedidos.splice(result, 1, nuevoPedido)
        return true
    }
}