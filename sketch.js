var andy1, andy2, andy3, andy4, andy5;
var checkDraw = [];
var drawCount = [];
var soundFile;
function setup() {

  createCanvas(1000, 1000);
  
  andy1 = loadImage("1.png");
  andy2 = loadImage("2.png");
  andy3 = loadImage("3.png");
  andy4 = loadImage("4.png");
  andy5 = loadImage("5.png");
  for(var i = 0; i<4 ;i++){
    checkDraw[i] = true;
    drawCount[i] = 0;
  }   

function preload() {
  soundFormats('mp3', 'ogg');
  soundFile = loadSound('jb.mp3');
}

}
function draw()
{
 background(andy5);
 

 fill(255);
 if(checkDraw[0]){
    image(andy1,0,0);
  }else{
    drawCount[0]++;
    if(drawCount[0] >50){
      drawCount[0]=0;
      checkDraw[0]=true;
    }
  }
  if(checkDraw[1]){
   image(andy2,500,0);
  }else{
    drawCount[1]++;
    if(drawCount[1] >50){
      drawCount[1]=0;
      checkDraw[1]=true;
    }
  }
  if(checkDraw[2]){
   image(andy3,0,500);
  }else{
    drawCount[2]++;
    if(drawCount[2] >50){
      drawCount[2]=0;
      checkDraw[2]=true;
    }
  }
  if(checkDraw[3]){
   image(andy4,500,500);
  }else{
    drawCount[3]++;
    if(drawCount[3] >50){
      drawCount[3]=0;
      checkDraw[3]=true;
    }
  }
}

function mousePressed(){
  if(mouseX >0 && mouseX <500 && mouseY >0 && mouseY <500){
    checkDraw[0]=false;
  }

  if(mouseX >500 && mouseX <1000 && mouseY >0 && mouseY <500){
    checkDraw[1]=false;
  }
  if(mouseX >0 && mouseX <500 && mouseY >500 && mouseY <1000){
    checkDraw[2]=false;
  }
  if(mouseX >500 && mouseX <1000 && mouseY >500 && mouseY <1000){
    checkDraw[3]=false;
  }
}





