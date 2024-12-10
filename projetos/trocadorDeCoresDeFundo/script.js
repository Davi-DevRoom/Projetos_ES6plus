/* storing the button tags by the class */
const btnContainer1 = document.querySelector('.generate');
const btnContainer2 = document.querySelector('.generate-2');

/* storing the Array that will be used in the randomColor() function */
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/* click event that will trigger the buttons function */
btnContainer1.addEventListener('click', mudarBackground);
btnContainer2.addEventListener('click', randomBackground);

/* function to change the color of container 1 */
function mudarBackground(){
    const resultado = document.querySelector('.result > span');
    const corEscolhida = document.querySelector('#var-color').value;
    const div = document.querySelector('.container__inputcolor');

    div.style.backgroundColor = corEscolhida;
    resultado.textContent = corEscolhida;
}

/* função de mudar a cor do container 2 */
function randomBackground(){
    const resultado = document.querySelector('.result-2 > span')
    const div = document.querySelector('.container__randomcolor');

    let hexColor = '#';
    for(let i = 0; i < 6 ; i++){
        hexColor += hex[randomColor()];
    }

    div.style.backgroundColor = hexColor;
    resultado.textContent = hexColor;
}

/* function to change the color of container 2 */
function randomColor(){
    return Math.floor(Math.random() * hex.length);
}