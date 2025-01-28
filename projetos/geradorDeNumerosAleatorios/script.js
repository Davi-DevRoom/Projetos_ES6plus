const btn = document.querySelector('#generate');

btn.addEventListener('click', numeroAleatorio);

function numeroAleatorio(){
    let numeroMin = parseInt(document.querySelector('#min').value);
    let numeroMax = parseInt(document.querySelector('#max').value);
    
    let result = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;

    document.querySelector('#result > span').textContent = result;
}