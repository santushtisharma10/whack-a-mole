const startBtn = document.querySelector(".play")
const stopBtn = document.querySelector(".stop")
const holes = document.querySelector(".holes").children
const cursor = document.querySelector(".hammer-cursor img")
const score = document.querySelector(".score")
const reset = document.querySelector(".reset")

let hole;
let ans = 0



window.addEventListener("mousemove", (e) => {

    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"

})
window.addEventListener("click", () => {

    cursor.style.animation = "hit 0.2s ease"

    setTimeout(() => cursor.style.removeProperty("animation"), 1000)



})

reset.addEventListener("click", () =>{

    location.reload()
   
} )

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none"
    stopBtn.style.display = "inline-block"

    const startGame = setInterval(() => {

        const index = Math.floor(Math.random() * 9)

        hole = holes[index];

        const image = document.createElement("img")
        image.src = "images/mole.png"
        image.setAttribute("class", "mole")

        hole.appendChild(image)
        setTimeout(() => {

            hole.removeChild(image)
        }, 800)

    }, 1000)

    window.addEventListener("click", (e) => {

        if (e.target == hole) {

            score.innerHTML = ++ans
        }
    })

    stopBtn.addEventListener("click", () => {

        startBtn.style.display = "inline-block"
        stopBtn.style.display = "none"
        clearInterval(startGame)
    })

    // store index using random function


})
