const BUTTON = document.getElementById('click');

function jurosCompostos(){
    const CAP = Number(document.getElementById('valor-inicial').value);
    const I_JURO = Number(document.getElementById('taxa').value);
    const TEMPO = Number(document.getElementById('periodo').value);
    const RES = document.querySelector('.result span');

    let i_Temp = (1 + I_JURO/100) **TEMPO;

    let montante = CAP * i_Temp;
    RES.textContent = montante.toFixed(2);
}

BUTTON.addEventListener('click', jurosCompostos);