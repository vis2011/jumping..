var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edges = createEdgeSprites();

    //create 4 different surfaces
    box1 = createSprite(100,500,130,20);
    box1.shapeColor="green";

    box2=createSprite(300,500,130,20);
    box2.shapeColor="yellow";

    box3=createSprite(500,500,130,20);
    box3.shapeColor="blue";

    box4=createSprite(700,500,130,20);
    box4.shapeColor="violet";
  

    //create box sprite and give velocity
    movingbox=createSprite(300,200,50,50);
    movingbox.shapeColor="green";
    movingbox.velocityY=6;
    movingbox.velocityX=3;
}

function draw() {
    background("grey");
    //create edgeSprite

    movingbox.bounceOff(edges);
     
if(box1.isTouching(movingbox)){
    movingbox.shapeColor="green";
    movingbox.velocityY=0;
    movingbox.velocityX=0;
    music.stop();
   }

   if(box2.isTouching(movingbox) && movingbox.bounceOff(box2)){
    movingbox.shapeColor="yellow";
     music.play();
    }
    if(box3.isTouching(movingbox) && movingbox.bounceOff(box3)){
        movingbox.shapeColor="blue";
       }

    if(box4.isTouching(movingbox) && movingbox.bounceOff(box4)){
        movingbox.shapeColor="violet"; 
       }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
 