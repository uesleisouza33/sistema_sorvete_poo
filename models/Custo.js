export default class Custo {
    // valores em R$ por litro, kg ou unidade
    constructor(leite = 6.00, creme = 20.00, acucar = 5.00, condensado = 6.00, granulado = 10.00) {
        this.leite = leite
        this.creme = creme 
        this.acucar = acucar         
        this.condensado = condensado  
        this.granulado = granulado    

        this.preco = {}
        this.totalCusto = 0
    }

    calcularCusto(qtdeIngredientes) {
        this.preco = {
            leite: Number(((qtdeIngredientes.leite / 1000) * this.leite).toFixed(2)), // ml → L
            creme: Number(((qtdeIngredientes.creme / 1000) * this.creme).toFixed(2)), // g → kg
            acucar: Number(((qtdeIngredientes.acucar / 1000) * this.acucar).toFixed(2)), // g → kg
            condensado: Number(((qtdeIngredientes.condensado / 395) * this.condensado).toFixed(2)),
            granulado: Number(((qtdeIngredientes.granulado / 1000) * this.granulado).toFixed(2))
        }

        this.somarTotalCusto()
        return this.preco
    }

    somarTotalCusto() {
        const somaBruta = this.preco.leite + this.preco.creme + this.preco.acucar +
                          this.preco.condensado + this.preco.granulado

        this.totalCusto = Number(somaBruta.toFixed(2))
    }
}