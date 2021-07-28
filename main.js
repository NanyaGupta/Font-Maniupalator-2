rightWristX=0;
leftWristX=0;


function setup()  {
    video = createCapture(VIDEO);
    video.size(525, 525);

    canvas = createCanvas(525,525);
    canvas.position(560,150);
}

function modelLoaded(){
   console.log('Posenet has Intializied Successfully!');
}

function draw() {
    background('#800000');
}

function gotPoses(results) {
    if(results.length > 0){
       console.log(results);
    }
}