var guestList = ['Nafis', 'Ahmad', 'Kumar', 'Rahul', 'Suriya'];

var guestName = prompt('Enter your name : ');

if (guestList.includes(guestName)) {
  alert('Welcome, ' + guestName);
} else {
  alert('Sorry your name is not on the list');
}
