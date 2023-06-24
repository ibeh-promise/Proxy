let bubbleNum1 = document.getElementById("bubble-num1");
let bubbleNum2 = document.getElementById("bubbleNum2");
let bubbleNum3 = document.getElementById("bubble-num3");
let bubbleNum4 = document.getElementById("bubble-num4");
let bubbleNum5 = document.getElementById("bubble-num5");
let canvasEl = document.getElementById("canvas-el");
let commentEl = document.getElementById("comment-el");
let recordEl = document.getElementById("record-el");
let gameOverScreenEl = document.getElementById("game-over-screen-el");
let maxEl = document.getElementById("max-el");
let hrEl = document.getElementById("hr-el");
let minEl = document.getElementById("min-el");
let scoreEl = document.getElementById("score-el");
let main = document.querySelector(".main")
let home = document.getElementById('home')
let wrapper = document.querySelector(".wrapper")
let title = document.querySelector(".title")
const bubbleBtn = document.getElementById("bubble-btn");
const bubbleBtn2 = document.getElementById("bubble-btn2");
const bubbleBtn3 = document.getElementById("bubble-btn3");
const bubbleBtn4 = document.getElementById("bubble-btn4");
const bubbleBtn5 = document.getElementById("bubble-btn5");
const retryBtn = document.getElementById("retry-btn");
const nextBtn = document.getElementById("next-btn")
const mainMenu = document.getElementById("main-btn")
let isPopped = false

    let audio = new Audio("sound.mp3")
    audio.loop = true;

nextBtn.addEventListener("click", function(){
    console.log('yah')
    audio.play()
    home.style.display = "none"
    wrapper.style.display = "block"
    title.style.display = "flex"
})

bubbleNum1 = randomNum()
bubbleNum2 = randomNum()
bubbleNum3 = randomNum()
bubbleNum4 = randomNum()
bubbleNum5 = randomNum()
     
let gradientColor = ["pink, green", "purple, blue", "green, red", "pink, purple", "red, blue", "green, purple", "blue, pink", "darkslategray, grey"]

let motivations = ["Awesome!", "Very nice", "You gat speed!", "brillant", "good", "You are the Fastest!", "Very good", "I love that!"]
let timer = 0
let number = 0
let min = 0
let hr = 0
let max = 0

 setInterval(function(){
      if (number === 99) {
          number = 1
          min += 1
          minEl.textContent = min
      }else if (min === 99) {
          min = 1
          hr += 1
          hrEl.textContent = hr
      }else if (hr === 99) {
          hr = 1 
          max += 1
          maxEl.textContent = max
      }
    number += 1
    scoreEl.textContent = number

  },1)

//recordEl.innerText = maxEl + hrEl + minEl

 
bubbleBtn.textContent = bubbleNum1
bubbleBtn2.textContent = bubbleNum2
bubbleBtn3.textContent = bubbleNum3
bubbleBtn4.textContent = bubbleNum4
bubbleBtn5.textContent = bubbleNum5

function randomNum() {
  let random =  Math.floor(Math.random()*8 )
  if (random <= 1) {
      random = 1
  }
  return random
}

function music(){
   let audio = new Audio("mixkit-game-ball-tap-2073.wav")
     audio.play()
}
  
    //the first btn
bubbleBtn.addEventListener("click", function (){
   if (bubbleNum1 <= 1 ) {
        bubbleBtn.style.animationName = "none"
        bubbleBtn.style.display = "none"
           color = Math.floor(Math.random()*gradientColor.length + 1)
           text = Math.floor(Math.random()*motivations.length + 1)
           music()
        timer += 1
        console.log(timer)
        isPopped = true
    requestAnimationFrame(() =>{
        bubbleBtn.style.animationName = ""
        bubbleBtn.style.display = "block"
        bubbleBtn.style.background = `linear-gradient(${gradientColor[color]})`
        commentEl.textContent = motivations[text]
  })
  
  bubbleNum1 = randomNum()
  bubbleBtn.textContent = bubbleNum1
 
   }else{
    bubbleNum1 -= 1
    bubbleBtn.textContent = bubbleNum1
    console.log("bubble popped")
    }
})

    //the secound btn
bubbleBtn2.addEventListener("click", function (){
   if ( bubbleNum2 <=1 ) {
        bubbleBtn2.style.animationName = "none"
        bubbleBtn2.style.display = "none"
           color = Math.floor(Math.random()*gradientColor.length + 1)
           text = Math.floor(Math.random()*motivations.length + 1)
        music()
        isPopped = true
      timer += 1
        console.log(timer)
      requestAnimationFrame(() =>{
          bubbleBtn2.style.animationName = ""
          bubbleBtn2.style.animationDelay = "0s"
         bubbleBtn2.style.display = "block"
         bubbleBtn2.style.background = `linear-gradient(${gradientColor[color]})`
          commentEl.textContent = motivations[text]
      })
        bubbleNum2 = randomNum()
        bubbleBtn2.textContent = bubbleNum2
   }else{
    bubbleNum2 -= 1
    bubbleBtn2.textContent = bubbleNum2
    console.log("bubble popped!")
    }
})

    //the third btn
bubbleBtn3.addEventListener("click", function (){
   if ( bubbleNum3 <= 1 ) {
        bubbleBtn3.style.animationName = "none"
        bubbleBtn3.style.animationDelay = "0s"
       bubbleBtn3.style.display = "none"
        isPopped = true
           color = Math.floor(Math.random()*gradientColor.length + 1)
        text = Math.floor(Math.random()*motivations.length + 1)
          music()
        timer += 1
        console.log(timer)
        requestAnimationFrame(() =>{
           bubbleBtn3.style.animationName =""
           bubbleBtn3.style.display = "block"
           bubbleBtn3.style.background = `linear-gradient(${gradientColor[color]})`
            commentEl.textContent = motivations[text]
        })
        bubbleNum3 = randomNum()
         bubbleBtn3.textContent = bubbleNum3
   }else{
    bubbleNum3 -= 1
    bubbleBtn3.textContent = bubbleNum3
    console.log("bubble popped!")
    }
})

    //the forth btn
bubbleBtn4.addEventListener("click", function (){
   if (bubbleNum4 <= 1) {
        bubbleBtn4.style.animationName = "none"
        bubbleBtn4.style.animationDelay = "0s"
       bubbleBtn4.style.display = "none"
           color = Math.floor(Math.random()*gradientColor.length + 1)
        text = Math.floor(Math.random()*motivations.length + 1)
          music()
       isPopped = true
       timer += 1
        console.log(timer)
       requestAnimationFrame(() => {
           bubbleBtn4.style.animationName =""
          bubbleBtn4.style.display = "block"
          bubbleBtn4.style.background = `linear-gradient(${gradientColor[color]})`
           commentEl.textContent = motivations[text]
       })
        bubbleNum4 = randomNum()
        bubbleBtn4.textContent = bubbleNum4
   }else{
    bubbleNum4 -= 1
    bubbleBtn4.textContent = bubbleNum4
    console.log("bubble popped!")
    }
})
    //the fifth btn
bubbleBtn5.addEventListener("click", function (){
   if ( bubbleNum5 <= 1) {
        bubbleBtn5.style.animationName = "none"
        bubbleBtn5.style.animationDelay = "0s"
        bubbleBtn5.style.display = "none"
           color = Math.floor(Math.random()*gradientColor.length + 1)
           text = Math.floor(Math.random()*motivations.length + 1)
             music()
        isPopped = true
        timer += 1
        console.log(timer)
        requestAnimationFrame(() =>{
            bubbleBtn5.style.animationName =""
            bubbleBtn5.style.display = "block"
            bubbleBtn5.style.background = `linear-gradient(${gradientColor[color]})`
             commentEl.textContent = motivations[text]
        })
        bubbleNum5 = randomNum()
        bubbleBtn5.textContent = bubbleNum5
   }else{
    bubbleNum5 -= 1
    bubbleBtn5.textContent = bubbleNum5
    console.log("bubble popped!")
    }
})

    let song = new Audio()
    song.src = "./game-over.mp3"
     
let game = bubbleBtn.addEventListener("animationend", () => {
    gameOverScreenEl.style.display = "block"
    numberEl = 0
    minEl = 0
    hrEl = 0
    maxEl = 0
   numberEl.textContent = numberEl
   minEl.textContent = minEl
   hrEl.textContent = hrEl
   maxEl.textContent = maxEl
     audio.pause()
     audio.currentTime = 0
    clearInterval()
        recordEl.innerText = timer
    song.play()
        bubbleBtn2.style.animationName = "none"
        bubbleBtn3.style.animationName = "none"
        bubbleBtn4.style.animationName = "none"
        bubbleBtn5.style.animationName = "none"
})

let game2 = bubbleBtn2.addEventListener("animationend", () => {
    gameOverScreenEl.style.display = "block"
    numberEl = 0
    minEl = 0
    hrEl = 0
    maxEl = 0
   numberEl.textContent = numberEl
   minEl.textContent = minEl
   hrEl.textContent = hrEl
   maxEl.textContent = maxEl
    audio.pause()
    audio.currentTime = 0
    clearInterval()
        recordEl.innerText =timer
       song.play()
    animationName = ""
        bubbleBtn.style.animationName = "none"
        bubbleBtn3.style.animationName = "none"
        bubbleBtn4.style.animationName = "none"
        bubbleBtn5.style.animationName = "none"
})

let game3 = bubbleBtn3.addEventListener("animationend", () => {
    gameOverScreenEl.style.display = "block"
    numberEl = 0
    minEl = 0
    hrEl = 0
    maxEl = 0
   number.textContent = numberEl
   min.textContent = minEl
   hr.textContent = hrEl
   max.textContent = maxEl
    audio.pause()
    audio.currentTime = 0
    clearInterval()
        recordEl.innerText = timer
    song.play()
animationName = ""
        bubbleBtn.style.animationName = "none"
        bubbleBtn2.style.animationName = "none"
        bubbleBtn4.style.animationName = "none"
        bubbleBtn5.style.animationName = "none"
})
let game4 = bubbleBtn4.addEventListener("animationend", () => {
    gameOverScreenEl.style.display = "block"
    numberEl = 0
    minEl = 0
    hrEl = 0
    maxEl = 0
   numberEl.textContent = numberEl
   minEl.textContent = minEl
   hrEl.textContent = hrEl
   maxEl.textContent = maxEl
    audio.pause()
    audio.currentTime = 0
    clearInterval()
        recordEl.innerText = timer
      song.play()
        animationName = ""
        bubbleBtn.style.animationName = "none"
        bubbleBtn2.style.animationName = "none"
        bubbleBtn3.style.animationName = "none"
        bubbleBtn5.style.animationName = "none"
})

let game5 = bubbleBtn5.addEventListener("animationend", () => {
    gameOverScreenEl.style.display = "block"
     let number = 0
    let min = 0
    let hr = 0
    let max = 0
    numberEl = 0
    minEl = 0
    hrEl = 0
    maxEl = 0
   numberEl.textContent = numberEl
   minEl.textContent = minEl
   hrEl.textContent = hrEl
   maxEl.textContent = maxEl
    clearInterval()
    audio.pause()
    audio.currentTime = 0
        recordEl.innerText = timer
        song.play()
       bubbleBtn.style.animationName = ""
        bubbleBtn.style.animationName = "none"
        bubbleBtn2.style.animationName = "none"
        bubbleBtn3.style.animationName = "none"
        bubbleBtn4.style.animationName = "none"
})
 function mainBtn(){
   gameOverScreenEl.style.display = "none"
    home.style.display = "block"
    wrapper.style.display = "none"
    title.style.display = "none"
    audio.currentTime = 0
       requestAnimationFrame(() => { 
    bubbleBtn.style.animationName = ""
    bubbleBtn2.style.animationName = ""
    bubbleBtn3.style.animationName = ""
    bubbleBtn4.style.animationName = ""
    bubbleBtn5.style.animationName = ""
})
}

retryBtn.addEventListener("click", function(){
    gameOverScreenEl.style.display = "none"
    home.style.display = "none"
    wrapper.style.display = "block"
    title.style.display = "flex"
    let number = 0
    let min = 0
    let hr = 0
    let max = 0
    audio.play()
   numberEl.textContent = number
   minEl.textContent = min
   hrEl.textContent = hr
   maxEl.textContent = max

       requestAnimationFrame(() => { 
    bubbleBtn.style.animationName = ""
    bubbleBtn2.style.animationName = ""
    bubbleBtn3.style.animationName = ""
    bubbleBtn4.style.animationName = ""
    bubbleBtn5.style.animationName = ""
})
    bubbleBtn.style.animationName = "inline-block"
    bubbleBtn2.style.animationName = "inline-block"
    bubbleBtn3.style.animationName = "inline-block"
    bubbleBtn4.style.animationName = "inline-block"
    bubbleBtn5.style.animationName = "inline-block"
    console.log("retry");
})