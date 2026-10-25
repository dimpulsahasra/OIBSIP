
const form = document.getElementById("bmiForm");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const result = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const resultMessage = document.getElementById("resultMessage");
const healthyRange = document.getElementById("healthyRange");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = Number(weightInput.value);
    const heightCm = Number(heightInput.value);

    result.hidden = true;
    errorMessage.textContent = "";

    if (
        !Number.isFinite(weight) ||
        !Number.isFinite(heightCm) ||
        weight <= 0 ||
        heightCm <= 0 ||
        weight > 500 ||
        heightCm < 50 ||
        heightCm > 300
    ) {
        errorMessage.textContent =
            "Please enter a valid weight and height.";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);

    let category;
    let message;

    if (bmi < 18.5) {
        category = "Underweight";
        message = "Your BMI is below the standard adult healthy range.";
    } else if (bmi < 25) {
        category = "Normal weight";
        message = "Your BMI is within the standard adult healthy range.";
    } else if (bmi < 30) {
        category = "Overweight";
        message = "Your BMI is above the standard adult healthy range.";
    } else {
        category = "Obesity";
        message = "Your BMI is in the obesity range for adults.";
    }

    const minHealthyWeight = 18.5 * heightM * heightM;
    const maxHealthyWeight = 24.9 * heightM * heightM;

    bmiValue.textContent = bmi.toFixed(1);
    bmiCategory.textContent = category;
    resultMessage.textContent = message;

    healthyRange.textContent =
        `Standard adult healthy-weight reference for your height: ` +
        `${minHealthyWeight.toFixed(1)}–${maxHealthyWeight.toFixed(1)} kg.`;

    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

form.addEventListener("reset", function () {
    result.hidden = true;
    errorMessage.textContent = "";
});
