var bg;
var checkDraw = [];
var drawCount = [];
function setup() {

  createCanvas(1000, 1000);
  background(32, 42, 55);
  bg = loadImage("1.png");
  for(var i = 0; i<4 ;i++){
    checkDraw[i] = true;
    drawCount[i] = 0;
  }   

}
function draw()
{
 background(32, 42, 55);
 

 fill(255);
 if(checkDraw[0]){
    image(bg,0,0);
  }else{
    drawCount[0]++;
    if(drawCount[0] >50){
      drawCount[0]=0;
      checkDraw[0]=true;
    }
  }
  if(checkDraw[1]){
   image(bg,500,0);
  }else{
    drawCount[1]++;
    if(drawCount[1] >50){
      drawCount[1]=0;
      checkDraw[1]=true;
    }
  }
  if(checkDraw[2]){
   image(bg,0,500);
  }
  if(checkDraw[3]){
   image(bg,500,500);
  }
}

function mousePressed(){
  if(mouseX >0 && mouseX <500 && mouseY >0 && mouseY <500){
    checkDraw[0]=false;
  }

  if(mouseX >500 && mouseX <1000 && mouseY >0 && mouseY <500){
    checkDraw[1]=false;
  }

}





