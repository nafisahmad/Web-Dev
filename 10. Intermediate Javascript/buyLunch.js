function buyLunch(names) {
  names = ['Nafis', 'Ahmad', 'Kumar', 'Rahul', 'Suriya'];
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  //   return randomPerson + ' will buy the lunch today !';
  console.log(randomPerson + ' will buy the lunch today !');
}

buyLunch();
