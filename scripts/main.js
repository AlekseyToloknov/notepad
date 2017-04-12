$(document).ready(function() {

  function squareSize() {
    var side = +prompt("Select size of square area: 16, 32 or 64");

    switch (side) {
    case 16:
      for (var i = 1; i <= Math.pow(side, 2); i++) {
        $('#container').append('<div class="square big"></div>');
      }
      break;
    case 32:
      for (var i = 1; i <= Math.pow(side, 2); i++) {
        $('#container').append('<div class="square medium"></div>');
      }
      break;
    case 64:
      for (var i = 1; i <= Math.pow(side, 2); i++) {
        $('#container').append('<div class="square small"></div>');
      }
      break;
    default:
      alert('Wrong value! Try again.');
      squareSize();
    }
  }

  squareSize();

  $('#container').on('mouseenter', '.square', function() {
    $(this).addClass('painted')
  });

  $('#container').on('click', '.square', function() {
    $(this).removeClass('painted')
  });

  $('#erase').on('mouseup', function() {
    $('.square').remove();
    squareSize();
  });
});