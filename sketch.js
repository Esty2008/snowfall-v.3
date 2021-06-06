const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var Bg
var Snow=[];
var shiva;
var shivaImg;
var snowImg;
var snowman;
var snowmanImg;
var boy;
var boyImg;
var snowBall;
var snowBallImg;
var myEngine;
var myWorld;
var backgroundImg;

function preload() {
  backgroundImg = loadImage('snow1.jpg')
  shivaImg = loadImage('shiva.png')
  snowmanImg = loadImage('snowman.png')
  boyImg = loadImage('boy.png')
  snowBallImg = loadImage('snowball.png');
}

  function setup() {
    createCanvas(1800,800);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    Engine.run(myEngine)

    shiva = createSprite(500,670,50,50);
  boy =  createSprite(800,670,50,50);
  snowman =  createSprite(1300,700,50,50);
  snowBall = createSprite(0,0,20,20)

  shiva.addImage('shiva',shivaImg);
  boy.addImage('boy',boyImg);
  snowman.addImage('snowman',snowmanImg);
  snowBall.addImage('snowball',snowBallImg)

  shiva.scale = 0.5
  boy.scale = 0.5
  snowBall.scale = 0.3

  }  

  function draw() {
    background(backgroundImg);

    Engine.update(myEngine)  

    drawSprites();

    if (frameCount%20===0){
      Snow.push(new snow(random(200,1600),0,100))
    }

    for (var s=0;s<Snow.length;s++){
      Snow[s].display()
       }

       if(keyWentDown('LEFT_ARROW')){
         shiva.velocityX = -3;
       }

       if(keyWentDown('RIGHT_ARROW')){
        shiva.velocityX = 3;
      }

      if(keyWentDown('UP_ARROW')){
        snowBall.velocityX = 7;
      }

      snowBall.x = shiva.x;
      snowBall.y = shiva.y;
      snowBall.depth = shiva.depth -1 

      if(snowBall.isTouching(boy)){
        snowBall.destroy();
      }

  }