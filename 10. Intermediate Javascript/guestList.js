var guestList = ['Nafis', 'Ahmad', 'Kumar', 'Rahul', 'Suriya'];

var guestName = prompt('Enter your name : ');

// to add a entered name to list
// guestList.push(guestName);

if (guestList.includes(guestName)) {
  alert('Welcome, ' + guestName);
} else {
  // added feature to call entered name
  alert('Sorry ' + guestName + ', your name is not on the list');
  // alert(guestList);
}
