const buttonCalcular = document.querySelector('#calcular');

buttonCalcular.addEventListener('click', calcularJuro);

function calcularJuro(){
    let capital = document.querySelector('#valorInicial').value;
    let taxaJuros = document.querySelector('#taxaJuros').value;
    let tempo = document.querySelector('#periodoTempo').value;

    let juros = (capital * taxaJuros * tempo)/100;
    let jurosSimples =  +capital + juros;

    document.querySelector('#result > span').textContent = jurosSimples;
}