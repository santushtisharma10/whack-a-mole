const startBtn = document.querySelector(".play")
const stopBtn = document.querySelector(".stop")
const hole = document.querySelector(".holes").children

console.log(startBtn, hole)

const startGame = setInterval(()=>{


    const arr = [0,1,2, 3, 4, 5, 6, 7, 8]
    const index = 4// store index using random function
    console.log(hole[index])

    const image = document.createElement("img")
    image.src = "images/mole.png"
    image.setAttribute("class", "mole")
    
    hole[index].appendChild(image)
    setTimeout(()=> {

        hole[index].removeChild(image)
    }, 900)
}, 1000)
startBtn.addEventListener("click", ()=> {

    startBtn.style.display = none;
    stopBtn.style.display = visible;

    startGame
})