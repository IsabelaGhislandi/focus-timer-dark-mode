import Sound from './sounds.js'
import Timer from './timer.js'
import darkMode from './darkmode.js'
import Controls from './volume.js'

const lightmode = document.querySelector(".light")
const darkmode = document.querySelector(".dark")
const svg = document.querySelectorAll("path")
const btnRainy = document.querySelectorAll(".day-rainy > div")
const btnCity = document.querySelectorAll(".city > div")
const rangeInput = document.querySelectorAll("input")
const volumeRange = document.querySelectorAll(".range")

const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const plus = document.querySelector(".plus")
const less = document.querySelector(".less")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const soundForest = document.querySelector(".forest")
const soundRain = document.querySelector(".rain")
const soundTown = document.querySelector(".town")
const soundTownFire = document.querySelector(".town-fire")

const sound = Sound({ soundForest, soundRain, soundTown, soundTownFire})
const timer = Timer({ minutesDisplay, secondsDisplay, forest: sound.forest, town: sound.town, rain: sound.rain, soundFire: sound.soundFire, endTimer: sound.endTimer })
const dark = darkMode({darkmode, lightmode, svg, btnRainy, btnCity, rangeInput})
const controls = Controls({volumeRange, forest: sound.forest, town: sound.town, rain: sound.rain, soundFire: sound.soundFire})

//DARK MODE
lightmode.addEventListener("click", function() {
    
    dark.lightSVGColor()
})

darkmode.addEventListener("click", function() {
    
    dark.darkSVGColor()
})

//TIMER
play.addEventListener("click", function() {
    timer.countdown()

    if (soundForest.classList.contains("soundSelected")){
        sound.forest.play()
    }
    if (soundRain.classList.contains("soundSelected")){
        sound.rain.play()
    }
    if (soundTown.classList.contains("soundSelected")){
        sound.town.play()
    } 
    if (soundTownFire.classList.contains("soundSelected")){
        sound.soundFire.play()
    }

})

plus.addEventListener("click", function() {
    timer.addTime()
  })

less.addEventListener("click", function() {
    timer.subTime()
  })

pause.addEventListener("click", function() {
    timer.hold()
})


// SOUND CONTROLS
soundForest.addEventListener('click', function() {
    sound.playForest()
})

soundRain.addEventListener('click', function() {
    sound.playRain()
})

soundTown.addEventListener('click', function() {
    sound.playTown()
})

soundTownFire.addEventListener('click', function() {
    sound.playFire()
})


//VOLUME
controls.controlVolume()
controls.stopPropagationClick()

