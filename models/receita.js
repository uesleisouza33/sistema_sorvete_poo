export default class Receita {
    constructor(leite = 500, creme = 160, acucar = 100, condensado = 120, granulado = 20) {
        this.leite = leite
        this.creme = creme
        this.acucar = acucar
        this.condensado = condensado
        this.granulado = granulado

        this.pesoBase = this.leite + this.creme + this.acucar + this.condensado + this.granulado
        this.receita = {}
    }

    CalcularFator(toneladas = 1){
        if(this.pesoBase === 0) return

        const totalGramas = toneladas * 1000000
        const fator = totalGramas / this.pesoBase

        this.receita = {
            leite: Number((this.leite * fator).toFixed(2)),
            creme: Number((this.creme * fator).toFixed(2)),
            acucar: Number((this.acucar * fator).toFixed(2)),
            condensado: Number((this.condensado * fator).toFixed(2)),
            granulado: Number((this.granulado * fator).toFixed(2))
        }

        return this.receita
    }
}