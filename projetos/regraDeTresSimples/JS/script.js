document.querySelector('#calc').addEventListener('click', ()=>{
    const num1 = Number(document.querySelector('#val1').value);
    const num2 = Number(document.querySelector('#val2').value);
    const num3 = Number(document.querySelector('#val3').value);
    const result = document.querySelector('.result');

    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 == 0){
        alert('preencha os campos corretamente com valores numericos');
    }

    let res = (num3 * num2)/num1;

    if(Number.isInteger(res)){
        result.textContent = res;
    } else{
        result.textContent = res.toFixed(2).replace('.',',');
    }
    
});