const DENSIDADE = 0.6;

const TAMANHOS = {
  400: 'Pequeno (400ml)',
  900: 'Médio (900ml)',
  1700: 'Grande (1700ml)',
};

const METAS = {
  1: '1 Tonelada',
  5: '5 Toneladas',
  12: '12 Toneladas',
};

let diametro = 1;
let altura = 1;

const $ = id => document.getElementById(id);

$('tamanho-pote').addEventListener('change', () => {
  $('tamanho-display').textContent = TAMANHOS[$('tamanho-pote').value];
});

$('meta-producao').addEventListener('change', () => {
  $('meta-display').textContent = METAS[$('meta-producao').value];
});

$('diam-minus').addEventListener('click', () => {
  if (diametro > 1) { diametro--; $('diam-value').textContent = diametro; }
});
$('diam-plus').addEventListener('click', () => {
  diametro++;
  $('diam-value').textContent = diametro;
});

$('alt-minus').addEventListener('click', () => {
  if (altura > 1) { altura--; $('alt-value').textContent = altura; }
});
$('alt-plus').addEventListener('click', () => {
  altura++;
  $('alt-value').textContent = altura;
});

$('btn-calcular').addEventListener('click', calcular);
$('btn-limpar').addEventListener('click', limpar);

function calcular() {
  const toneladas = Number($('meta-producao').value);
  const tamanhoPote = Number($('tamanho-pote').value);
  const raio = diametro / 2;

  const receita = new Receita();
  const ingredientes = receita.CalcularFator(toneladas);

  const sorvete = new Sorvete(toneladas, DENSIDADE, tamanhoPote, raio, altura);

  const custo = new Custo();
  custo.calcularCusto(ingredientes);

  const qtdePotes    = sorvete.qtdePotes();
  const pesoUnitario = sorvete.pesoUnitarioPote();
  const custoTotal   = custo.totalCusto;
  const custoPote    = custo.custoPorPote(qtdePotes);

  $('report-title').textContent = `Relatório: ${METAS[toneladas]} de Sorvete`;
  $('r-tamanho').textContent    = TAMANHOS[tamanhoPote].split(' (')[0].toLowerCase();
  $('r-peso').textContent       = pesoUnitario.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + ' g';
  $('r-rendimento').textContent = qtdePotes.toLocaleString('pt-BR') + ' potes';
  $('r-custo-total').textContent = custoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  $('r-custo-pote').textContent  = custoPote.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  $('btn-calcular').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function limpar() {
  $('tamanho-pote').value = '900';
  $('tamanho-display').textContent = TAMANHOS[900];
  $('meta-producao').value = '1';
  $('meta-display').textContent = METAS[1];

  diametro = 1;
  altura = 1;
  $('diam-value').textContent = 1;
  $('alt-value').textContent = 1;

  ['r-tamanho', 'r-peso', 'r-rendimento', 'r-custo-total', 'r-custo-pote'].forEach(id => {
    $(id).textContent = '—';
  });
  $('report-title').textContent = 'Relatório de Produção';
}
