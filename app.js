const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", bmiCalculation);
// heightInput.addEventListener("input", colorChange);
// weightInput.addEventListener("input", colorChange);

function bmiCalculation(e) {
  e.preventDefault();
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;
  if (isNaN(weight)) {
    weightInput.style.color = "red";
    result.style.color = "red";
    result.innerHTML = `Your Weight is incorrect`;
    return;
  }
  if (isNaN(height)) {
    heightInput.style.color = "red";
    weightInput.style.color = "#3c8dc5";
    result.style.color = "red";
    result.innerHTML = `Your Height is incorrect`;
    return;
  }
  // all input field is correct
  const BMIResult = weight / (height * height);
  if (BMIResult) {
    heightInput.style.color = "#3c8dc5";
    weightInput.style.color = "#3c8dc5";
    result.style.color = "#3c8dc5";
    result.innerHTML = `Your BMI Result : ${BMIResult.toFixed(2)}`;
  }
}
