function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/NTUXSGqjj/model.json', modelReady);
}
function modelReady(){
  console.log("modelo carregado! :D")
}
function gotResults(error, results){
  if(error){
  console.log(error)
  }
  else{
    console.log(results)
    r= Math.floor(Math.random()*255)+1
    g= Math.floor(Math.random()*255)+1
    b= Math.floor(Math.random()*255)+1
    document.getElementById("result_label").innerHTML="Posso ouvir: "+results[0].label
    document.getElementById("result_confidence").innerHTML="Precisão: "+results[0].confidence
    document.getElementById("result_label").style.color= "rgb("+r+","+g+","+b+")";  
    document.getElementById("result_confidence").style.color= "rgb("+r+","+g+","+b+")"; 

    img1=document.getElementById("alien1")
    img2=document.getElementById("alien2")
    img3=document.getElementById("alien3")
    img4=document.getElementById("alien4")
if(results[0].label=="Batidas"){
  img1.src="aliens-01.gif"
  img2.src="aliens-02.png"
  img3.src="aliens-03.png"
  img4.src="aliens-04.png"
}
else if(results[0].label=="Estalar de dedos"){
  img1.src="aliens-01.png"
  img2.src="aliens-02.gif"
  img3.src="aliens-03.png"
  img4.src="aliens-04.png"
}
else if(results[0].label=="Palmas"){
  img1.src="aliens-01.png"
  img2.src="aliens-02.png"
  img3.src="aliens-03.gif"
  img4.src="aliens-04.png"
}
else if(results[0].label=="Background Noise"){
  img1.src="aliens-01.png"
  img2.src="aliens-02.png"
  img3.src="aliens-03.png"
  img4.src="aliens-04.gif"
}
  }
}
