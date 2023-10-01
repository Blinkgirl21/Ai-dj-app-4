song1=""
song2=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center;
    video=createCapture(VIDEO); 
    video.hide;
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);}

    function preload(){
        song1=loadSound("shinchan.mp3");
        song2=loadSound("Doraemon.mp3");
    }
    function draw(){
        image(video,0,0,600,500);
        fill("#FF0000");
    stroke("FF0000");
    if(leftWristX>0.2){
        circle(leftWrist,leftWristY,20);
        stop(song2)
    
    }
    if(rightwristX=false){
        play(song1);

    }
    }
    function modelLoaded(){
        console.log('poseNet is initialised');
        function gotPoses(results){
            if(results.length>0){
                console.log(results);
              scoreleftwrist=result[0].pose.keypoints[9].score;
              console.log(leftWristX);

              leftWristX=results[0].pose.leftWrist.x;
              leftWristY=results[0].pose.leftWrist.y;

              rightwristX=results[0].pose.rightWrist.x;
              rightWristY=results[0].pose/rightWrist.y;
              console.log("rightwristX= "+rightwristX+ "rightwristY="+rightWristY)
            }
        }
    }
        