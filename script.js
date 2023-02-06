function horario() {
    let date = new Date()
    let time = date.toLocaleTimeString()
    let horas = date.getHours()
    let cumprimento = ''
    let imgCiclo = document.createElement('img')
    const bgPlay = document.querySelector('#playMsc')
    const bgPause = document.querySelector('#pauseMsc')

    if (horas > 6 && horas < 12) {
        cumprimento = 'Bom dia !!'
        imgCiclo.src = 'imgs/manha.png'
        document.body.style.backgroundImage = "url('imgs/bManha.svg')"
        document.querySelector('#bgMain').style.backgroundColor = '#ffe095'
        document.querySelector('#boxInformation').style.backgroundColor = '#ffffff'
        document.querySelector('#boxInformation').style.color = '#ffe095'
        document.querySelector('#playMsc').style.backgroundColor = '#ffe095'
        document.querySelector('#pauseMsc').style.backgroundColor = '#ffe095'
    } else if (horas > 12 && horas < 18) {
        cumprimento = 'Boa tarde !!'
        imgCiclo.src = 'imgs/tarde.png'
        document.body.style.backgroundImage = "url('imgs/bTarde.svg')"
        
    } else {
        cumprimento = 'Boa noite !!'
        imgCiclo.src = 'imgs/noite.png'
        document.body.style.backgroundImage = "url('imgs/bNoite.svg')"
        document.querySelector('#bgMain').style.backgroundColor = '#485e86'
        document.querySelector('#boxInformation').style.backgroundColor = '#1d314a'
        document.querySelector('#playMsc').style.backgroundColor = '#1d314a'
        document.querySelector('#pauseMsc').style.backgroundColor = '#1d314a'
    }

    document.querySelector('#hour').innerHTML = time
    document.querySelector('#greeting').innerHTML = cumprimento
    document.querySelector('#imgCycle').innerHTML = '';
    document.querySelector('#imgCycle').appendChild(imgCiclo)
}

setInterval(horario, 1000)

const playMusic = document.querySelector('#playMsc')
const pauseMusic = document.querySelector('#pauseMsc')
const music = document.querySelector('#myAudio')

playMusic.addEventListener('click', function () {
    music.play()
})

pauseMusic.addEventListener('click', function () {
    music.pause()
})

let audio = document.getElementById("myAudio")
audio.volume = 0.1