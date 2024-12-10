// Primeiro passo é declarar a constante, puxando elas do dom
// através do querySelector 
const botao = document.querySelector('#btn');

// Crie um evento que ira executar uma função quando uma ação for executada
botao.addEventListener('click', () =>{
    let conteudo = document.querySelector('.content');
    conteudo.classList.toggle('active');
    
    //Verifica se a class content contem active ativo, se sim ira mudar o texto
    if (conteudo.classList.contains('active')){
        return botao.textContent = 'Ler menos';
    }

    return botao.textContent = 'Ler mais';
});