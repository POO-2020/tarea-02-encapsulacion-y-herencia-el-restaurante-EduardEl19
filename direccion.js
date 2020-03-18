export default class Direccion {
    /**
     * 
     * @param {string} calle 
     * @param {number} numExterior  
     * @param {string} colonia 
     * @param {number} codPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numExterior, colonia, codPostal, ciudad, municipio){
        this._calle = calle
        this._noExterior = numExterior
        this._colonia = colonia
        this._codigo = codPostal
        this._ciudad = ciudad
        this._municipio = municipio
        console.log("El objeto ha sido inicializado")
    }
    getFormatoCorto(){
        let direccion 
        direccion = `${this._calle} ${this._noExterior}`
        return `${direccion}`
    }
    getFormatoExtendido(){
        let direccion 
        direccion = `Direccion: ${this._calle} ${this._noExterior}, colonia ${this._colonia}, C.P. ${this._codigo}, ${this._ciudad}, ${this._municipio}`
    }
}