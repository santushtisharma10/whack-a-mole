const startBtn = document.querySelector(".play")
const stopBtn = document.querySelector(".stop")
const hole = document.querySelector(".holes")
const cursor = document.querySelector(".hammer-cursor img")
const score = document.querySelector(".score")

console.log(startBtn, hole)
let prev = -1

window.addEventListener("mousemove", (e) => {

    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"

})
window.addEventListener("click", () => {

    cursor.style.animation = "hit 0.2s ease"

    setTimeout(() => cursor.style.removeProperty("animation"), 1000)
})
let num = 0
startBtn.addEventListener("click", () => {

    startBtn.style.display = "none"
    stopBtn.style.display = "inline-block"
    
    const startGame = setInterval(() => {

        const index = Math.floor(Math.random() * 9)

        if (prev != index) {

            const image = document.createElement("img")
            image.src = "images/mole.png"
            image.setAttribute("class", "mole")

            hole.children[index].appendChild(image)
            setTimeout(() => {

                hole.children[index].removeChild(image)
            }, 800)
        }
        prev = index;
        console.log(hole.children[index])

    }, 1000)

    stopBtn.addEventListener("click",  ()=> {

        startBtn.style.display = "inline-block"
        stopBtn.style.display = "none"
        clearInterval(startGame)
    })

    // store index using random function


})
