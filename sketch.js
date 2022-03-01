var path,boy;invisibleBoundary1,invisibleBoundary2,invisibleBoundary3;
var pathImg,boyImg;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  
  createCanvas(400,400);
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale =1.2

boy = createSprite(200,400,20,20);
boy.addAnimation( "boy",boyImg);
boy.scale=0.08;

invisibleBoundary1 = createSprite(0,400,10,400);
invisibleBoundary1.visible = false;


invisibleBoundary2 = createSprite(400,400,10,400);
invisibleBoundary2.visible =false ;

invisibleBoundary2 = createSprite(200,400,400,10);
invisibleBoundary2.visible = false;
}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
  
}




