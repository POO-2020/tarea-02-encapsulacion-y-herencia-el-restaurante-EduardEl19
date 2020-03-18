export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minuto 
     * @param {string} periodo 
     */
    constructor(hora, minuto, periodo){
        this._hora = hora
        this._minutos = minuto
        this._periodo = periodo.toUpperCase()
        console.log("El objeto ha sido inicializado")
    }
    getFormato12(){
        return `${this._hora}:${this._minutos} ${this._periodo}`
    }
    getFormato24(){
        if (this._periodo === "AM"){
            return `${this._hora}:${this._minutos}`
        } else {
            return `${this._hora + 12}:${this._minutos}`
        }
    }
}