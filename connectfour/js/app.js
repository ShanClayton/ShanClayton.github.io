

$(() => {

  // console.log('hi - jQuery is working for connect four!');

// SELECTING ELEMENTS
  const $board = $('#gameboard'); // grabbing the board id

  const $restartGame = $('#restart'); // grabbing the restart id

  const $nextTurn = $('p'); // grabbing p tag from html

  const $circleClass = $('.circle'); // grabbing the circle class

  let toggle = true; // variable set to true

// Switching Turns (3) - when player one puts chip into slot, game switches to player two
  const chipFunction = function(column) {
    console.log('testing chipFunction'); // click listener is working

    if (toggle) {
      $(column).addClass('yellow-chip'); // if toggle is true, it will add the class of yellow to the $gameBoardDiv created below

      $nextTurn.text("Player One"); // when yellow chip is added to the div, the p tag will change to player 2 (green) turn
      $nextTurn.css('color', '#F3F315'); // changing the color of the p tag to yellow
    } else {
      $(column).addClass('green-chip'); // if toggle is false, it will add the class of the green-chip to the $gameBoardDiv

      $nextTurn.text("Player Two"); // when green-chip is added to the div, the p tag will change to player 1 (yellow) turn
      $nextTurn.css('color', '#39ff14'); // changing the color of the p tag to green
    };

      toggle = !toggle; // alternates  turns between yellow and green

      checkWins(); // calls the checkWins function to see who has won

  };// --> closing chipFunction function



//  Creating the gameboard (1)
  const createBoard = function() {
    for (let i = 0; i < 42; i++) { // create 42 white circles that when clicked will change to yellow to green
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


// grabbing the X buttons from html
  const $button1Id = $('#button1');
  const $button2Id = $('#button2');
  const $button3Id = $('#button3');
  const $button4Id = $('#button4');
  const $button5Id = $('#button5');
  const $button6Id = $('#button6');
  const $button7Id = $('#button7');


// create a function to make the top  buttons clickable (4)
  const clickBtns = function () {

    $button1Id.on('click', function(){ // when button is clicked, the for loop will run
      for (let i = 0; i < column1.length; i++) {
        if ($(column1[i]).hasClass('yellow-chip') || column1[i].hasClass('green-chip')) { // if it has a yellow or green button do nothing
        } else { // else, run the chipFunction which will switch from yellow to green chip
          chipFunction(column1[i]); // this makes the chip start with player one (yellow) because toggle is set to true
          break; // this will stop the column from being filled out completely
        }
      }
    }); // -->  click function ends

    $button2Id.on('click', function(){
      for (let i = 0; i < column2.length; i++) {
        if (column2[i].hasClass('yellow-chip') || column2[i].hasClass('green-chip')) {
        } else {
          chipFunction(column2[i]);
          break;
        }
      }
    }); // -->  click function ends

    $button3Id.on('click', function(){
      for (let i = 0; i < column3.length; i++) {
        if (column3[i].hasClass('yellow-chip') || column3[i].hasClass('green-chip')) {
        } else {
          chipFunction(column3[i]);
          break;
        }
      }
    }); // -->  click function ends

    $button4Id.on('click', function(){
      for (let i = 0; i < column4.length; i++) {
        if (column4[i].hasClass('yellow-chip') || column4[i].hasClass('green-chip')) {
        } else {
          chipFunction(column4[i]);
          break;
        }
      }
    }); // -->  click function ends

    $button5Id.on('click', function(){
      for (let i = 0; i < column5.length; i++) {
        if (column5[i].hasClass('yellow-chip') || column5[i].hasClass('green-chip')) {
        } else {
          chipFunction(column5[i]);
          break;
        }
      }
    }); // --> click function ends

    $button6Id.on('click', function(){
      for (let i = 0; i < column6.length; i++) {
        if (column6[i].hasClass('yellow-chip') || column6[i].hasClass('green-chip')) {
        } else {
          chipFunction(column6[i]);
          break;
        }
      }
    }); // --> click function ends

    $button7Id.on('click', function(){
      for (let i = 0; i < column7.length; i++) {
        if (column7[i].hasClass('yellow-chip') || column7[i].hasClass('green-chip')) {
        } else {
          chipFunction(column7[i]);
          break;
        }
      }
    }); // --> click function ends

  }; // --> clickBtns function ends

  clickBtns(); // calling the clickButtons function so the user can click the x  buttons on top of the page

//CHECK WINS and commiting DRY :( (5)
  const checkWins = function() {
  // horizontal row a
      if ($('#35').hasClass('yellow-chip') && $('#36').hasClass('yellow-chip') && $('#37').hasClass('yellow-chip') && $('#38').hasClass('yellow-chip') ||
      $('#36').hasClass('yellow-chip') && $('#37').hasClass('yellow-chip') && $('#38').hasClass('yellow-chip') && $('#39').hasClass('yellow-chip') ||
      $('#37').hasClass('yellow-chip') && $('#38').hasClass('yellow-chip') && $('#39').hasClass('yellow-chip') && $('#40').hasClass('yellow-chip') ||
      $('#38').hasClass('yellow-chip') && $('#39').hasClass('yellow-chip') && $('#40').hasClass('yellow-chip') && $('#41').hasClass('yellow-chip') ||
      // horizontal row b
      $('#28').hasClass('yellow-chip') && $('#29').hasClass('yellow-chip') && $('#30').hasClass('yellow-chip') && $('#31').hasClass('yellow-chip') ||
      $('#29').hasClass('yellow-chip') && $('#30').hasClass('yellow-chip') && $('#31').hasClass('yellow-chip') && $('#32').hasClass('yellow-chip') ||
      $('#30').hasClass('yellow-chip') && $('#31').hasClass('yellow-chip') && $('#32').hasClass('yellow-chip') && $('#33').hasClass('yellow-chip') ||
      $('#31').hasClass('yellow-chip') && $('#32').hasClass('yellow-chip') && $('#33').hasClass('yellow-chip') && $('#34').hasClass('yellow-chip') ||
      // horizontal row c
      $('#21').hasClass('yellow-chip') && $('#22').hasClass('yellow-chip') && $('#23').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') ||
      $('#22').hasClass('yellow-chip') && $('#23').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') ||
      $('#23').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') && $('#26').hasClass('yellow-chip') ||
      $('#24').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') && $('#26').hasClass('yellow-chip') && $('#27').hasClass('yellow-chip') ||
      // horizontal row d
      $('#14').hasClass('yellow-chip') && $('#15').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') ||
      $('#15').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') ||
      $('#16').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') && $('#19').hasClass('yellow-chip') ||
      $('#17').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') && $('#19').hasClass('yellow-chip') && $('#20').hasClass('yellow-chip') ||
      // horizontal row e
      $('#7').hasClass('yellow-chip') && $('#8').hasClass('yellow-chip') && $('#9').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') ||
      $('#8').hasClass('yellow-chip') && $('#9').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') && $('#11').hasClass('yellow-chip') ||
      $('#9').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') && $('#11').hasClass('yellow-chip') && $('#12').hasClass('yellow-chip') ||
      $('#10').hasClass('yellow-chip') && $('#11').hasClass('yellow-chip') && $('#12').hasClass('yellow-chip') && $('#13').hasClass('yellow-chip') ||
      // horizontal row f
      $('#0').hasClass('yellow-chip') && $('#1').hasClass('yellow-chip') && $('#2').hasClass('yellow-chip') && $('#3').hasClass('yellow-chip') ||
      $('#1').hasClass('yellow-chip') && $('#2').hasClass('yellow-chip') && $('#3').hasClass('yellow-chip') && $('#4').hasClass('yellow-chip') ||
      $('#2').hasClass('yellow-chip') && $('#3').hasClass('yellow-chip') && $('#4').hasClass('yellow-chip') && $('#5').hasClass('yellow-chip') ||
      $('#3').hasClass('yellow-chip') && $('#4').hasClass('yellow-chip') && $('#5').hasClass('yellow-chip') && $('#6').hasClass('yellow-chip') ||
      // vertical column a
      $('#35').hasClass('yellow-chip') && $('#28').hasClass('yellow-chip') && $('#21').hasClass('yellow-chip') && $('#14').hasClass('yellow-chip') ||
      $('#28').hasClass('yellow-chip') && $('#21').hasClass('yellow-chip') && $('#14').hasClass('yellow-chip') && $('#7').hasClass('yellow-chip') ||
      $('#21').hasClass('yellow-chip') && $('#14').hasClass('yellow-chip') && $('#7').hasClass('yellow-chip') && $('#0').hasClass('yellow-chip') ||
      // vertical column b
      $('#36').hasClass('yellow-chip') && $('#29').hasClass('yellow-chip') && $('#22').hasClass('yellow-chip') && $('#15').hasClass('yellow-chip') ||
      $('#29').hasClass('yellow-chip') && $('#22').hasClass('yellow-chip') && $('#15').hasClass('yellow-chip') && $('#8').hasClass('yellow-chip') ||
      $('#22').hasClass('yellow-chip') && $('#15').hasClass('yellow-chip') && $('#8').hasClass('yellow-chip') && $('#1').hasClass('yellow-chip') ||
      // vertical column c
      $('#37').hasClass('yellow-chip') && $('#30').hasClass('yellow-chip') && $('#23').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') ||
      $('#30').hasClass('yellow-chip') && $('#23').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') && $('#9').hasClass('yellow-chip') ||
      $('#23').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') && $('#9').hasClass('yellow-chip') && $('#2').hasClass('yellow-chip') ||
      // vertical column d
      $('#38').hasClass('yellow-chip') && $('#31').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') ||
      $('#31').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') ||
      $('#24').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') && $('#3').hasClass('yellow-chip') ||
      // vertical column e
      $('#39').hasClass('yellow-chip') && $('#32').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') ||
      $('#32').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') && $('#11').hasClass('yellow-chip') ||
      $('#25').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') && $('#11').hasClass('yellow-chip') && $('#4').hasClass('yellow-chip') ||
      // vertical column f
      $('#40').hasClass('yellow-chip') && $('#33').hasClass('yellow-chip') && $('#26').hasClass('yellow-chip') && $('#19').hasClass('yellow-chip') ||
      $('#33').hasClass('yellow-chip') && $('#26').hasClass('yellow-chip') && $('#19').hasClass('yellow-chip') && $('#12').hasClass('yellow-chip') ||
      $('#26').hasClass('yellow-chip') && $('#19').hasClass('yellow-chip') && $('#12').hasClass('yellow-chip') && $('#5').hasClass('yellow-chip') ||
      // vertical column g
      $('#41').hasClass('yellow-chip') && $('#34').hasClass('yellow-chip') && $('#27').hasClass('yellow-chip') && $('#20').hasClass('yellow-chip') ||
      $('#34').hasClass('yellow-chip') && $('#27').hasClass('yellow-chip') && $('#20').hasClass('yellow-chip') && $('#13').hasClass('yellow-chip') ||
      $('#27').hasClass('yellow-chip') && $('#20').hasClass('yellow-chip') && $('#13').hasClass('yellow-chip') && $('#6').hasClass('yellow-chip') ||
      // Diagonal R
      $('#21').hasClass('yellow-chip') && $('#15').hasClass('yellow-chip') && $('#9').hasClass('yellow-chip') && $('#3').hasClass('yellow-chip') ||
      $('#28').hasClass('yellow-chip') && $('#22').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') ||
      $('#22').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') && $('#4').hasClass('yellow-chip') ||
      $('#35').hasClass('yellow-chip') && $('#29').hasClass('yellow-chip') && $('#23').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') ||
      $('#29').hasClass('yellow-chip') && $('#23').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') && $('#11').hasClass('yellow-chip') ||
      $('#23').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') && $('#11').hasClass('yellow-chip') && $('#5').hasClass('yellow-chip') ||
      $('#36').hasClass('yellow-chip') && $('#30').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') ||
      $('#30').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') && $('#12').hasClass('yellow-chip') ||
      $('#24').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') && $('#12').hasClass('yellow-chip') && $('#6').hasClass('yellow-chip') ||
      $('#37').hasClass('yellow-chip') && $('#31').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') && $('#19').hasClass('yellow-chip') ||
      $('#31').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') && $('#19').hasClass('yellow-chip') && $('#13').hasClass('yellow-chip') ||
      $('#38').hasClass('yellow-chip') && $('#32').hasClass('yellow-chip') && $('#26').hasClass('yellow-chip') && $('#20').hasClass('yellow-chip') ||
      // Diagonal L
      $('#38').hasClass('yellow-chip') && $('#30').hasClass('yellow-chip') && $('#22').hasClass('yellow-chip') && $('#14').hasClass('yellow-chip') ||
      $('#39').hasClass('yellow-chip') && $('#31').hasClass('yellow-chip') && $('#23').hasClass('yellow-chip') && $('#15').hasClass('yellow-chip') ||
      $('#31').hasClass('yellow-chip') && $('#23').hasClass('yellow-chip') && $('#15').hasClass('yellow-chip') && $('#7').hasClass('yellow-chip') ||
      $('#40').hasClass('yellow-chip') && $('#32').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') ||
      $('#32').hasClass('yellow-chip') && $('#24').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') && $('#8').hasClass('yellow-chip') ||
      $('#24').hasClass('yellow-chip') && $('#16').hasClass('yellow-chip') && $('#8').hasClass('yellow-chip') && $('#0').hasClass('yellow-chip') ||
      $('#41').hasClass('yellow-chip') && $('#33').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') ||
      $('#33').hasClass('yellow-chip') && $('#25').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') && $('#9').hasClass('yellow-chip') ||
      $('#25').hasClass('yellow-chip') && $('#17').hasClass('yellow-chip') && $('#9').hasClass('yellow-chip') && $('#1').hasClass('yellow-chip') ||
      $('#34').hasClass('yellow-chip') && $('#26').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') ||
      $('#26').hasClass('yellow-chip') && $('#18').hasClass('yellow-chip') && $('#10').hasClass('yellow-chip') && $('#2').hasClass('yellow-chip') ||
      $('#27').hasClass('yellow-chip') && $('#19').hasClass('yellow-chip') && $('#11').hasClass('yellow-chip') && $('#3').hasClass('yellow-chip')) {
          $nextTurn.text("Player One Wins!!");
          $nextTurn.css('color','#F3F315');
          $nextTurn.addClass('yellow-wins');

  } else if (
      // horizontal row a
      $('#35').hasClass('green-chip') && $('#36').hasClass('green-chip') && $('#37').hasClass('green-chip') && $('#38').hasClass('green-chip') ||
      $('#36').hasClass('green-chip') && $('#37').hasClass('green-chip') && $('#38').hasClass('green-chip') && $('#39').hasClass('green-chip') ||
      $('#37').hasClass('green-chip') && $('#38').hasClass('green-chip') && $('#39').hasClass('green-chip') && $('#40').hasClass('green-chip') ||
      $('#38').hasClass('green-chip') && $('#39').hasClass('green-chip') && $('#40').hasClass('green-chip') && $('#41').hasClass('green-chip') ||
      // horizontal row b
      $('#28').hasClass('green-chip') && $('#29').hasClass('green-chip') && $('#30').hasClass('green-chip') && $('#31').hasClass('green-chip') ||
      $('#29').hasClass('green-chip') && $('#30').hasClass('green-chip') && $('#31').hasClass('green-chip') && $('#32').hasClass('green-chip') ||
      $('#30').hasClass('green-chip') && $('#31').hasClass('green-chip') && $('#32').hasClass('green-chip') && $('#33').hasClass('green-chip') ||
      $('#31').hasClass('green-chip') && $('#32').hasClass('green-chip') && $('#33').hasClass('green-chip') && $('#34').hasClass('green-chip') ||
      // horizontal row c
      $('#21').hasClass('green-chip') && $('#22').hasClass('green-chip') && $('#23').hasClass('green-chip') && $('#24').hasClass('green-chip') ||
      $('#22').hasClass('green-chip') && $('#23').hasClass('green-chip') && $('#24').hasClass('green-chip') && $('#25').hasClass('green-chip') ||
      $('#23').hasClass('green-chip') && $('#24').hasClass('green-chip') && $('#25').hasClass('green-chip') && $('#26').hasClass('green-chip') ||
      $('#24').hasClass('green-chip') && $('#25').hasClass('green-chip') && $('#26').hasClass('green-chip') && $('#27').hasClass('green-chip') ||
      // horizontal row d
      $('#14').hasClass('green-chip') && $('#15').hasClass('green-chip') && $('#16').hasClass('green-chip') && $('#17').hasClass('green-chip') ||
      $('#15').hasClass('green-chip') && $('#16').hasClass('green-chip') && $('#17').hasClass('green-chip') && $('#18').hasClass('green-chip') ||
      $('#16').hasClass('green-chip') && $('#17').hasClass('green-chip') && $('#18').hasClass('green-chip') && $('#19').hasClass('green-chip') ||
      $('#17').hasClass('green-chip') && $('#18').hasClass('green-chip') && $('#19').hasClass('green-chip') && $('#20').hasClass('green-chip') ||
      // horizontal row e
      $('#7').hasClass('green-chip') && $('#8').hasClass('green-chip') && $('#9').hasClass('green-chip') && $('#10').hasClass('green-chip') ||
      $('#8').hasClass('green-chip') && $('#9').hasClass('green-chip') && $('#10').hasClass('green-chip') && $('#11').hasClass('green-chip') ||
      $('#9').hasClass('green-chip') && $('#10').hasClass('green-chip') && $('#11').hasClass('green-chip') && $('#12').hasClass('green-chip') ||
      $('#10').hasClass('green-chip') && $('#11').hasClass('green-chip') && $('#12').hasClass('green-chip') && $('#13').hasClass('green-chip') ||
      // horizontal row f
      $('#0').hasClass('green-chip') && $('#1').hasClass('green-chip') && $('#2').hasClass('green-chip') && $('#3').hasClass('green-chip') ||
      $('#1').hasClass('green-chip') && $('#2').hasClass('green-chip') && $('#3').hasClass('green-chip') && $('#4').hasClass('green-chip') ||
      $('#2').hasClass('green-chip') && $('#3').hasClass('green-chip') && $('#4').hasClass('green-chip') && $('#5').hasClass('green-chip') ||
      $('#3').hasClass('green-chip') && $('#4').hasClass('green-chip') && $('#5').hasClass('green-chip') && $('#6').hasClass('green-chip') ||
      // vertical column a
      $('#35').hasClass('green-chip') && $('#28').hasClass('green-chip') && $('#21').hasClass('green-chip') && $('#14').hasClass('green-chip') ||
      $('#28').hasClass('green-chip') && $('#21').hasClass('green-chip') && $('#14').hasClass('green-chip') && $('#7').hasClass('green-chip') ||
      $('#21').hasClass('green-chip') && $('#14').hasClass('green-chip') && $('#7').hasClass('green-chip') && $('#0').hasClass('green-chip') ||
      // vertical column b
      $('#36').hasClass('green-chip') && $('#29').hasClass('green-chip') && $('#22').hasClass('green-chip') && $('#15').hasClass('green-chip') ||
      $('#29').hasClass('green-chip') && $('#22').hasClass('green-chip') && $('#15').hasClass('green-chip') && $('#8').hasClass('green-chip') ||
      $('#22').hasClass('green-chip') && $('#15').hasClass('green-chip') && $('#8').hasClass('green-chip') && $('#1').hasClass('green-chip') ||
      // vertical column c
      $('#37').hasClass('green-chip') && $('#30').hasClass('green-chip') && $('#23').hasClass('green-chip') && $('#16').hasClass('green-chip') ||
      $('#30').hasClass('green-chip') && $('#23').hasClass('green-chip') && $('#16').hasClass('green-chip') && $('#9').hasClass('green-chip') ||
      $('#23').hasClass('green-chip') && $('#16').hasClass('green-chip') && $('#9').hasClass('green-chip') && $('#2').hasClass('green-chip') ||
      // vertical column d
      $('#38').hasClass('green-chip') && $('#31').hasClass('green-chip') && $('#24').hasClass('green-chip') && $('#17').hasClass('green-chip') ||
      $('#31').hasClass('green-chip') && $('#24').hasClass('green-chip') && $('#17').hasClass('green-chip') && $('#10').hasClass('green-chip') ||
      $('#24').hasClass('green-chip') && $('#17').hasClass('green-chip') && $('#10').hasClass('green-chip') && $('#3').hasClass('green-chip') ||
      // vertical column e
      $('#39').hasClass('green-chip') && $('#32').hasClass('green-chip') && $('#25').hasClass('green-chip') && $('#18').hasClass('green-chip') ||
      $('#32').hasClass('green-chip') && $('#25').hasClass('green-chip') && $('#18').hasClass('green-chip') && $('#11').hasClass('green-chip') ||
      $('#25').hasClass('green-chip') && $('#18').hasClass('green-chip') && $('#11').hasClass('green-chip') && $('#4').hasClass('green-chip') ||
      // vertical column f
      $('#40').hasClass('green-chip') && $('#33').hasClass('green-chip') && $('#26').hasClass('green-chip') && $('#19').hasClass('green-chip') ||
      $('#33').hasClass('green-chip') && $('#26').hasClass('green-chip') && $('#19').hasClass('green-chip') && $('#12').hasClass('green-chip') ||
      $('#26').hasClass('green-chip') && $('#19').hasClass('green-chip') && $('#12').hasClass('green-chip') && $('#5').hasClass('green-chip') ||
      // vertical column g
      $('#41').hasClass('green-chip') && $('#34').hasClass('green-chip') && $('#27').hasClass('green-chip') && $('#20').hasClass('green-chip') ||
      $('#34').hasClass('green-chip') && $('#27').hasClass('green-chip') && $('#20').hasClass('green-chip') && $('#13').hasClass('green-chip') ||
      $('#27').hasClass('green-chip') && $('#20').hasClass('green-chip') && $('#13').hasClass('green-chip') && $('#6').hasClass('green-chip') ||
      // Diagonal R
      $('#21').hasClass('green-chip') && $('#15').hasClass('green-chip') && $('#9').hasClass('green-chip') && $('#3').hasClass('green-chip') ||
      $('#28').hasClass('green-chip') && $('#22').hasClass('green-chip') && $('#16').hasClass('green-chip') && $('#10').hasClass('green-chip') ||
      $('#22').hasClass('green-chip') && $('#16').hasClass('green-chip') && $('#10').hasClass('green-chip') && $('#4').hasClass('green-chip') ||
      $('#35').hasClass('green-chip') && $('#29').hasClass('green-chip') && $('#23').hasClass('green-chip') && $('#17').hasClass('green-chip') ||
      $('#29').hasClass('green-chip') && $('#23').hasClass('green-chip') && $('#17').hasClass('green-chip') && $('#11').hasClass('green-chip') ||
      $('#23').hasClass('green-chip') && $('#17').hasClass('green-chip') && $('#11').hasClass('green-chip') && $('#5').hasClass('green-chip') ||
      $('#36').hasClass('green-chip') && $('#30').hasClass('green-chip') && $('#24').hasClass('green-chip') && $('#18').hasClass('green-chip') ||
      $('#30').hasClass('green-chip') && $('#24').hasClass('green-chip') && $('#18').hasClass('green-chip') && $('#12').hasClass('green-chip') ||
      $('#24').hasClass('green-chip') && $('#18').hasClass('green-chip') && $('#12').hasClass('green-chip') && $('#6').hasClass('green-chip') ||
      $('#37').hasClass('green-chip') && $('#31').hasClass('green-chip') && $('#25').hasClass('green-chip') && $('#19').hasClass('green-chip') ||
      $('#31').hasClass('green-chip') && $('#25').hasClass('green-chip') && $('#19').hasClass('green-chip') && $('#13').hasClass('green-chip') ||
      $('#38').hasClass('green-chip') && $('#32').hasClass('green-chip') && $('#26').hasClass('green-chip') && $('#20').hasClass('green-chip') ||
      // Diagonal L
      $('#38').hasClass('green-chip') && $('#30').hasClass('green-chip') && $('#22').hasClass('green-chip') && $('#14').hasClass('green-chip') ||
      $('#39').hasClass('green-chip') && $('#31').hasClass('green-chip') && $('#23').hasClass('green-chip') && $('#15').hasClass('green-chip') ||
      $('#31').hasClass('green-chip') && $('#23').hasClass('green-chip') && $('#15').hasClass('green-chip') && $('#7').hasClass('green-chip') ||
      $('#40').hasClass('green-chip') && $('#32').hasClass('green-chip') && $('#24').hasClass('green-chip') && $('#16').hasClass('green-chip') ||
      $('#32').hasClass('green-chip') && $('#24').hasClass('green-chip') && $('#16').hasClass('green-chip') && $('#8').hasClass('green-chip') ||
      $('#24').hasClass('green-chip') && $('#16').hasClass('green-chip') && $('#8').hasClass('green-chip') && $('#0').hasClass('green-chip') ||
      $('#41').hasClass('green-chip') && $('#33').hasClass('green-chip') && $('#25').hasClass('green-chip') && $('#17').hasClass('green-chip') ||
      $('#33').hasClass('green-chip') && $('#25').hasClass('green-chip') && $('#17').hasClass('green-chip') && $('#9').hasClass('green-chip') ||
      $('#25').hasClass('green-chip') && $('#17').hasClass('green-chip') && $('#9').hasClass('green-chip') && $('#1').hasClass('green-chip') ||
      $('#34').hasClass('green-chip') && $('#26').hasClass('green-chip') && $('#18').hasClass('green-chip') && $('#10').hasClass('green-chip') ||
      $('#26').hasClass('green-chip') && $('#18').hasClass('green-chip') && $('#10').hasClass('green-chip') && $('#2').hasClass('green-chip') ||
      $('#27').hasClass('green-chip') && $('#19').hasClass('green-chip') && $('#11').hasClass('green-chip') && $('#3').hasClass('green-chip')) {
        $nextTurn.text("Player Two Wins!!");
        $nextTurn.css('color','#4CC417');
        $nextTurn.addClass('green-wins');
  } else {
    console.log('There is a shorter way to do this');
  }

}; // --> end $checkWins function
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
each player should have different color (player 1 - yellow player 2 - green ) - done
check for winner when player makes a row of same color - done
pop up a winner message when winner is found - done
add buttons that will drop color into chosen slots - done
add reset game button - done */
