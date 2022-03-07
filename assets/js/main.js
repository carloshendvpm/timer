let relogio = document.querySelector('.relogio')
let btnIniciar = document.querySelector('.iniciar')
let btnPausar = document.querySelector('.pausar')
let btnZerar = document.querySelector('.zerar')

function getTimeFromSec(seconds) {
    const data = new Date( seconds * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone:'GMT'
    })
}
let segundos = 0;
let timer;

document.addEventListener('click',(e) => {
    const el = e.target;

    if(el.classList.contains('iniciar')){
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = (getTimeFromSec(segundos))
        },1000)
        relogio.classList.remove('pausado')
    }
    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
    if(el.classList.contains('zerar')){
        clearInterval(timer)
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})