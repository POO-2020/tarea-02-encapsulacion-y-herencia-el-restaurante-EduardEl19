import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Direccion from "./direccion.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import Cliente from "./cliente.js"
import ClienteFrecuente from "./clienteFrecuente.js"
import ElementoPedido from "./elementoPedido.js"
import Pedido from "./pedido.js"

class Main {
    constructor(){
        this._fecha1 = new Fecha (12, 6, 2010)
        this._fecha2 = new Fecha (31, 12, 2017)
        this._fecha3 = new Fecha (20, 5, 2020)

        this._hora1 = new Tiempo (8, 00, "AM")
        this._hora2 = new Tiempo (4, 30, "PM")

        this._nombre1 = new Nombre ("Jose Juan", "Macias", "Martinez")
        this._nombre2 = new Nombre ("Ana Maria", "Solorio", "Mora")
        this._nombre3 = new Nombre ("Miguel Angel", "Rodriguez", "Mata")

        this._direccion = new Direccion ("Av. Tecnologico", 150, "Santa Barbara", 28040, "Colima", "Col.")
        this._direccion2 = new Direccion ("Rafael Heredia", 307, "Bugambilias", 28060, "Colima", "Col.")
        this._direccion3 = new Direccion ("Nicolas Bravo", 67, "San Pablo", 28100, "Colima", "Col.")

        this._precio1 = new Precio (30.5)
        this._precio2 = new Precio (35.0)

        this._producto1 = new Producto ("Baguette integral", this._precio1)
        this._producto2 = new Producto ("Hamburguesa", this._precio2)

        this._cliente = new Cliente (this._nombre1, this._direccion, 312-945-8594)
        this._cliente2 = new Cliente (this._nombre3, this._direccion3, 312-330-5682)

        this._clienteFrecuente = new ClienteFrecuente (this._nombre2, this._direccion2, 312-081-9368, 209, this._fecha2)

        this._elementoPedido = new ElementoPedido (2, this._producto2)

        this._pedido1 = new Pedido (25, this._fecha3, this._hora2, this._cliente2)
    }
    probarFecha(){
        console.log(this._fecha1.getAños())
        console.log(this._fecha1.getMeses())
        console.log(this._fecha1.getSemanas())
        console.log(this._fecha1.getDias())
        console.log(this._fecha1.getFecha())
        console.log(this._fecha1.getDiaFecha())
    }
    probarTiempo(){
        console.log(this._hora1.getFormato12())
        console.log(this._hora1.getFormato24())
        console.log(this._hora2.getFormato12())
        console.log(this._hora2.getFormato24())
    }
    probarNombre(){
        console.log(this._nombre1.getNombreCompleto())
        console.log(this._nombre1.getApellidoNombre())
        console.log(this._nombre1.getIniciales())
    }
    probarDireccion(){
        console.log(this._direccion.getFormatoCorto())
        console.log(this._direccion.getFormatoExtendido())
        console.log(this._direccion2.getFormatoCorto())
        console.log(this._direccion2.getFormatoExtendido())
    }
    probarPrecio(){
        console.log(this._precio1.getPrecio())
        console.log(this._precio2.getPrecio())
    }
    probarProducto(){
        console.log(this._producto1.getDescripcion())
        console.log(this._producto2.getDescripcion())
    }
    probarCliente(){
        console.log(this._cliente.getPerfil())
        console.log(this._cliente2.getPerfil())
    }
    probarClienteFrecuente(){
        console.log(this._clienteFrecuente.getPerfil())
    }
    probarElementoPedido(){
        console.log(this._elementoPedido.getDescripcion())
    }
    probarPedido(){
        console.log(this._pedido1.getResumen())
        console.log(this._pedido1.getNumeroElementos())
        console.log(this._pedido1.getNumeroProductos())
        console.log(this._pedido1.getCostoTotal())
        console.log(this._pedido1.agregarElementos())
        console.log(this._pedido1.listarElementos())
    }
}

let app = new Main()

app.probarFecha()
app.probarTiempo()
app.probarNombre()
app.probarDireccion()
app.probarPrecio()
app.probarProducto()
app.probarCliente()
app.probarClienteFrecuente()
app.probarElementoPedido()
app.probarPedido()