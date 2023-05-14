export default function Sound({ soundForest, soundRain, soundTown, soundTownFire}) {
 
    const forest = new Audio("../assets/Floresta.wav")
    const town = new Audio("../assets/Cafeteria.wav")
    const rain = new Audio("../assets/Chuva.wav")
    const soundFire = new Audio("../assets/Lareira.wav")
    const timeEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    forest.loop = true
    town.loop = true
    rain.loop = true
    soundFire.loop = true
  
    function playForest() {
        soundForest.classList.add("soundSelected")
        soundRain.classList.remove("soundSelected")
        soundTown.classList.remove("soundSelected")
        soundTownFire.classList.remove("soundSelected")

    if (soundForest.classList.contains("soundSelected")){
       forest.play()
       town.pause()
       rain.pause()
       soundFire.pause()
    } else {
        town.pause()
        forest.pause()
        rain.pause()
        soundFire.pause()
        soundForest.classList.remove("soundSelected")
    }
        
    }
    function playTown() {

        soundTown.classList.add("soundSelected")
        soundForest.classList.remove("soundSelected")
        soundRain.classList.remove("soundSelected")
        soundTownFire.classList.remove("soundSelected")
    
    
        if (soundTown.classList.contains("soundSelected")){
            forest.pause()
            town.play()
            rain.pause()
            soundFire.pause()
           
        } else {
            town.pause()
            forest.pause()
            rain.pause()
            soundFire.pause()
            soundTown.classList.remove("soundSelected")
        }
    }
    function playRain() {
        soundRain.classList.add("soundSelected")
        soundForest.classList.remove("soundSelected")
        soundTown.classList.remove("soundSelected")
        soundTownFire.classList.remove("soundSelected")
  

    if (soundRain.classList.contains("soundSelected")){
        forest.pause()
        town.pause()
        rain.play()
        soundFire.pause()
    } else {
        town.pause()
        forest.pause()
        rain.pause()
        soundFire.pause()
     soundRain.classList.remove("soundSelected")
    }
        
    }
    function playFire() {
        soundTown.classList.remove("soundSelected")
        soundForest.classList.remove("soundSelected")
        soundRain.classList.remove("soundSelected")
        soundTownFire.classList.add("soundSelected")
      

        if (soundTownFire.classList.contains("soundSelected")){
            forest.pause()
            town.pause()
            rain.pause()
            soundFire.play()
          
        } else {
            town.pause()
            forest.pause()
            rain.pause()
            soundFire.pause()
         soundTownFire.classList.remove("soundSelected")
        }
        
    }

    
    function endTimer(){
        timeEnd.play()
        town.pause()
        forest.pause()
        rain.pause()
        soundFire.pause()
    }

  

    return {
        playForest,
        playTown,
        playRain,
        playFire,
        forest,
        town,
        rain, 
        soundFire, 
        endTimer
    }

}
