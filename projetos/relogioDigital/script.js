/*================ storing constants ================*/
const HOURS_EL = document.querySelector('#hours');
const MINUTES_El = document.querySelector('#minutes');
const SECOND_EL = document.querySelector('#seconds');

const CLOCK = setInterval(function time(){
    let dateToday = new Date(); //new Date()retorna um objeto de data com a data e hora atuais.
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0'+ sec;

    HOURS_EL.innerHTML = hr;
    MINUTES_El.innerHTML = min;
    SECOND_EL.innerHTML = sec;
});