

$(() => {

  // console.log('hi - jQuery is working for connect four!');

// SELECTING ELEMENTS
  const $board = $('#gameboard'); // grabbing the board id

  const $restartGame = $('#restart'); // grabbing the clear-board id

  const $nextTurn = $('p'); // grabbing p tag from html

  const $circleClass = $('.circle'); // grabbing the circle class

  let toggle = true; // var set to true

// Switching Turns (3)
  const chipFunction = function(column) {
    console.log('testing chipFunction'); // click listener is working

    if (toggle) {
      $(column).addClass('light-blue-chip'); // if toggle is true, it will add the class of light-blue chip to the $gameBoardDiv created below

      $nextTurn.text("Player Two"); // when light-blue chip is added to the div, the p tag will change to player 2 (pink) turn
      $nextTurn.css('color', '#4CC417'); // changing the color of the p tag to pink
    } else {
      $(column).addClass('pink-chip'); // if toggle is false, it will add the class of the pink-chip to the $gameBoardDiv

      $nextTurn.text("Player One"); // when pink-chip is added to the div, the p tag will change to player 1 (light blue) turn
      $nextTurn.css('color', '#F3F315'); // changing the color of the p tag to light blue
    };

      toggle = !toggle; // alternates the turns between light blue and pink

      checkWins(); // calls the checkingWins function to see who has won

  };// --> closing chipFunction function



//  Creating the gameboard (1)
  const createBoard = function() {
    for (let i = 0; i < 42; i++) { // create 42 white circles that when clicked will change to blue to pink
      const $gameBoardDiv = $('<div>'); // creating a new div that goes below the div board
        $gameBoardDiv.addClass('circle'); // adding the class circle to the new board div
        $gameBoardDiv.attr('id', i); // adding ids with numbers to the circles
        $board.append($gameBoardDiv); // appending the $gameBoardDiv that goes inside the board div
      };
  }; // --> closing createBoard function

  createBoard(); // calling createBoard to create the board when the page loads



// Clickable top buttons (2)
// creating arrays for the columns
  const column1 = [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')];
  const column2 = [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')];
  const column3 = [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')];
  const column4 = [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')];
  const column5 = [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')];
  const column6 = [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#5')];
  const column7 = [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#6')];


// grabbing the drop  buttons from html
  const $button1Id = $('#button1');
  const $button2Id = $('#button2');
  const $button3Id = $('#button3');
  const $button4Id = $('#button4');
  const $button5Id = $('#button5');
  const $button6Id = $('#button6');
  const $button7Id = $('#button7');


// create a function to make the top Drop buttons clickable (4)
  const clickBtns = function () {

    $button1Id.on('click', function(){ // when button is clicked, the for loop will run
      for (let i = 0; i < column1.length; i++) {
        if ($(column1[i]).hasClass('light-blue-chip') || column1[i].hasClass('pink-chip')) { // if it has a light blue or pink button do nothing
        } else { // else, run the chipFunction which will switch from light-blue to pink token
          chipFunction(column1[i]); // this makes the chip start with player one (light-blue) because toggle is set to true
          break; // this will stop the column from being filled out completely
        }
      }
    }); // -->  click function ends

    $button2Id.on('click', function(){
      for (let i = 0; i < column2.length; i++) {
        if (column2[i].hasClass('light-blue-chip') || column2[i].hasClass('pink-chip')) {
        } else {
          chipFunction(column2[i]);
          break;
        }
      }
    }); // -->  click function ends

    $button3Id.on('click', function(){
      for (let i = 0; i < column3.length; i++) {
        if (column3[i].hasClass('light-blue-chip') || column3[i].hasClass('pink-chip')) {

        } else {
          chipFunction(column3[i]);
          break;
        }
      }
    }); // -->  click function ends

    $button4Id.on('click', function(){
      for (let i = 0; i < column4.length; i++) {
        if (column4[i].hasClass('light-blue-chip') || column4[i].hasClass('pink-chip')) {
        } else {
          chipFunction(column4[i]);
          break;
        }
      }
    }); // -->  click function ends

    $button5Id.on('click', function(){
      for (let i = 0; i < column5.length; i++) {
        if (column5[i].hasClass('light-blue-chip') || column5[i].hasClass('blue-pink')) {

        } else {
          chipFunction(column5[i]);
          break;
        }
      }
    }); // --> click function ends

    $button6Id.on('click', function(){
      for (let i = 0; i < column6.length; i++) {
        if (column6[i].hasClass('light-blue-chip') || column6[i].hasClass('pink-chip')) {

        } else {
          chipFunction(column6[i]);
          break;
        }
      }
    }); // --> click function ends

    $button7Id.on('click', function(){
      for (let i = 0; i < column7.length; i++) {
        if (column7[i].hasClass('light-blue-chip') || column7[i].hasClass('pink-chip')) {

        } else {
          chipFunction(column7[i]);
          break;
        }
      }
    }); // --> click function ends

  }; // --> clickBtns function ends

  clickBtns(); // calling the clickButtons function so the user can click the x  buttons on top of the page

//CHECK WINS amd commiting DRY :( (5)
  const checkWins = function() {
  // horizontal row a
  if ($('#35').hasClass('light-blue-chip') && $('#36').hasClass('light-blue-chip') && $('#37').hasClass('light-blue-chip') && $('#38').hasClass('light-blue-chip') ||
      $('#36').hasClass('light-blue-chip') && $('#37').hasClass('light-blue-chip') && $('#38').hasClass('light-blue-chip') && $('#39').hasClass('light-blue-chip') ||
      $('#37').hasClass('light-blue-chip') && $('#38').hasClass('light-blue-chip') && $('#39').hasClass('light-blue-chip') && $('#40').hasClass('light-blue-chip') ||
      $('#38').hasClass('light-blue-chip') && $('#39').hasClass('light-blue-chip') && $('#40').hasClass('light-blue-chip') && $('#41').hasClass('light-blue-chip') ||
      // horizontal row b
      $('#28').hasClass('light-blue-chip') && $('#29').hasClass('light-blue-chip') && $('#30').hasClass('light-blue-chip') && $('#31').hasClass('light-blue-chip') ||
      $('#29').hasClass('light-blue-chip') && $('#30').hasClass('light-blue-chip') && $('#31').hasClass('light-blue-chip') && $('#32').hasClass('light-blue-chip') ||
      $('#30').hasClass('light-blue-chip') && $('#31').hasClass('light-blue-chip') && $('#32').hasClass('light-blue-chip') && $('#33').hasClass('light-blue-chip') ||
      $('#31').hasClass('light-blue-chip') && $('#32').hasClass('light-blue-chip') && $('#33').hasClass('light-blue-chip') && $('#34').hasClass('light-blue-chip') ||
      // horizontal row c
      $('#21').hasClass('light-blue-chip') && $('#22').hasClass('light-blue-chip') && $('#23').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') ||
      $('#22').hasClass('light-blue-chip') && $('#23').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') ||
      $('#23').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') && $('#26').hasClass('light-blue-chip') ||
      $('#24').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') && $('#26').hasClass('light-blue-chip') && $('#27').hasClass('light-blue-chip') ||
      // horizontal row d
      $('#14').hasClass('light-blue-chip') && $('#15').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') ||
      $('#15').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') ||
      $('#16').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') && $('#19').hasClass('light-blue-chip') ||
      $('#17').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') && $('#19').hasClass('light-blue-chip') && $('#20').hasClass('light-blue-chip') ||
      // horizontal row e
      $('#7').hasClass('light-blue-chip') && $('#8').hasClass('light-blue-chip') && $('#9').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') ||
      $('#8').hasClass('light-blue-chip') && $('#9').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') && $('#11').hasClass('light-blue-chip') ||
      $('#9').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') && $('#11').hasClass('light-blue-chip') && $('#12').hasClass('light-blue-chip') ||
      $('#10').hasClass('light-blue-chip') && $('#11').hasClass('light-blue-chip') && $('#12').hasClass('light-blue-chip') && $('#13').hasClass('light-blue-chip') ||
      // horizontal row f
      $('#0').hasClass('light-blue-chip') && $('#1').hasClass('light-blue-chip') && $('#2').hasClass('light-blue-chip') && $('#3').hasClass('light-blue-chip') ||
      $('#1').hasClass('light-blue-chip') && $('#2').hasClass('light-blue-chip') && $('#3').hasClass('light-blue-chip') && $('#4').hasClass('light-blue-chip') ||
      $('#2').hasClass('light-blue-chip') && $('#3').hasClass('light-blue-chip') && $('#4').hasClass('light-blue-chip') && $('#5').hasClass('light-blue-chip') ||
      $('#3').hasClass('light-blue-chip') && $('#4').hasClass('light-blue-chip') && $('#5').hasClass('light-blue-chip') && $('#6').hasClass('light-blue-chip') ||
      // vertical column a
      $('#35').hasClass('light-blue-chip') && $('#28').hasClass('light-blue-chip') && $('#21').hasClass('light-blue-chip') && $('#14').hasClass('light-blue-chip') ||
      $('#28').hasClass('light-blue-chip') && $('#21').hasClass('light-blue-chip') && $('#14').hasClass('light-blue-chip') && $('#7').hasClass('light-blue-chip') ||
      $('#21').hasClass('light-blue-chip') && $('#14').hasClass('light-blue-chip') && $('#7').hasClass('light-blue-chip') && $('#0').hasClass('light-blue-chip') ||
      // vertical column b
      $('#36').hasClass('light-blue-chip') && $('#29').hasClass('light-blue-chip') && $('#22').hasClass('light-blue-chip') && $('#15').hasClass('light-blue-chip') ||
      $('#29').hasClass('light-blue-chip') && $('#22').hasClass('light-blue-chip') && $('#15').hasClass('light-blue-chip') && $('#8').hasClass('light-blue-chip') ||
      $('#22').hasClass('light-blue-chip') && $('#15').hasClass('light-blue-chip') && $('#8').hasClass('light-blue-chip') && $('#1').hasClass('light-blue-chip') ||
      // vertical column c
      $('#37').hasClass('light-blue-chip') && $('#30').hasClass('light-blue-chip') && $('#23').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') ||
      $('#30').hasClass('light-blue-chip') && $('#23').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') && $('#9').hasClass('light-blue-chip') ||
      $('#23').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') && $('#9').hasClass('light-blue-chip') && $('#2').hasClass('light-blue-chip') ||
      // vertical column d
      $('#38').hasClass('light-blue-chip') && $('#31').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') ||
      $('#31').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') ||
      $('#24').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') && $('#3').hasClass('light-blue-chip') ||
      // vertical column e
      $('#39').hasClass('light-blue-chip') && $('#32').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') ||
      $('#32').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') && $('#11').hasClass('light-blue-chip') ||
      $('#25').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') && $('#11').hasClass('light-blue-chip') && $('#4').hasClass('light-blue-chip') ||
      // vertical column f
      $('#40').hasClass('light-blue-chip') && $('#33').hasClass('light-blue-chip') && $('#26').hasClass('light-blue-chip') && $('#19').hasClass('light-blue-chip') ||
      $('#33').hasClass('light-blue-chip') && $('#26').hasClass('light-blue-chip') && $('#19').hasClass('light-blue-chip') && $('#12').hasClass('light-blue-chip') ||
      $('#26').hasClass('light-blue-chip') && $('#19').hasClass('light-blue-chip') && $('#12').hasClass('light-blue-chip') && $('#5').hasClass('light-blue-chip') ||
      // vertical column g
      $('#41').hasClass('light-blue-chip') && $('#34').hasClass('light-blue-chip') && $('#27').hasClass('light-blue-chip') && $('#20').hasClass('light-blue-chip') ||
      $('#34').hasClass('light-blue-chip') && $('#27').hasClass('light-blue-chip') && $('#20').hasClass('light-blue-chip') && $('#13').hasClass('light-blue-chip') ||
      $('#27').hasClass('light-blue-chip') && $('#20').hasClass('light-blue-chip') && $('#13').hasClass('light-blue-chip') && $('#6').hasClass('light-blue-chip') ||
      // Diagonal R
      $('#21').hasClass('light-blue-chip') && $('#15').hasClass('light-blue-chip') && $('#9').hasClass('light-blue-chip') && $('#3').hasClass('light-blue-chip') ||
      $('#28').hasClass('light-blue-chip') && $('#22').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') ||
      $('#22').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') && $('#4').hasClass('light-blue-chip') ||
      $('#35').hasClass('light-blue-chip') && $('#29').hasClass('light-blue-chip') && $('#23').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') ||
      $('#29').hasClass('light-blue-chip') && $('#23').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') && $('#11').hasClass('light-blue-chip') ||
      $('#23').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') && $('#11').hasClass('light-blue-chip') && $('#5').hasClass('light-blue-chip') ||
      $('#36').hasClass('light-blue-chip') && $('#30').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') ||
      $('#30').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') && $('#12').hasClass('light-blue-chip') ||
      $('#24').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') && $('#12').hasClass('light-blue-chip') && $('#6').hasClass('light-blue-chip') ||
      $('#37').hasClass('light-blue-chip') && $('#31').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') && $('#19').hasClass('light-blue-chip') ||
      $('#31').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') && $('#19').hasClass('light-blue-chip') && $('#13').hasClass('light-blue-chip') ||
      $('#38').hasClass('light-blue-chip') && $('#32').hasClass('light-blue-chip') && $('#26').hasClass('light-blue-chip') && $('#20').hasClass('light-blue-chip') ||
      // Diagonal L
      $('#38').hasClass('light-blue-chip') && $('#30').hasClass('light-blue-chip') && $('#22').hasClass('light-blue-chip') && $('#14').hasClass('light-blue-chip') ||
      $('#39').hasClass('light-blue-chip') && $('#31').hasClass('light-blue-chip') && $('#23').hasClass('light-blue-chip') && $('#15').hasClass('light-blue-chip') ||
      $('#31').hasClass('light-blue-chip') && $('#23').hasClass('light-blue-chip') && $('#15').hasClass('light-blue-chip') && $('#7').hasClass('light-blue-chip') ||
      $('#40').hasClass('light-blue-chip') && $('#32').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') ||
      $('#32').hasClass('light-blue-chip') && $('#24').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') && $('#8').hasClass('light-blue-chip') ||
      $('#24').hasClass('light-blue-chip') && $('#16').hasClass('light-blue-chip') && $('#8').hasClass('light-blue-chip') && $('#0').hasClass('light-blue-chip') ||
      $('#41').hasClass('light-blue-chip') && $('#33').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') ||
      $('#33').hasClass('light-blue-chip') && $('#25').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') && $('#9').hasClass('light-blue-chip') ||
      $('#25').hasClass('light-blue-chip') && $('#17').hasClass('light-blue-chip') && $('#9').hasClass('light-blue-chip') && $('#1').hasClass('light-blue-chip') ||
      $('#34').hasClass('light-blue-chip') && $('#26').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') ||
      $('#26').hasClass('light-blue-chip') && $('#18').hasClass('light-blue-chip') && $('#10').hasClass('light-blue-chip') && $('#2').hasClass('light-blue-chip') ||
      $('#27').hasClass('light-blue-chip') && $('#19').hasClass('light-blue-chip') && $('#11').hasClass('light-blue-chip') && $('#3').hasClass('light-blue-chip')) {
          $nextTurn.text("Player One Wins!!");
          $nextTurn.css('color', 'white');
          $nextTurn.addClass('light-blue-wins');

  } else if (
      // horizontal row a
      $('#35').hasClass('pink-chip') && $('#36').hasClass('pink-chip') && $('#37').hasClass('pink-chip') && $('#38').hasClass('pink-chip') ||
      $('#36').hasClass('pink-chip') && $('#37').hasClass('pink-chip') && $('#38').hasClass('pink-chip') && $('#39').hasClass('pink-chip') ||
      $('#37').hasClass('pink-chip') && $('#38').hasClass('pink-chip') && $('#39').hasClass('pink-chip') && $('#40').hasClass('pink-chip') ||
      $('#38').hasClass('pink-chip') && $('#39').hasClass('pink-chip') && $('#40').hasClass('pink-chip') && $('#41').hasClass('pink-chip') ||
      // horizontal row b
      $('#28').hasClass('pink-chip') && $('#29').hasClass('pink-chip') && $('#30').hasClass('pink-chip') && $('#31').hasClass('pink-chip') ||
      $('#29').hasClass('pink-chip') && $('#30').hasClass('pink-chip') && $('#31').hasClass('pink-chip') && $('#32').hasClass('pink-chip') ||
      $('#30').hasClass('pink-chip') && $('#31').hasClass('pink-chip') && $('#32').hasClass('pink-chip') && $('#33').hasClass('pink-chip') ||
      $('#31').hasClass('pink-chip') && $('#32').hasClass('pink-chip') && $('#33').hasClass('pink-chip') && $('#34').hasClass('pink-chip') ||
      // horizontal row c
      $('#21').hasClass('pink-chip') && $('#22').hasClass('pink-chip') && $('#23').hasClass('pink-chip') && $('#24').hasClass('pink-chip') ||
      $('#22').hasClass('pink-chip') && $('#23').hasClass('pink-chip') && $('#24').hasClass('pink-chip') && $('#25').hasClass('pink-chip') ||
      $('#23').hasClass('pink-chip') && $('#24').hasClass('pink-chip') && $('#25').hasClass('pink-chip') && $('#26').hasClass('pink-chip') ||
      $('#24').hasClass('pink-chip') && $('#25').hasClass('pink-chip') && $('#26').hasClass('pink-chip') && $('#27').hasClass('pink-chip') ||
      // horizontal row d
      $('#14').hasClass('pink-chip') && $('#15').hasClass('pink-chip') && $('#16').hasClass('pink-chip') && $('#17').hasClass('pink-chip') ||
      $('#15').hasClass('pink-chip') && $('#16').hasClass('pink-chip') && $('#17').hasClass('pink-chip') && $('#18').hasClass('pink-chip') ||
      $('#16').hasClass('pink-chip') && $('#17').hasClass('pink-chip') && $('#18').hasClass('pink-chip') && $('#19').hasClass('pink-chip') ||
      $('#17').hasClass('pink-chip') && $('#18').hasClass('pink-chip') && $('#19').hasClass('pink-chip') && $('#20').hasClass('pink-chip') ||
      // horizontal row e
      $('#7').hasClass('pink-chip') && $('#8').hasClass('pink-chip') && $('#9').hasClass('pink-chip') && $('#10').hasClass('pink-chip') ||
      $('#8').hasClass('pink-chip') && $('#9').hasClass('pink-chip') && $('#10').hasClass('pink-chip') && $('#11').hasClass('pink-chip') ||
      $('#9').hasClass('pink-chip') && $('#10').hasClass('pink-chip') && $('#11').hasClass('pink-chip') && $('#12').hasClass('pink-chip') ||
      $('#10').hasClass('pink-chip') && $('#11').hasClass('pink-chip') && $('#12').hasClass('pink-chip') && $('#13').hasClass('pink-chip') ||
      // horizontal row f
      $('#0').hasClass('pink-chip') && $('#1').hasClass('pink-chip') && $('#2').hasClass('pink-chip') && $('#3').hasClass('pink-chip') ||
      $('#1').hasClass('pink-chip') && $('#2').hasClass('pink-chip') && $('#3').hasClass('pink-chip') && $('#4').hasClass('pink-chip') ||
      $('#2').hasClass('pink-chip') && $('#3').hasClass('pink-chip') && $('#4').hasClass('pink-chip') && $('#5').hasClass('pink-chip') ||
      $('#3').hasClass('pink-chip') && $('#4').hasClass('pink-chip') && $('#5').hasClass('pink-chip') && $('#6').hasClass('pink-chip') ||
      // vertical column a
      $('#35').hasClass('pink-chip') && $('#28').hasClass('pink-chip') && $('#21').hasClass('pink-chip') && $('#14').hasClass('pink-chip') ||
      $('#28').hasClass('pink-chip') && $('#21').hasClass('pink-chip') && $('#14').hasClass('pink-chip') && $('#7').hasClass('pink-chip') ||
      $('#21').hasClass('pink-chip') && $('#14').hasClass('pink-chip') && $('#7').hasClass('pink-chip') && $('#0').hasClass('pink-chip') ||
      // vertical column b
      $('#36').hasClass('pink-chip') && $('#29').hasClass('pink-chip') && $('#22').hasClass('pink-chip') && $('#15').hasClass('pink-chip') ||
      $('#29').hasClass('pink-chip') && $('#22').hasClass('pink-chip') && $('#15').hasClass('pink-chip') && $('#8').hasClass('pink-chip') ||
      $('#22').hasClass('pink-chip') && $('#15').hasClass('pink-chip') && $('#8').hasClass('pink-chip') && $('#1').hasClass('pink-chip') ||
      // vertical column c
      $('#37').hasClass('pink-chip') && $('#30').hasClass('pink-chip') && $('#23').hasClass('pink-chip') && $('#16').hasClass('pink-chip') ||
      $('#30').hasClass('pink-chip') && $('#23').hasClass('pink-chip') && $('#16').hasClass('pink-chip') && $('#9').hasClass('pink-chip') ||
      $('#23').hasClass('pink-chip') && $('#16').hasClass('pink-chip') && $('#9').hasClass('pink-chip') && $('#2').hasClass('pink-chip') ||
      // vertical column d
      $('#38').hasClass('pink-chip') && $('#31').hasClass('pink-chip') && $('#24').hasClass('pink-chip') && $('#17').hasClass('pink-chip') ||
      $('#31').hasClass('pink-chip') && $('#24').hasClass('pink-chip') && $('#17').hasClass('pink-chip') && $('#10').hasClass('pink-chip') ||
      $('#24').hasClass('pink-chip') && $('#17').hasClass('pink-chip') && $('#10').hasClass('pink-chip') && $('#3').hasClass('pink-chip') ||
      // vertical column e
      $('#39').hasClass('pink-chip') && $('#32').hasClass('pink-chip') && $('#25').hasClass('pink-chip') && $('#18').hasClass('pink-chip') ||
      $('#32').hasClass('pink-chip') && $('#25').hasClass('pink-chip') && $('#18').hasClass('pink-chip') && $('#11').hasClass('pink-chip') ||
      $('#25').hasClass('pink-chip') && $('#18').hasClass('pink-chip') && $('#11').hasClass('pink-chip') && $('#4').hasClass('pink-chip') ||
      // vertical column f
      $('#40').hasClass('pink-chip') && $('#33').hasClass('pink-chip') && $('#26').hasClass('pink-chip') && $('#19').hasClass('pink-chip') ||
      $('#33').hasClass('pink-chip') && $('#26').hasClass('pink-chip') && $('#19').hasClass('pink-chip') && $('#12').hasClass('pink-chip') ||
      $('#26').hasClass('pink-chip') && $('#19').hasClass('pink-chip') && $('#12').hasClass('pink-chip') && $('#5').hasClass('pink-chip') ||
      // vertical column g
      $('#41').hasClass('pink-chip') && $('#34').hasClass('pink-chip') && $('#27').hasClass('pink-chip') && $('#20').hasClass('pink-chip') ||
      $('#34').hasClass('pink-chip') && $('#27').hasClass('pink-chip') && $('#20').hasClass('pink-chip') && $('#13').hasClass('pink-chip') ||
      $('#27').hasClass('pink-chip') && $('#20').hasClass('pink-chip') && $('#13').hasClass('pink-chip') && $('#6').hasClass('pink-chip') ||
      // Diagonal R
      $('#21').hasClass('pink-chip') && $('#15').hasClass('pink-chip') && $('#9').hasClass('pink-chip') && $('#3').hasClass('pink-chip') ||
      $('#28').hasClass('pink-chip') && $('#22').hasClass('pink-chip') && $('#16').hasClass('pink-chip') && $('#10').hasClass('pink-chip') ||
      $('#22').hasClass('pink-chip') && $('#16').hasClass('pink-chip') && $('#10').hasClass('pink-chip') && $('#4').hasClass('pink-chip') ||
      $('#35').hasClass('pink-chip') && $('#29').hasClass('pink-chip') && $('#23').hasClass('pink-chip') && $('#17').hasClass('pink-chip') ||
      $('#29').hasClass('pink-chip') && $('#23').hasClass('pink-chip') && $('#17').hasClass('pink-chip') && $('#11').hasClass('pink-chip') ||
      $('#23').hasClass('pink-chip') && $('#17').hasClass('pink-chip') && $('#11').hasClass('pink-chip') && $('#5').hasClass('pink-chip') ||
      $('#36').hasClass('pink-chip') && $('#30').hasClass('pink-chip') && $('#24').hasClass('pink-chip') && $('#18').hasClass('pink-chip') ||
      $('#30').hasClass('pink-chip') && $('#24').hasClass('pink-chip') && $('#18').hasClass('pink-chip') && $('#12').hasClass('pink-chip') ||
      $('#24').hasClass('pink-chip') && $('#18').hasClass('pink-chip') && $('#12').hasClass('pink-chip') && $('#6').hasClass('pink-chip') ||
      $('#37').hasClass('pink-chip') && $('#31').hasClass('pink-chip') && $('#25').hasClass('pink-chip') && $('#19').hasClass('pink-chip') ||
      $('#31').hasClass('pink-chip') && $('#25').hasClass('pink-chip') && $('#19').hasClass('pink-chip') && $('#13').hasClass('pink-chip') ||
      $('#38').hasClass('pink-chip') && $('#32').hasClass('pink-chip') && $('#26').hasClass('pink-chip') && $('#20').hasClass('pink-chip') ||
      // Diagonal L
      $('#38').hasClass('pink-chip') && $('#30').hasClass('pink-chip') && $('#22').hasClass('pink-chip') && $('#14').hasClass('pink-chip') ||
      $('#39').hasClass('pink-chip') && $('#31').hasClass('pink-chip') && $('#23').hasClass('pink-chip') && $('#15').hasClass('pink-chip') ||
      $('#31').hasClass('pink-chip') && $('#23').hasClass('pink-chip') && $('#15').hasClass('pink-chip') && $('#7').hasClass('pink-chip') ||
      $('#40').hasClass('pink-chip') && $('#32').hasClass('pink-chip') && $('#24').hasClass('pink-chip') && $('#16').hasClass('pink-chip') ||
      $('#32').hasClass('pink-chip') && $('#24').hasClass('pink-chip') && $('#16').hasClass('pink-chip') && $('#8').hasClass('pink-chip') ||
      $('#24').hasClass('pink-chip') && $('#16').hasClass('pink-chip') && $('#8').hasClass('pink-chip') && $('#0').hasClass('pink-chip') ||
      $('#41').hasClass('pink-chip') && $('#33').hasClass('pink-chip') && $('#25').hasClass('pink-chip') && $('#17').hasClass('pink-chip') ||
      $('#33').hasClass('pink-chip') && $('#25').hasClass('pink-chip') && $('#17').hasClass('pink-chip') && $('#9').hasClass('pink-chip') ||
      $('#25').hasClass('pink-chip') && $('#17').hasClass('pink-chip') && $('#9').hasClass('pink-chip') && $('#1').hasClass('pink-chip') ||
      $('#34').hasClass('pink-chip') && $('#26').hasClass('pink-chip') && $('#18').hasClass('pink-chip') && $('#10').hasClass('pink-chip') ||
      $('#26').hasClass('pink-chip') && $('#18').hasClass('pink-chip') && $('#10').hasClass('pink-chip') && $('#2').hasClass('pink-chip') ||
      $('#27').hasClass('pink-chip') && $('#19').hasClass('pink-chip') && $('#11').hasClass('pink-chip') && $('#3').hasClass('pink-chip')) {
        $nextTurn.text("Player Two Wins!!");
        $nextTurn.css('color', 'white');
        $nextTurn.addClass('pink-wins');
  } else {
    console.log('There is a shorter way to do this');
  }

}; // --> end $checkingWins function
  checkWins();

//Reset button
  $restartGame.on('click', function() {
  $board.empty(); // this will reset the board when restart button is clicked
  createBoard(); // this will run the createBoard again
  $nextTurn.remove('p'); // will remove player names
}); // --> end of function







});//---> DO NOT TOUCH!













/*Psuedo code
create a board using html and css (divs)  - done
create rows of 6 down and 7 across total of 42 circles - done
circle should fill with color when players click desired spot - done
each player should have different color (player 1 - pink player 2 - blue ) - done
check for winner when player makes a row of same color
pop up a winner message when winner is found
add buttons that will drop color into chosen slots - done
add reset game button*/
