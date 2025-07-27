//Buil a BMI Calculator

function bmiCalculator (weight, height) {
    var bmi = weight / (height * height); // BMI Formula
    
    if (bmi < 18.5) {
        return `Your BMI is ${bmi.toFixed()}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${bmi.toFixed()}, so you have a normal weight.`;
    } else {
        return `Your BMI is ${bmi.toFixed()}, so you are overweight.`;
    }
}

bmiCalculator(44, 1.54); // Output: Your BMI is 19, so you have a normal weight.
bmiCalculator(50, 1.7); // Output: Your BMI is 17, so you are underweight.
bmiCalculator(60, 1.7); // Output: Your BMI is 21, so you have a normal weight.
