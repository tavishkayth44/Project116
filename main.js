noseX = 0;
noseY = 0; 
function preload(){
thug_life = loadImage('https://i.postimg.cc/LXJHfQ1x/Thug-life-op.png');
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();



poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}



function draw(){
    image(video, 0, 0, 400, 400);
    image(thug_life , noseX, noseY , 200 , 150);
    
    }
    
    function modelLoaded(){
        console.log("PoseNet ab chalega");
    }
    
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            noseX = results[0].pose.nose.x-90;
            noseY = results[0].pose.nose.y-110;
            console.log("nose x =" + results[0].pose.nose.x);
            console.log("nose y =" + results[0].pose.nose.y);
    
        }
    }
    



function take_snapshot(){
    save("opFilterImage.png");
}