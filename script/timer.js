export default function Timer({ minutesDisplay, secondsDisplay, forest, town, rain, soundFire, endTimer }) {

    let timeTimerOut

    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    function countdown() {

        timeTimerOut = setTimeout(function () {
    
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            
            clearTimeout(timeTimerOut)
            updateDisplay(minutes, 0)
    
        if (minutes <= 0 && seconds <= 0) {
            updateDisplay()
            endTimer()
            return;
          }
    
          if (seconds <= 0) {
            seconds = 60
            --minutes
          } 
    
          updateDisplay(minutes, String(seconds - 1))
      
          countdown()
    
        }, 1000)
    }
    
    
    
    
    function updateDisplay(newMinutes , seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
      }

      function addTime() {
        minutes = minutes + 5
        updateDisplay(minutes, seconds )
      }

      function subTime() {

        if(minutes <= 5) {
            minutes = 0
            updateDisplay(minutes, seconds )
          } else {
            minutes = minutes - 5
            updateDisplay(minutes, seconds )
          }
      }

      function hold() {
        clearTimeout(timeTimerOut)
        forest.pause()
        town.pause()
        rain.pause()
        soundFire.pause()
        
    }

      return {
        countdown,
        updateDisplay,
        addTime,
        subTime, 
        hold

      }



}