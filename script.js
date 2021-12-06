function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var images = {0:'/IMG_1.jpeg',1:'/IMG_2.gif',2:'/IMG_3.gif',3:'/IMG_4.gif',4:'/IMG_5.gif',5:'/IMG_6.gif'}

document.body.innerHTML += '<img src=https://Welcome-Back.uglyfence.repl.co'+images[getRandomInt(6)]+'></img>'