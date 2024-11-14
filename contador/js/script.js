// Primeiro passo é declarar as constantes, puxando elas do dom
// através do querySelector 
const result = document.querySelector('.num');
const menos = document.querySelector('.menos');
const mais = document.querySelector('.mais');
// declare uma variavel que ira receber alterações
let count = 0;
// Crie um evento que ira executar uma função quando uma ação for executada
mais.addEventListener('click', ()=> {
    count += 1;
    result.innerText = count;
})

menos.addEventListener('click', () => {
    count -= 1;
    result.innerText = count;
})