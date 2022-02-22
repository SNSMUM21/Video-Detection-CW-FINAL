video = "";
status = "";   
objects = [];                                     

function preload(){
    video = createVideo('video.mp4');   
    video.hide();
}
 function setup(){
     canvas = createCanvas(480, 380);
     canvas.center();
 }
 function draw() {
     image(video , 0 ,0 , 480 , 380);
 }
 function start()
 {
     objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Objects";
 }
 function modelLoaded() {
     console.log("Model Loaded!");
     status = true;
     video.loop();
     video.speed(1);
     video.volume(0);
 }

 function draw() {
     image(video , 0 , 0 , 480 , 380);
     if(status !="")
     {
         objectDetector.detect(video , gotResults) ;
         for(i = 0; i < objects.length; i++){
             document.getElementById("status").innerHTML = "Status : Objects Detected";
             document.getElementById("status").innerHTML = "Number Of Objects Detected Are : "+ objects.length;

             fill("#00ffff");
             percent = floor(objects[i].confidence * 100);
             text(objects[i].label + " " + percent + "%", object[i].x + 15, objects[i].y + 15);
             noFill();
             stroke("#00ffff");
             rect(object[i].x , objects[i].y, objects[i].width, objects[i].height);
         }
     }
 }

 function gotResults(error , results) {
     if(error){
         console.log(error);
     }
     console.log(results);
     objects = results;
 }

