const startBtn = document.querySelector(".play")
const stopBtn = document.querySelector(".stop")
const hole = document.querySelector(".holes")
const score;
const cur;

console.log(startBtn, hole)

stopBtn.addEventListener("click", ()=> {

    
})

startBtn.addEventListener("click", setInterval(()=>{


    const arr = [0,1,2, 3, 4, 5, 6, 7, 8]
    const index = 4// store index using random function
    console.log(hole.children[index])

    const image = document.createElement("img")
    image.src = "images/mole.png"
    image.setAttribute("class", "mole")
    
    hole.children[index].appendChild(image)
    setTimeout(()=> {

        hole.children[index].removeChild(image)
    }, 900)
    
}, 1000))
