const botao = document.querySelector('#btn');

botao.addEventListener('click', () =>{
    let conteudo = document.querySelector('.content');
    conteudo.classList.toggle('active');

    if (conteudo.classList.contains('active')){
        return botao.textContent = 'Ler menos';
    }

    return botao.textContent = 'Ler mais';
});