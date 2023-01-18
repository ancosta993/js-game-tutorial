const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//image
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];
const animationStates = [
   {
      name:'idle',
      frames: 7
   }, 
   {
      name:'jump',
      frames: 7
   }, 
   
]

// list of frame locations in the shadow_dogs picture
animationStates.forEach((state, index) => {
   let frames = {
      loc:[]
   }
   for (let j = 0; j < state.frames; j++) {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.loc.push({x: positionX, y: positionY})
   }

   spriteAnimations[state.name] = frames;
})

//animation loop (critically important)
function animate(){
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations['idle'].loc.length;
   let frameX = spriteWidth * position;
   ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight ,0 ,0 ,spriteWidth, spriteHeight)
   
   gameFrame++
   requestAnimationFrame(animate)
}

animate();