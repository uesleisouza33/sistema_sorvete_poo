import Receita from '../models/receita'
describe('Teste unitário do Custo do Sorvete', () => {
    test('Teste calcular custo com ingredientes normais', () => {
        const custo = new Custo()
        const qtdeIngredientes = {
            leite: 1000,
            creme: 500,
            acucar: 200,
            condensado: 395,
            granulado: 100
        }

        const resultado = custo.calcularCusto(qtdeIngredientes)

        expect(resultado.leite).toBe(6.00)
        expect(resultado.creme).toBe(10.00)
        expect(resultado.acucar).toBe(1.00)
        expect(resultado.condensado).toBe(6.00)
        expect(resultado.granulado).toBe(1.00)
        expect(custo.totalCusto).toBe(24.00)
    })

    test('Teste calcular custo com ingredientes zerados', () => {
        const custo = new Custo()
        const qtdeIngredientes = {
            leite: 0,
            creme: 0,
            acucar: 0,
            condensado: 0,
            granulado: 0
        }

        const resultado = custo.calcularCusto(qtdeIngredientes)

        expect(resultado.leite).toBe(0)
        expect(resultado.creme).toBe(0)
        expect(resultado.acucar).toBe(0)
        expect(resultado.condensado).toBe(0)
        expect(resultado.granulado).toBe(0)
        expect(custo.totalCusto).toBe(0)
    })

    test('Teste calcular custo com preços personalizados', () => {
        const custo = new Custo(8.0, 25.0, 7.0, 8.0, 15.0)
        const qtdeIngredientes = {
            leite: 1000,
            creme: 1000,
            acucar: 1000,
            condensado: 790, // 2 latas
            granulado: 500
        }

        const resultado = custo.calcularCusto(qtdeIngredientes)

        expect(resultado.leite).toBe(8.00)
        expect(resultado.creme).toBe(25.00)
        expect(resultado.acucar).toBe(7.00)
        expect(resultado.condensado).toBe(16.00)
        expect(resultado.granulado).toBe(7.50)
        expect(custo.totalCusto).toBe(63.50)
    })

    test('Teste calcular custo com decimais nos ingredientes', () => {
        const custo = new Custo()
        const qtdeIngredientes = {
            leite: 750,     // 750ml
            creme: 250,     // 250g
            acucar: 150,    // 150g
            condensado: 197.5, // meia lata
            granulado: 50     // 50g
        }

        const resultado = custo.calcularCusto(qtdeIngredientes)

        // Cálculos esperados:
        // leite: (750/1000) * 6.0 = 4.50
        // creme: (250/1000) * 20.0 = 5.00
        // acucar: (150/1000) * 5.0 = 0.75
        // condensado: (197.5/395) * 6.0 = 3.00
        // granulado: (50/1000) * 10.0 = 0.50
        // Total: 13.75

        expect(resultado.leite).toBe(4.50)
        expect(resultado.creme).toBe(5.00)
        expect(resultado.acucar).toBe(0.75)
        expect(resultado.condensado).toBe(3.00)
        expect(resultado.granulado).toBe(0.50)
        expect(custo.totalCusto).toBe(13.75)
    })

    test('Teste somarTotalCusto individualmente', () => {
        const custo = new Custo()

        // Configurar preços manualmente
        custo.preco = {
            leite: 6.00,
            creme: 10.00,
            acucar: 1.00,
            condensado: 6.00,
            granulado: 1.00
        }

        custo.somarTotalCusto()

        expect(custo.totalCusto).toBe(24.00)
    })
})