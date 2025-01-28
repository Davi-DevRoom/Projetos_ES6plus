document.querySelector('#calc').addEventListener('click', ()=>{
    const CAP = Number(document.querySelector('#valor-inicial').value);
    const VALUE_MES = Number(document.querySelector('#valor-mensal').value);
    const TAXA = Number(document.querySelector('#taxa-mes').value);
    const TEMP = Number(document.querySelector('#periodo').value);
    const RES = document.querySelector('#result  span');
    
    let i = TAXA/100;
    let montanteInicial = CAP * Math.pow(1 + i, TEMP);
    let montanteAportes = VALUE_MES *((Math.pow(1 + i, TEMP) - 1)/i);
    let montanteFinal = montanteInicial + montanteAportes;

    RES.textContent = `R$ ${montanteFinal.toFixed(2)}`;
});