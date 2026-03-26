export default class Sorvete {
  constructor(toneladas, densidade, tamanhoPote, raio, altura) {
    this.toneladas = toneladas;
    this.densidade = densidade;
    this.tamanhoPote = tamanhoPote;
    this.raio = raio;
    this.altura = altura;

    this.totalGramas = this.converterToneladasParaGramas();
    this.volumeTotal = this.calcularVolumeTotal();
    this.volumePote = this.calcularVolumePote();
    this.quantidadePotes = this.calcularQuantidadePotes();
  }

  converterToneladasParaGramas() {
    return this.toneladas * 1000000;
  }

  calcularVolumeTotal() {
    return this.totalGramas / this.densidade;
  }

  calcularVolumePote() {
    return Math.PI * this.raio * this.raio * this.altura;
  }

  calcularQuantidadePotes() {
    if (this.volumePote === 0) return 0;

    return Math.floor(this.volumeTotal / this.volumePote);
  }

  pesoTotal() {
    return this.totalGramas;
  }

  qtdePotes() {
    return this.quantidadePotes;
  }
}
