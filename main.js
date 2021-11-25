function preload(){

}
function setup(){
    canvas=createCanvas(680,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
tint_color="";
}
function draw(){
 image(video,0,0,680,400);
 tint(tint_color);
}
function take_snapshot(){
   save('student_name.png'); 
}
function GiveFilter(){
   tint_color=document.getElementById("Color").value; 
}