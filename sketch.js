var track,trackImage
function preload(){
  //pre-load images
track=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200,20,20);
  trackImage.addImage("path.png",trackImageSS); 
  track.velocityY=4;
  track.scale=1.2;
}

function draw() {
  background("skyblue");
 drawSprites();
}
