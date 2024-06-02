//https://teachablemachine.withgoogle.com/models/dLxMdIOBB/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dLxMdIOBB/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var barking

function gotResults(error,results)
{
    if(error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()* 255)+1;
        random_number_b = Math.floor(Math.random()* 255)+1;

        document.getElementById("result_label").innerHTML = ' I can hear -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1= document.getElementById('alien1');
        img2= document.getElementById('alien2');
        img3= document.getElementById('alien3');
        img4= document.getElementById('alien4');

        if (results[0].label == "meowing") {
            img.src='cat.png';
cat - cat+1;
            
        }else if(results[0].label == "barking") {
            img.src='dog.png';
dog - dog+1;
           
            
        }else if (results[0].label == "mooing") {
           
            img.src='cow.jpeg';
cow - cow+1;
            
           
        }else if (results[0].label == "roaring") {
            img.src='lion.jpeg';
lion - lion+1

    }else 
    img.src='background.jpeg';

           
            
            
        


        

    }
}