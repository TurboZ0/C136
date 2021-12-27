copyright_status="";
objects=[];
video="";
number_save="";
function preload() {
    video= createVideo("video.mp4");
    video.hide();
}
function setup() {
    canvas= createCanvas(600,500);
    canvas.position(620,400);
}
function start() {
objectetector=ml5.objectDetector("cocossd", model_loaded_today);
document.getElementById("status").innerHTML="Status: Fixed! And Searching.."
}
function model_loaded_today() {
    console.log("Hi how are you?");
    copyright_status=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}


function foundResult(error, result) {
    if(error) {
    console.log(error) 
}
console.log(result);
objects= result;
}


function draw() {
    image(video, 0, 0, 600, 500);
    if(copyright_status!= "") {
        objectetector.detect(video, foundResult)
       document.getElementById("status").innerHTML="Status: Objects detected and detecting... Fo4ever..."  
       document.getElementById("number_ob").innerHTML="Number of Objects In video: " + objects.length;
        for(i=0; i<objects.length; i++) {
        number_save= floor(objects[i].confidence*100);
        fill("#FF0000");
        textSize(20);
        noStroke();
        text(objects[i].label + " " + number_save + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("orangered");
        strokeWeight(3);
        rect(objects[i].x, objects[i].y, objects[i].width , objects[i].height);
    }

    }  

}