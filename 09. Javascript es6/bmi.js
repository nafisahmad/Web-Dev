function bmiCalculator(weight, height) {
  var weight = prompt('enter your weight');
  var height = prompt('enter your height');
  var bmi = weight / (height * height);
  
  //   return bmi;
  alert('your bmi is : ' + Math.round(bmi));
}

bmiCalculator();