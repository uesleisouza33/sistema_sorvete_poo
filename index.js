import Receita from "./models/Receita.js";
import Sorvete from "./models/Sorvete.js";
import Custo from "./models/Custo.js";

// ==========================
// 🎯 ENTRADAS
// ==========================
const toneladas = 1;
const tamanhoPote = 400;
const densidade = 0.6;
const raio = 5;
const altura = 10;

// ==========================
// 🍓 RECEITA
// ==========================
const receita = new Receita();

// agora recebe toneladas
const ingredientes = receita.CalcularFator(toneladas);

console.log("=== INGREDIENTES ===");
console.table(ingredientes);

// ==========================
// 🧊 SORVETE
// ==========================
const sorvete = new Sorvete(
  toneladas,
  densidade,
  tamanhoPote,
  raio,
  altura
);

console.log("\n=== PRODUÇÃO ===");
console.log("Peso total (g):", sorvete.pesoTotal());
console.log("Volume total:", sorvete.volumeTotal.toFixed(2));
console.log("Volume pote:", sorvete.volumePote.toFixed(2));
console.log("Quantidade de potes:", sorvete.qtdePotes());

// ==========================
// 💰 CUSTO
// ==========================
const custo = new Custo();

const precos = custo.calcularCusto(ingredientes);

console.log("\n=== CUSTO POR INGREDIENTE ===");
console.table(precos);

console.log("Custo total (R$):", custo.totalCusto.toFixed(2));