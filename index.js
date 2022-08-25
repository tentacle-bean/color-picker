document.getElementById("color-form").addEventListener("submit", event => {
    event.preventDefault()
    
    const hex = document.getElementById("color-form-picker")
    const mode = document.getElementById("color-form-type")
    
    getScheme(hex.value.slice(1, hex.value.length), mode.value)
})


function getScheme(hex, mode){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            render(data.colors.map(color => color.hex.value))
        })
}


function render(colors){
    const panels = Array.from(document.getElementById(`color-panels`).children)
    const values = Array.from(document.getElementById(`color-values`).children)
    
    for (let i = 0; i < panels.length; i++){
        panels[i].style.backgroundColor = colors[i]
        values[i].textContent = colors[i]
    }
}