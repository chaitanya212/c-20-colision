var moving_rectangle,fixed_rectangle;

function setup() {
  createCanvas(800,400);
  moving_rectangle = createSprite(400, 200, 150);
  moving_rectangle.shapeColor="green";
  fixed_rectangle = createSprite(300,200,150,150);
  fixed_rectangle.shapeColor="green";
}

function draw() {
  background("lightblue");  
  moving_rectangle.x=World.mouseX;
  moving_rectangle.y=World.mouseY;
  if(moving_rectangle.x-fixed_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2 
    && fixed_rectangle.x-moving_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2
    && moving_rectangle.y-fixed_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2
    && fixed_rectangle.y-moving_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2){
    fixed_rectangle.shapeColor="red";
    moving_rectangle.shapeColor="red";
  }
  else{
    fixed_rectangle.shapeColor="green";
    moving_rectangle.shapeColor="green";
  }
  
  drawSprites();
}
