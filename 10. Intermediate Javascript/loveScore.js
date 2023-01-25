// my version with name correction feature
var name1 = prompt('Write your name : ');
var name2 = prompt('Write your Crush name : ');

function capitalisedName() {
  //   Capitalising name1
  var firstChar = name1.slice(0, 1);
  var upperCaseFirstChar = firstChar.toUpperCase();

  var restOfName = name1.slice(1, name1.length);
  restOfName = restOfName.toLowerCase();
  var capitalisedName = upperCaseFirstChar + restOfName;

  //   Capitalising name2
  var firstChar2 = name2.slice(0, 1);
  var upperCaseFirstChar2 = firstChar2.toUpperCase();

  var restOfName2 = name2.slice(1, name2.length);
  restOfName2 = restOfName2.toLowerCase();
  var capitalisedName2 = upperCaseFirstChar2 + restOfName2;

  //   loveScore code
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;

  if (loveScore > 70) {
    alert(
      capitalisedName +
        'and ' +
        capitalisedName2 +
        ' make a perfect match, the score is : ' +
        loveScore +
        '%'
    );
  } else {
    alert(
      capitalisedName +
        ' and ' +
        capitalisedName2 +
        `'s love score is : ` +
        loveScore +
        '%'
    );
  }
}

// calling the function
capitalisedName();
