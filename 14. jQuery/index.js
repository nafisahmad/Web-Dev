// $(document).ready(function () {
//   $('h1').css('color', 'red');
// });

// $('h1').css('color', 'green');
// $('h1').addClass('big-title margin-50');
// $('h1').removeClass('big-title');
// $('h1').text('Bye');

// $('button').text("Don't Click");
// $('button').html("<em> Don't Click </em>");

// $('img').attr('src');
// $('a').attr('href', 'https://www.bing');

// $('button').click(function () {
//   $('h1').css('color', 'purple');
// });

// shows keypressed on screen
// $(document).keypress(function (event) {
//   $('h1').text(event.key);
// });

$('h1').on('mouseover', function () {
  $('h1').css('color', 'yellow');
});

$('h1').before('<button>New</button>'); //add new element before opening tag of element
$('h1').after('<button>New</button>'); ////add new element after opening tag of element
$('h1').prepend('<button>New</button>'); //add new element just before content of h1
$('h1').append('<button>New</button>'); //add new element after content

// REMOVE ALL BUTTONS
// $('button').remove();

// HIDE- SHOW
// $('h1').hide();
// $('h1').show();

// $('button').on('click', function () {
//   //   $('h1').toggle();
//   $('h1').fadeOut();
//   $('h1').fadeIn();
//   $('h1').fadeToggle();

//   $('h1').slideUp();
//   $('h1').slideDown();
//   $('h1').slideToggle(); //can use for drop down menu
// });

$('button').on('click', function () {
  //   $('h1').animate({ opacity: 0.5 });
  $('h1').slideUp().slideDown().animate({ opacity: 0.5 });
});
