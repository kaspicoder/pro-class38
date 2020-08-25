var man, man_running;

var invisibleGround;

var cloudImage;

var obstacle1, obstacle2, obstacle3, obstacles2, obstacles1, obstacles3;

var gameState = 1;

var background1,background2,background3;

var skeleton;

function preload(){
  man_running = loadAnimation("1running-removebg-preview (1).png","2running-removebg-preview (1).png","3running-removebg-preview (1).png","4running-removebg-preview (1).png","5running-removebg-preview (1).png","6running-removebg-preview (1).png");
  
  cloudImage = loadImage("hd cloud.png");
  
  obstacle1 = loadImage("obstaclefireball.png");
  obstacle2 = loadImage("obstaclerock.png");
  obstacle3 = loadImage("obstaclespikes.png");

  img = loadImage("bg running game.png");

  skeletonImg = loadImage("skeleton.png");
  }

function setup() {
  createCanvas(600, 300);

  background1 = createSprite(300,100,600,200);
  background1.addImage("image",img);
  

  background2 = createSprite(-350,100,600,200);
  background2.addImage("image",img);
  
  
  background3 = createSprite(-1000,100,600,200);
  background3.addImage("image",img);
  
  man = createSprite(550,180,20,50);
  man.addAnimation("running", man_running);
  man.scale = 0.8;
  
  invisibleGround = createSprite(300,225,600,10);
  invisibleGround.visible = false;

  var cloud = createSprite(0,30,40,10);
  cloud.addImage(cloudImage);
  cloud.scale = 0.2;
  cloud.velocityX = 0;

  obstacles1 = createSprite(-5,225,10,40);
    
    obstacles1.addImage(obstacle1);
    obstacles1.scale = 0.4

  obstacles2 = createSprite(-400,235,10,40);
    
    obstacles2.addImage(obstacle2);
    obstacles2.scale = 0.5

  obstacles3 = createSprite(-600,225,10,40);
    obstacles3.velocityX = 0;
    obstacles3.addImage(obstacle3);
    obstacles3.scale = 0.4
  
    skeleton = createSprite(200,200,20,20);
    skeleton.addImage(skeletonImg);
    skeleton.scale = 1.2;
    
    skeleton.visible = false;
  
}

function draw() {

  background(0);

  if(gameState === 1){

    obstacles1.velocityX = 5;
    obstacles2.velocityX = 2;

  man.velocityX = -11
  
  if(keyDown("space")&&man.y>180) {
    man.velocityY = -16;
  }
  
  man.velocityY = man.velocityY + 1
  
  man.collide(invisibleGround);
  

  camera.position.x = man.x-200
  invisibleGround.x = man.x

  skeleton.x = man.x;
    skeleton.y = man.y;

   if(man.x<-745){
     man.x = 550
     obstacles2.x = -400;
     obstacles1.x = 0;
   }
   
  }

  if(isTouching(man,obstacles1)||isTouching(man,obstacles2)||isTouching(man,obstacles3)){
    gameState = 0;
    man.velocityX = 0;
    man.velocityY = 0;
    man.visible = false;
    obstacles1.velocityX = 0;
    obstacles2.velocityX = 0;
    
    skeleton.visible = true;
    skeleton.velocityY = -2;

    
    }
    else{
    gameState = 1;
    }
  
  drawSprites();

  if(isTouching(man,obstacles1)||isTouching(man,obstacles2)||isTouching(man,obstacles3)){
    textSize(25);
    textFont("arial");
    text("G A M E   O V E R",man.x-300,50);
  }
  
}