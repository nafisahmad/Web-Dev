function test() {
  var a = 3;
  var b = 8;

  var c = a;
  var a = b;
  var b = c;
  console.log(a);
  console.log(b);
}
