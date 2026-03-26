export default class Custo {
  constructor(
    leite = 6.0,
    creme = 20.0,
    acucar = 5.0,
    condensado = 6.0,
    granulado = 10.0
  ) {
    this.leite = leite;
    this.creme = creme;
    this.acucar = acucar;
    this.condensado = condensado;
    this.granulado = granulado;

    this.preco = {};
    this.totalCusto = 0;
  }

  calcularCusto(qtdeIngredientes) {
    this.preco = {
      leite: Number(((qtdeIngredientes.leite / 1000) * this.leite).toFixed(2)),
      creme: Number(((qtdeIngredientes.creme / 1000) * this.creme).toFixed(2)),
      acucar: Number(
        ((qtdeIngredientes.acucar / 1000) * this.acucar).toFixed(2)
      ),
      condensado: Number(
        ((qtdeIngredientes.condensado / 395) * this.condensado).toFixed(2)
      ), 
      granulado: Number(
        ((qtdeIngredientes.granulado / 1000) * this.granulado).toFixed(2)
      ),
    };

    this.somarTotalCusto();
    return this.preco;
  }

  somarTotalCusto() {
    const somaBruta =
      this.preco.leite +
      this.preco.creme +
      this.preco.acucar +
      this.preco.condensado +
      this.preco.granulado;

    this.totalCusto = Number(somaBruta.toFixed(2));
  }
}
