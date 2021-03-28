var  hr = hour();
 var mn = minute();
 var sc = second();


function setup() {
  createCanvas(1000,1000);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

   angleMode(DEGREES);

  scAngle = map(sc %12, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  stroke(255, 204, 100);
  strokeWeight(7);
  line(0,0,100,0);

  stroke(255, 204, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


 
  translate(p5.Vector.fromAngle(millis() / 1000, 40));




  drawSprites();


}