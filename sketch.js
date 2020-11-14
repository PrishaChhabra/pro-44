
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




var engine, world,rand;
var backgroundImg,blackImg,greenImg,octopusImg,orangeImg,pinkImg,purpleImg,redImg,wormImg;
var tb,tbImg;
var themeS;
var score=0;
var bacteriaCreatedFrame=0;
var score=0;
var bacteriaGroup;


function preload(){
  backgroundImg=loadImage("Bg.jpg")
  clean_bg=loadImage("Clean_tooth.png")
  dirty_bg=loadImage("Decay_bg.png");
  blackImg=loadImage("Bacteria_img/Black.png")
  greenImg=loadImage("Bacteria_img/Green.png")
  octopusImg=loadImage("Bacteria_img/Octopus.png")
  orangeImg=loadImage("Bacteria_img/Orange.png")
  pinkImg=loadImage("Bacteria_img/Pink.png")
  purpleImg=loadImage("Bacteria_img/Purple.png")
  redImg=loadImage("Bacteria_img/Red.png")
  wormImg=loadImage("Bacteria_img/Worm.png")
  tbImg=loadImage("Toothbrush.png")
  themeS=loadSound("sounds/theme_song.mp3")
  popS=loadSound("sounds/pop.wav")

}

function setup(){
  engine = Engine.create();
  world = engine.world;
   createCanvas(800,700)
   tb=createSprite(500,400,60,80);
   
   tb.addImage(tbImg);
   tb.scale=0.2
  
   bacteriaGroup=new Group();
   
   
  
}

function draw(){
  Engine.update(engine)
    background("white")
    image(backgroundImg,150,50,650,650);
   textSize(100)
  fill("black")
    text(score,450,430);
    tb.x=mouseX
    tb.y=mouseY
    
    for(var i=0;i<bacteriaGroup.length; i++ ){
      if(bacteriaGroup.get(i).isTouching(tb)){
           score=score+1
          bacteriaGroup.get(i).destroy();
          popS.play();
          textSize(30)
          text("You have killed a devil:-)",430,40)
      }    
  }
    textSize(30)
    text(mouseX+ "," +mouseY,500,100)

    
    
    var pl=themeS.isPlaying()
    if(pl!==true){
      themeS.play();
    }
  
drawSprites();
spawnBacteria();
if(keyDown("UP_ARROW")){
  background(clean_bg);
  textSize(30)
  fill("purple")
  text("YOUR TEETH ARE PERFECTLY CLEAN",10,200);
}
if(keyDown("DOWN_ARROW")){
  background(dirty_bg);
}
    
}  
function spawnBacteria(){
  rand = Math.round(random(1,8));
  if(frameCount%15===0){
     bacteriaCreatedFrame=frameCount;
      var bacteria= createSprite(random(160,790), random(90,700), 10, 10);
      bacteria.velocityX=random(0.2,-0.2)
      bacteria.velocityY=random(0.5,-0.5);
      bacteria.lifetime=240

      switch(rand){
          case 1: bacteria.addImage(blackImg);
          break;
          case 2: bacteria.addImage(greenImg);
          break; 
          case 3: bacteria.addImage(octopusImg);
          break;
          case 4: bacteria.addImage(orangeImg);
          break;
          case 5: bacteria.addImage(pinkImg);
          break;
          case 6: bacteria.addImage(purpleImg);
          break;
          case 7 : bacteria.addImage(redImg);
          break;
          case 8: bacteria.addImage(wormImg);
          default: break;
      }
      bacteria.scale = random(0.15,0.2)
      bacteriaGroup.add(bacteria)
  }
  
}







