function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor = "orange";
  mr = createSprite(200,200,50,50);
  mr.shapeColor = "orange";
}

function draw() {
  background(0,0,0);  
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if(mr.x - fr.x < fr.width/2 + mr.width/2
    && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y < fr.height/2 + mr.height/2
    && fr.y - mr.y < fr.height/2 + mr.height/2
    ){
    mr.shapeColor = "pink";
    fr.shapeColor = "pink"
  }
  else {
    mr.shapeColor = "orange";
    fr.shapeColor = "orange";
  }
  drawSprites();
}