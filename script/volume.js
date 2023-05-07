

export default function Controls({volumeRange, forest, town, rain, soundFire}) {

    function controlVolume() {
        for (let i = 0; i < volumeRange.length; i++) {
            volumeRange[i].addEventListener("input", (event) => {
               stopPropagationClick()
                forest.volume = event.currentTarget.value / 100;
                town.volume = event.currentTarget.value / 100;
                rain.volume = event.currentTarget.value / 100;
                soundFire.volume = event.currentTarget.value / 100;
            });
        }
    }
 
   
   function stopPropagationClick() {
      volumeRange.forEach(element => {
       element.addEventListener("click", (event) => event.stopPropagation());
       })
   }

   return {
    controlVolume,
    stopPropagationClick

   }

}