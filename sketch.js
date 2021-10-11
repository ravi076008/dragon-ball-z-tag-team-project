var bg;
var goku;
var gokuImg,gokuImg2,gokuImg3;
var goku1,goku2,goku3,goku4,goku5;
var goku6,goku7,goku8,goku9,goku10,goku11;
var ground;

var krillin;
var krillinImg,krillinImg2;
var krillin1,krillin2;

function preload(){
bg=loadImage("/images/background.png");
gokuImg=loadAnimation("/images/1.png","/images/2.png","/images/3.png")
gokuImg2=loadImage("/images/7.png")
gokuImg3=loadImage("/images/8.png")
goku1=loadImage("/images/12.png")
goku2=loadImage("/images/13.png")
goku3=loadImage("/images/14.png")
goku4=loadImage("/images/15.png")
goku5=loadImage("/images/16.png")
goku6=loadImage("/images/17.png")
goku7=loadImage("/images/18.png")
goku8=loadImage("/images/19.png")
goku9=loadImage("/images/20.png")
goku10=loadAnimation("/images/23.png","/images/24.png")
goku11=loadImage("/images/22.png")
krillinImg=loadAnimation("/images/1k.png","/images/7k.png");
krillin1=loadImage("/images/3k.png");
krillin2=loadAnimation("/images/4k.png","/images/5k.png","/images/6k.png")



}
function setup() {
  createCanvas(windowWidth,windowHeight);
 goku=createSprite(400, 600, 50, 50);
 goku.addAnimation("goku",gokuImg);
 goku.addImage("gokuR",gokuImg2);
 goku.addImage("gokuL",gokuImg3);
 goku.scale=2;
 goku.addImage("gokuA1",goku1);
 goku.addImage("gokuA2",goku2);
 goku.addImage("gokuA3",goku3);
 goku.addImage("gokuA4",goku4);
 goku.addImage("gokuA5",goku5);
 goku.addImage("gokuA6",goku6);
 goku.addImage("gokuA7",goku7);
 goku.addImage("gokuA8",goku8);
 goku.addImage("gokuA9",goku9);
 goku.addAnimation("gokuA10",goku10);
 goku.addImage("gokuA11",goku11);
 ground=createSprite(width/2,650,width,20)
 krillin=createSprite(600,600,50,50);
 krillin.addAnimation("krillin",krillinImg);
 krillin.addAnimation("krillinA2",krillin2);
 krillin.addImage("krillinA1",krillin1);
 krillin.scale=1.7;
}

function draw() {
  background(bg);  
  drawSprites();

  if(keyWentDown(RIGHT_ARROW)){

    goku.x=goku.x+60;
   goku.changeImage("gokuR");


  }
  if(keyWentUp(RIGHT_ARROW)){

    
   goku.changeAnimation("goku");


  }
  if(keyWentDown(LEFT_ARROW)){

    goku.x=goku.x-60;
   goku.changeImage("gokuL");


  }
  if(keyWentUp(LEFT_ARROW)){

    
    goku.changeAnimation("goku");
 
 
   }
   if(keyDown("space")){
 var ran=Math.round(random(1,10))
 console.log(ran);
 switch(ran)
 {
 case 1:goku.changeImage("gokuA1");
 break;
 case 2:goku.changeImage("gokuA2")
 break;
 case 3:goku.changeImage("gokuA3");
 break;
 case 4:goku.changeImage("gokuA4");
 break;
 case 5:goku.changeImage("gokuA5");
 break;
 case 6:goku.changeImage("gokuA6");
 break;
 case 7:goku.changeImage("gokuA7");
 break;
 case 8:goku.changeImage("gokuA8");
 break;
 case 9:goku.changeImage("gokuA9");
 break;
 case 10:goku.changeAnimation("gokuA10");
 break;
 default:console.log("goku")
 break;

 }
 
 

   }
   if(keyWentDown(UP_ARROW)){
    goku.velocityY=-20;
    //goku.changeImage("gokuA11")
   }
   //goku.velocityY=goku.velocityY+0.9;
  
   goku.collide(ground);
   if(keyWentUp(UP_ARROW)){
     goku.velocityY=+10;
   //goku.changeAnimation("goku");
   }
   var ran2=Math.round(random(1,2))
 switch(ran2){
  case 1:krillin.changeImage("krillinA1");
  break;
  case 2:krillin.changeAnimation("krillinA2")
  break;
 default:console.log("krillin")
 break;


 }

  }