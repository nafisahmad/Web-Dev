function lifeInWeeks(age) {
  var age = prompt('enter your age :');
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  alert('days: ' + days + ' | weeks: ' + weeks + ' | months: ' + months);
}

lifeInWeeks();
