function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let heightFeet = parseFloat(document.getElementById("heightFeet").value);
  let heightInches = parseFloat(document.getElementById("heightInches").value);
  let gender = document.getElementById("gender").value;

  if (isNaN(weight) || isNaN(heightFeet) || isNaN(heightInches)) {
      alert("Please enter valid values.");
      return;
  }

  let heightTotalInches = (heightFeet * 12) + heightInches;
  let bmi = (703 * weight) / (heightTotalInches * heightTotalInches);
  let status = getBMIStatus(bmi, gender);

  document.getElementById("bmiResult").innerText = bmi.toFixed(2);
  alert(status);
}

function getBMIStatus(bmi, gender) {
  if (gender === "male") {
      if (bmi < 17.50) return "Anorexia";
      if (bmi >= 17.501 && bmi <= 20.70) return "Underweight";
      if (bmi >= 20.71 && bmi <= 26.40) return "Ideal Range";
      if (bmi >= 26.41 && bmi <= 27.80) return "Marginally Overweight";
      if (bmi >= 27.81 && bmi <= 31.10) return "Overweight";
      if (bmi > 31.10) return "Very Overweight or Obese";
  } else {
      if (bmi < 17.50) return "Anorexia";
      if (bmi >= 17.51 && bmi <= 19.10) return "Underweight";
      if (bmi >= 19.11 && bmi <= 25.80) return "Ideal Range";
      if (bmi >= 25.81 && bmi <= 27.30) return "Marginally Overweight";
      if (bmi >= 27.31 && bmi <= 32.30) return "Overweight";
      if (bmi > 32.30) return "Very Overweight or Obese";
  }
  return "Unknown";
}
