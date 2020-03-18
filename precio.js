export default class Precio {
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this._valor = valor
        console.log("El objeto ha sido inicializado")
    }
    _getValor(){
        return this._valor
    }
    getPrecio(){
        return this._valor.toLocaleString('en-US', {
            style: 'currency',
            currency: 'MXN'
        })
    }
}