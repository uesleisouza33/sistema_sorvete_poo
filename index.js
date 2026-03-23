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

// calcula ingredientes para 1 tonelada
const ingredientes = receita.CalcularFator();

console.log("=== INGREDIENTES (1 tonelada) ===");
console.log(ingredientes);

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
console.log("Peso total (g):", sorvete.getPesoTotal());
console.log("Volume total:", sorvete.volumeTotal.toFixed(2));
console.log("Volume pote:", sorvete.volumePote.toFixed(2));
console.log("Quantidade de potes:", sorvete.getQtdePotes());

// ==========================
// 💰 CUSTO
// ==========================
const custo = new Custo();

// calcula custo baseado nos ingredientes
const precos = custo.calcularCusto(ingredientes);

console.log("\n=== CUSTO POR INGREDIENTE ===");
console.log(precos);

console.log("\n=== CUSTO TOTAL ===");
console.log("Total: R$", custo.totalCusto.toFixed(2));