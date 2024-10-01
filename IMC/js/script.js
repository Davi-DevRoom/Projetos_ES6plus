const form = document.querySelector('#form');
const resultado = document.querySelector('.result');

function resultForm(event){
    event.preventDefault();

    const peso = document.querySelector('#weight').value;
    const altura = document.querySelector('#height').value;

    const imctotal =  (peso/(altura*altura)).toFixed(2);

    resultado.innerHTML = `<p> imc de ${imctotal} </p>`;

    console.log(resultado);
}

form.addEventListener('submit', resultForm)