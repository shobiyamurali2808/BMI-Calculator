document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const heightM = heightCm / 100;

  if (weight > 0 & heightM > 0) {
    const bmi = calculateBMI(weight, heightM);
    updateBMIResults(bmi);
  } else {
    alert("Please enter valid numbers.");
  }
});

function calculateBMI(weight, heightM) {
  return (weight / (heightM * heightM)).toFixed(1);
}

function updateBMIResults(bmi) {
  const bmiValueElement = document.getElementById("bmiValue");
  const bmiCategoryElement = document.getElementById("bmiCategory");

  bmiValueElement.textContent = bmi;

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal Weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else if (bmi >= 30 && bmi < 34.9) {
    category = "Obesity";
  } else {
    category = "Severe Obesity";
  }

  bmiCategoryElement.textContent = category;
}
    