const startBtn = document.querySelector(".play")
const stopBtn = document.querySelector(".stop")
const hole = document.querySelector(".holes")
const cursor = document.querySelector(".hammer-cursor img")

console.log(startBtn, hole)
let prev = -1

window.addEventListener("mousemove", (e)=>{

    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"

   
    
})
window.addEventListener("click", ()=> {

    cursor.style.animation = "hit 0.2s ease"

    setTimeout( () => cursor.style.removeProperty("animation"), 1000)
})

startBtn.addEventListener("click", () =>{ setInterval(()=>{

    const index = Math.floor(Math.random()*9)
    
    // store index using random function
    if(prev != index) {

        const image = document.createElement("img")
    image.src = "images/mole.png"
    image.setAttribute("class", "mole")
    
    hole.children[index].appendChild(image)
    setTimeout(()=> {

        hole.children[index].removeChild(image)
    }, 800)
    }
    prev = index;
    console.log(hole.children[index])
    
}, 1000)})
