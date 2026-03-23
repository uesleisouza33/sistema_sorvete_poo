export default class Receita {
    constructor(leite = 500, creme = 160, acucar = 100, leiteCond = 120, granulado = 20) {
        this.leite = leite;
        this.creme = creme;
        this.acucar = acucar;
        this.leiteCond = leiteCond;
        this.granulado = granulado;

        // Peso base da receita 
        this.pesoBase = this.leite + this.creme + this.acucar + this.leiteCond + this.granulado;

        // Atributos de resultado
        this.receita = {};
        this.totalGramas = 0;
    }

    // Calcula a quantidade de ingredientes para 1 Tonelada (1.000.000g)
    CalcularFator() {
        if (this.pesoBase === 0) return;

        const fatorEscala = 1000000 / this.pesoBase;

        this.receita = {
            leite: Number((this.leite * fatorEscala).toFixed(2)),
            creme: Number((this.creme * fatorEscala).toFixed(2)),
            acucar: Number((this.acucar * fatorEscala).toFixed(2)),
            leiteCond: Number((this.leiteCond * fatorEscala).toFixed(2)),
            granulado: Number((this.granulado * fatorEscala).toFixed(2))
        };

        return this.receita;
    }

    // Calcula quantas unidades saem de 1 tonelada
    ConverterToneladas(pesoUnitario) {
        if (!pesoUnitario || pesoUnitario === 0) return 0;

        this.totalGramas = 1000000 / pesoUnitario;

        // Aplica regra de negócio de unidades inteiras
        this.escalarReceita();

        return this.totalGramas;
    }

    escalarReceita() {
        // Arredonda para baixo para garantir apenas unidades completas
        this.totalGramas = Math.floor(this.totalGramas);
    }
}