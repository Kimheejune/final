var bg;

function setup() {

    createCanvas(1000, 1000);
    background(32, 42, 55);
    bg = loadImage("1.png");
    

}
function draw()
{
 background(0);
 image(bg);

}






//없어져
  image(chopsticks,mouseX-250,mouseY-20,500,500);

  for(var i = 0 ; i < 8 ; i++){
    if(checkPick[i]){
      sushiCount[i]+=5;
      if(sushiCount[i] > 300){
        sushiCount[i] = 0;
        checkPick[i] = false;
      }
    }
  }
}

function dist(x1,y1,x2,y2){
  return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}

function mouseClicked(){
  for(var i =0 ; i <8 ;i++){
    if(dist(sushiX[i],sushiY[i],mouseX,mouseY)<60){
      checkPick[i]=true;
    }
  }
}