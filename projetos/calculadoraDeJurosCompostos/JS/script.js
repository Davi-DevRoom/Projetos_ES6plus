// Primeiro passo é declarar a constante, puxando elas do dom
// através do querySelector 
const BUTTON = document.getElementById('click');

// Função de callback do botão
function jurosCompostos(){
    const CAP = Number(document.getElementById('valor-inicial').value);
    const TAXA = Number(document.getElementById('taxa').value)/100;
    const TEMPO = Number(document.getElementById('periodo').value);
    const RES = document.querySelector('.result span');

    let montante = CAP * (1 + TAXA)**TEMPO;

    RES.textContent = `R$ ${montante.toFixed(2)}`;
}

// Crie um evento que ira executar uma função quando uma ação for executada
BUTTON.addEventListener('click', jurosCompostos);