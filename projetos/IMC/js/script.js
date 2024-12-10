const form = document.querySelector('#form');
const result = document.querySelector('.result');

form.addEventListener('submit', resultado);

function resultado(event){
    event.preventDefault();

    const peso = document.querySelector('#weight').value;
    const altura = document.querySelector('#height').value;
    const alturaquadrada = altura*altura;

    const imctotal = (peso/alturaquadrada).toFixed(2);

    result.innerHTML = `seu imc é de ${imctotal}`;

    if (imctotal < 16.9){
        result.innerHTML += `seu IMC está muito a baixo do peso`
    } else if(imctotal >= 17 && imctotal <= 18.4){
        result.innerHTML += `seu IMC está baixo do peso`
    } else if (imctotal >= 18.5 && imctotal <=24.9){
        result.innerHTML +=`seu IMC está normal`
    } else if(imctotal >= 25 && imctotal <= 29.9){
        result.innerHTML +=`seu imc está com Sobrepeso`
    } else if(imctotal >= 30 && imctotal <= 34.9){
        result.innerHTML += `seu imc está com Obesidade grau 1`
    } else if(imctotal >= 35 && imctotal <= 40){
        result.innerHTML += `seu imc está com Obesidade grau 2`
    } else{
        result.innerHTML += `seu imc está com Obesidade grau 3`
    }
}























































// const form = document.querySelector('#form');
// const resultado = document.querySelector('.result');

// function resultForm(event){
//     event.preventDefault();

//     const peso = document.querySelector('#weight').value;
//     const altura = document.querySelector('#height').value;

//     const imctotal = (peso/(altura*altura)).toFixed(2);

//     resultado.innerHTML = `<p> imc de ${imctotal} </p>`;

//     console.log(resultado);
// }

// form.addEventListener('submit', resultForm)