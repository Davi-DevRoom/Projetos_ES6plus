const Hour = document.querySelector('.hour-hand');
const Minute = document.querySelector('.minute-hand');
const Sec = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date();

    return{
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval(() => {
    const { seconds, minutes, hours } = getTime();
    Sec.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    Minute.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    Hour.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;

}, 1000);

const ModDig = document.querySelector('#digitalmode');
const AnaMod = document.querySelector('#analogmode');
const DigWatch = document.querySelector('.hidden');
const Anaclock = document.querySelector('.hidden2');



