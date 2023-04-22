const darkModeButton = document.querySelector('.check')
const html = document.querySelector('html')

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

console.log('olá')

const ligthModeColor = {
    colorAliceblue: getStyle(html, '--color-aliceblue'),
    colorBorder: getStyle(html, '--color-border'),
    colorLi: getStyle(html, '--color-li'),
    colorWhite: getStyle(html, '--color-white'),

    primaryColor: getStyle(html, '--primary-color'),
    secundaryColor: getStyle(html, '--secundary-color')
}

const darkModeColor = {
    colorAliceblue: "aliceblue",
    colorBorder: "skyblue",
    colorLi: "#b9c9b6",
    colorWhite: "#fff",

    primaryColor: "#171422",
    secundaryColor: "#171426"
}

const darkModeColorTeste = {
    colorAliceblue: "#1b3486",
    colorBorder: "#0000000",
    colorLi: "#23709c",
    colorWhite: "#0f1013",

    primaryColor: "#868585",
    secundaryColor: "#f3f3f3"
}

const trasformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(trasformKey(key), colors[key])
    )
}

darkModeButton.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkModeColor) : changeColors(ligthModeColor)
})