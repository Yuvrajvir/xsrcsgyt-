function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.songClassifier('https://teachablemachine.withgoogle.com/models/6xe0BHfQq/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error){
        console.error(error);
    }else{
        console.log(results);
        ramdom_number_r = Math.floor(Math.ramdom() * 225) + 1;
        ramdom_number_b = Math.floor(Math.ramdom() * 225) + 1;
        ramdom_number_g = Math.floor(Math.ramdom() * 225) + 1;
        
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidance").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rbg("
        +ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";
        document.getElementById("result_label").style.color = "rbg("
        +ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";

        img = document.getElementById('alien1');
        img = document.getElementById('alien2');
        img = document.getElementById('alien3');
        img = document.getElementById('alien4');

        if(results[0].label == "Clap") {
            img.src = 'alines-01.gif';
            img1.src = 'alines-02.png';
            img2.src = 'alines-03.png';
            img3.src = 'alines-04.png';
        }else if (results[0].label == "whistle") {
            img.src = 'alines-01.png';
            img1.src = 'alines-02.gif';
            img2.src = 'alines-03.png';
            img3.src = 'alines-04.png';  
        }else if (results[0].label == "snapping") {
            img.src = 'alines-01.png';
            img1.src = 'alines-02.png';
            img2.src = 'alines-03.gif';
            img3.src = 'alines-04.png';  
        }else{
            img.src = 'alines-01.png';
            img1.src = 'alines-02.png';
            img2.src = 'alines-03.png';
            img3.src = 'alines-04.gif';  
        }
 


    }
}