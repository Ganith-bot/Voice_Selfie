SpeechRecognition = window.webkitSpeechRecognition;

var recognition =  new SpeechRecognition();

function start101(){
    document.getElementById("text_of_voice").innerHTML="";
    recognition.start();

    }

recognition.onresult = function run (event) {
    console.log(event);

    var content = event.results[0] [0].transcript;
    console.log(content);

    document.getElementById("text_of_voice").innerHTML=content;

    if (content=="take my selfie"){
        console.log("Taking selfie______")
        speak();
    }
}

Webcam.set({
    width:320,
    height:240,
    image_format:"png",
    png_quality:90
});

webcam_of_user = document.getElementById("camera");

function speak(){
    var synth = window.speechSynthesis;
    speech = "Taking your selfie in 5 seconds";
    var speaking = new SpeechSynthesisUtterance(speech);
    synth.speak(speaking);
    Webcam.attach(webcam_of_user);

    setTimeout(function(){
        take_snapshot();save();},5000);
}

function take_snapshot(){
    Webcam.snap(function(url){
        document.getElementById("photo").innerHTML = "<img id='photo_result' src="+url+">";
    });
    
}

function save(){
    link = document.getElementById("link");
    photo109 = document.getElementById("photo_result").src;
    link.href = photo109;
    link.click(); 
}