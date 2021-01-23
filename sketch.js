var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(80,590,160,30);
    surface1.shapeColor="blue";
    surface2=createSprite(280,590,170,30);
    surface2.shapeColor="green";
    surface3=createSprite(470,590,180,30);
    surface3.shapeColor="purple";
    surface4=createSprite(700,590,190,30);
    surface4.shapeColor="orange";

    //create box sprite and give velocity
    box=createSprite(random(20,750))
    box.shapeColor="white";
    box.scale=0.6;
    box.velocityX=5;
    box.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    drawSprites();


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor="blue";
        playMusic();
    }
    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor="green";
        playMusic();
    }
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor="purple";
        box.velocityX=0;
        box.velocityY=0;
    }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor="orange";
        
    }
}
