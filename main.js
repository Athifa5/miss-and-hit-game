const imgarr = [0, 1, 4];
let flip = document.getElementsByClassName("flip-box-inner");
let flipImg = document.getElementsByClassName("FlipImg");
let flip1 = document.getElementsByClassName("flip-box");

let checker = [];


const  {
  host, hostname, href, origin, pathname, port, protocol, search
} = window.location

console.log(pathname)



function imgLoad(max, min) {

  // number  = Math.floor(Math.random() * 11);
  for (i = 0; i < 4; i++) {

    let number = Math.floor(Math.random() * (max - min)) + min;
    isChecker(number, max, min)

  }

  console.log(imgarr);

  let flipImg = document.getElementsByClassName("FlipImg");
  console.log(flipImg[imgarr[0]].src)
  flipImg[imgarr[0]].src = "Gift image.jpg"
  flipImg[imgarr[1]].src = "Gift image.jpg"
  flipImg[imgarr[2]].src = "Gift image.jpg"
  flipImg[imgarr[3]].src = "Danger.jpg"


  flip1[imgarr[3]].addEventListener("click", () => {
    setTimeout(()=>{
      let potti = alert("You lost the game")
      console.log(potti);
      if(!potti){
        history.back();
      }
    },1000)
      
    
  })

}


function isChecker(number, max, min) {
  if (imgarr.includes(number) && imgarr.includes('') && isNaN(imgarr[0]) && isNaN(imgarr[1]) && isNaN(imgarr[2]) && isNaN(imgarr[3])) {
    let number1 = Math.floor(Math.random() * (max - min)) + min;
    isChecker(number1)
  } else {
    imgarr[i] = number;
    return;
  }
}



function animator(i) {

  let flip = document.getElementsByClassName("flip-box-inner");
  console.log(flip[i])

  flip[i].classList.add("rotater")

  let flipImg = document.getElementsByClassName("FlipImg");

}




let attempts = 0;
let score = 0;

let gameOver = [];


function scorer(s) {

  let YourScore = document.getElementById('YourScore');
  console.log(imgarr)

  if (imgarr.includes(s)) {
    attempts++;
    score = score + 50;
    YourScore.innerText = score;
    gameOver[attempts] = s;
  } else {
    score = score - 5;
    attempts++;
    YourScore.innerText = score;
  }

  console.log(gameOver.join('').split(''))
  console.log(attempts)

  // if (flipImg[s].src == "Danger.jpg") {
    // if(checker[2]==true){
    //       console.log("this is done")
    //     }
  
        console.log(isArrayEqual(2))
        if(isArrayEqual(2)){
          console.log("this is done")
          if(pathname == "/main1.html"){
            setTimeout(()=>{
               alert("you won this level");
              window.location.href = "main2.html";
            },1500)
            
          }
          if(isArrayEqual(2)){
            console.log("this is done")
            if(pathname == "/main2.html"){
              setTimeout(()=>{
                 alert("you won this level");
                window.location.href = "main3.html";
              },1200)
              
            }
          
        }
        if(isArrayEqual(2)){
          console.log("this is done")
          if(pathname == "/main3.html"){
            setTimeout(()=>{
               alert(" congratulaton ! You won all levels");
              
            },1200)
            
          }
        }
}


function isArrayEqual(z) {
  let u = 0;
  // console.log(flipImg[imgarr[j]].src)
  // console.log(flipImg[gameOver[i]].src)
  for(i=0 ; i<gameOver.length;i++){
    for(j=0;j<imgarr.length; j++){

      if(imgarr[i] == gameOver[j] ){
        checker[u++] = true;
        console.log(checker)

       
      }

    }
  }

  return checker[z];
}
}
