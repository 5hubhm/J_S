let classifier;
let img;

classifier = ml5.imageClassifier("MobileNet");
img = document.getElementById("myImage");
classifier.classify(img, gotResult);

function gotResult(results) {
    // Display the results
    console.log(results)
    let label = results[0].label;
    let confidence = (results[0].confidence * 100).toFixed(2);
    document.getElementById("myResult").innerHTML = label + "<br>Confidence: " + confidence + "%";
}