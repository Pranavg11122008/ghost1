  var Door,climber,tower,ghostjumping,ghoststanding;
  var Door_,climber_,tower_,Ghost,spooky_sound;
  var doorg,climberg,Blockg;
  var GameState="play"

function preload(){
  Door_=loadImage("door.png");
  climber_=loadImage("climber.png");
  tower_=loadImage("tower.png");
  ghostjumping=loadImage("ghost-jumping.png");
  ghoststanding=loadImage("ghost-standing.png");
  spooky_sound=loadSound("spooky.wav");
}
function setup(){
  createCanvas(600,600);
  
  
  tower=createSprite(300,300);
  tower.addImage(tower_)
  tower.velocityY=1
  
  Ghost=createSprite(300,300);
  Ghost.addImage(ghostjumping);
  Ghost.scale=0.5;
  
  doorg=new Group();
  climberg=new Group();
  Blockg=new Group();
}
function draw(){
  background(0)
  
  if(GameState==="play"){
        if(tower.y>500){
      tower.y=300;
    }
    Ghost.x=mouseX;
    if(keyDown("space")){
      Ghost.velocityY=-10
    }
    Ghost.velocityY=Ghost.velocityY+0.8
    
    if(climberg.isTouching(Ghost)){
      Ghost.velocityY=0       
    }
    if(Blockg.isTouching(Ghost)||Ghost.y>600){
      GameState="end";
    }
    SpawnWindow()
    drawSprites()
  }
   if(GameState==="end"){
     textSize(100);
     fill("Red");
     strokeWeight(10);
     text("Game Over",0,300)
   }
  
}
function SpawnWindow(){
  if(frameCount%200===0){
    Door=createSprite(150,50);
    Door.addImage(Door_)

    climber=createSprite(150,100)
    climber.addImage(climber_)
    
    Block=createSprite(150,110,climber.with,5)
    Block.debug=true;
    //Block.visible=false
    
    Door.velocityY=1;
    climber.velocityY=1;
    Block.velocityY=1;
    
    Door.x=Math.round(random(150,450))
    climber.x=Door.x;
    Block.x=Door.x;
    
    Door.lifetime=600;
    climber.lifetime=600;
    Block.lifetime=600;
    
    Ghost.depth=Door.depth+1;
    climber.depth=Door.depth;
    Block.depth=Door.depth;
    
    doorg.add(Door);
    climberg.add(climber);
    Blockg.add(Block);
  }
}