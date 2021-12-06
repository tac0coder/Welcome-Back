function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var images = {0:'/IMG_1.jpeg',1:'/IMG_2.gif',2:'/IMG_3.gif',3:'/IMG_4.gif',4:'/IMG_5.gif',5:'/IMG_6.gif'}

document.body.innerHTML += '<img src=https://raw.githubusercontent.com/tac0coder/Welcome-Back/main/images'+images[getRandomInt(6)]+'></img>'


function myToggleConfetti(){
  toggleConfetti()
  document.getElementsByTagName('canvas')[0].style = "position:absolute; left: 0; top: 0; z-index: -1;"
}