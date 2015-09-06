/**
 * I referenced w3schools.com's JavaScript reference
 * http://www.w3schools.com/jsref/default.asp and the jQuery api
 * http://api.jquery.com/ for refreshers on syntax and methods
 **/

function FizzOrBuzz(i) {
  if ((i % 3 == 0) && (i % 5 == 0)){
    $(".container").append('<p class="fzbz">FizzBuzz</p>');
  }
  else if (i % 3 == 0) {
    $(".container").append('<p class="fzbz">Fizz</p>');
  }
  else if (i % 5 == 0) {
    $(".container").append('<p class="fzbz">Buzz</p>');
  }
  else {
    $(".container").append('<p class="fzbz">' + i + '</p>');
  }
}

$("#submit").click(function(){
  $(".fzbz").remove();
  var num = $("#num").val();
  var i;
  if (num >= 1) {
    for (i = 1; i <= num; i++) {
      FizzOrBuzz(i);
    }
  }
  else if (num < 1) {
    for (i = 1; i >= num; i--) {
      if (i == 0) {
        $(".container").append('<p class="fzbz">' + i + '</p>')
      }
      FizzOrBuzz(i);
    }
  }
});
