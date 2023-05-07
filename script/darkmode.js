export default function darkMode({darkmode, lightmode, svg, btnRainy, btnCity, rangeInput}) {
    function lightSVGColor() {
        darkmode.classList.remove("hide")
        lightmode.classList.add("hide")
        document.body.classList.add("darkmode")

        svg.forEach(element => {
            element.style.fill = 'var(--bg-card)'
        })
        btnRainy.forEach(element => {
            element.classList.add("black")
        })
        btnCity.forEach(element => {
            element.classList.add("black")
        })
        rangeInput.forEach(element => {
            element.style.background = 'var(--bg-card)'
            element.style.accentColor = 'var(--bg-card)'
        })

      }

      function darkSVGColor() {
        darkmode.classList.add("hide")
        lightmode.classList.remove("hide")
        document.body.classList.remove("darkmode")
        
        svg.forEach(element => {
            element.style.fill = 'var(--text-color)'
        })
        btnRainy.forEach(element => {
            element.classList.remove("black")
        })
        btnCity.forEach(element => {
            element.classList.remove("black")
        })
       
        rangeInput.forEach(element => {
            element.style.background = 'var(--btn-dark)'
            element.style.accentColor = 'var(--btn-dark)'
        })
      
    
    }





      return {
        lightSVGColor,
        darkSVGColor

      }
}