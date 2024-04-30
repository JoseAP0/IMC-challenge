function calculateIMC() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");
    
    var height = parseFloat(heightInput.value) 
    var weight = parseFloat(weightInput.value);
    
    if (isNaN(height) || isNaN(weight)) {
    resultDiv.textContent = "Please enter valid values for height and weight.";
    return;
    }
    
    var imc = weight / (height * height);
    imc = imc.toFixed(2);
    
    resultDiv.textContent = "Your IMC is " + imc;
    
}