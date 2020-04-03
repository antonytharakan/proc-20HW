
var r = 0;
var g = 50;
var b = 255;

function setup(){

  createCanvas(1200,400);
}


function draw(){

  background(mouseX,g,mouseY);

  ellipse(mouseX,mouseY,20,20);

}