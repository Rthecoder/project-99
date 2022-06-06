var speechrecognition= window.webkitSpeechRecognition;
var recognition= new speechrecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult= function()
{
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= content;
    console.log(content)
    speak();
}

function speak()
{
    var synth= window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(mycam)
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})

mycam=document.getElementById("camera")