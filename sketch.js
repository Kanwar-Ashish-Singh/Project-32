const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    changeBackground();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg) {
        background(backgroundImg);
    }

    getBackgroundImg();

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json();
    console.log(responseJSON)

    // write code slice the datetime
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if (hour>= 06 && hour<= 07) {
        bg = "PRO-C-32-Template-main/sunrise1.png"
    }
    /*else {
        bg = "PRO-C-32-Template-main/sunrise2.png"
    }*/

    if (hour>= 07 && hour<= 09) {
        bg = "PRO-C-32-Template-main/sunrise2.png"
    }

    if (hour>= 09 && hour<= 10) {
            bg = "PRO-C-32-Template-main/sunrise3.png"
    }

    if (hour>= 10 && hour<= 12) {
            bg = "PRO-C-32-Template-main/sunrise4.png"
    }

    if (hour>= 12 && hour<= 1330) {
            bg = "PRO-C-32-Template-main/sunrise5.png"
    }

    if (hour>= 1330 && hour<= 16) {
            bg = "PRO-C-32-Template-main/sunrise6.png"
    }

    if (hour>= 16 && hour<= 17) {
            bg = "PRO-C-32-Template-main/sunset7.png"
    }

    if (hour>= 17 && hour<= 18) {
            bg = "PRO-C-32-Template-main/sunset8.png"
    }

    if (hour>= 18 && hour<= 19) {
            bg = "PRO-C-32-Template-main/sunset9.png"
    }

    if (hour>= 19 && hour<= 20) {
            bg = "PRO-C-32-Template-main/sunset10.png"
    }
 
    if (hour>= 20 && hour<= 21) {
            bg = "PRO-C-32-Template-main/sunset11.png"
    }

    if (hour>= 21 && hour<= 22) {
        bg = "PRO-C-32-Template-main/sunset12.png"
    }

    else {
        bg = "PRO-C-32-Template-main/sunset12.png"
    }



    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)
}
