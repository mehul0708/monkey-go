
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime
var inground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log (ground.x);
  
  inground=createSprite(100,400,600,90)
  
  inground.visible= false
  obstaclesGroup=new Group()
 
  bananaGroup=new Group()
}


function draw() {
  background(220)
  
 if(ground.x<0){
   ground.x=100
   
 } 
  
  if (keyDown("space")&&monkey.y>=300){
    
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(inground)
  spawnbanana()
  spawnObstacles()
  drawSprites()
   stroke("white")
textSize(20)
  fill("white")
  text("SCORE:"+score,500,500)
       
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivaltime,100,50)
}
 
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,325,10,40);
   obstacle.velocityX = -6
   
   obstacle.addImage( obstaceImage)
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

function spawnbanana(){
 if (frameCount % 80 === 0){
   var banana = createSprite(600,225,10,40);
   banana.velocityX = -6
   banana.y=Math.round(random(120,255))
   banana.addImage( bananaImage)
   
    banana.scale = 0.1;
    banana.lifetime = 300;
   
    bananaGroup.add(banana);
 }
}