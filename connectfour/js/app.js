

$(() => {

  // console.log('hi - jQuery is working for connect four!');

// SELECTING ELEMENTS
  const $board = $('#gameboard'); // grabbing the board id

  const $clearButton = $('#clear-board'); // grabbing the clear-board id

  const $nextTurn = $('p'); // grabbing p tag from the html

  let toggle = true; // global variable set to true

  const $circleClass = $('.circle'); // grabbing the circle class


// 3. SWITCH TURNS [X]
  const toggleFunction = function(column) {
    console.log('testing toggleFunction'); // click listener is working

    if (toggle) {
      $(column).addClass('light-blue-chip'); // if toggle is true, it will add the class of teal-token to the $newBoardDiv created below

      $nextTurn.text("Player Two"); // when light-blue chip is added to the div, the p tag will change to player 2 (pink) turn
      $nextTurn.css('color', '#FC89AC'); // changing the color of the p tag to pink
    } else {
      $(column).addClass('pink-chip'); // if toggle is false, it will add the class of the pink-chip to the $newBoardDiv

      $nextTurn.text("Player One"); // when pink-chip is added to the div, the p tag will change to player 1 (light blue) turn
      $nextTurn.css('color', '#43C6DB'); // changing the color of the p tag to light blue
    };

      toggle = !toggle; // alternates the turns between teal and blue

      // checkingWins(); // calls the checkingWins function to see who has won

  };// --> closing toggleFunction function



// 1. CREATING CONNECT FOUR BOARD [X]
  const createBoard = function() {
    for (let i = 0; i < 42; i++) { // I want to create 42 white circles that when clicked will change to teal/blue
      const $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
        $newBoardDiv.addClass('circle'); // adding the class circle to the new board div
        $newBoardDiv.addClass('shadow'); // adding the class shadow to the new board div
        $newBoardDiv.attr('id', i); // adding ids with numbers to the circles
        $board.append($newBoardDiv); // appending the $newBoardDiv that goes inside the board div
      };
  }; // --> closing createBoard function

  createBoard(); // calling createBoard to create the board when the page loads



// 2. MAKING THE PLAY HERE BUTTONS CLICKABLE [X]
// creating arrays for the columns
  const column1 = [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')];
  const column2 = [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')];
  const column3 = [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')];
  const column4 = [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')];
  const column5 = [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')];
  const column6 = [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#5')];
  const column7 = [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#6')];


// grabbing the 'play here' buttons from the html
  const $button1Id = $('#button1');
  const $button2Id = $('#button2');
  const $button3Id = $('#button3');
  const $button4Id = $('#button4');
  const $button5Id = $('#button5');
  const $button6Id = $('#button6');
  const $button7Id = $('#button7');


// creating a function to make the 'play here' buttons clickable
  const clickButtons = function () {

    $button1Id.on('click', function(){ // when I click on this button, the for loop will run
      for (let i = 0; i < column1.length; i++) {
        if ($(column1[i]).hasClass('light-blue-chip') || column1[i].hasClass('pink-chip')) { // if it has a teal or blue token, do nothing
        } else { // else, run the toggleFunction which will switch from teal/blue token
          toggleFunction(column1[i]); // this makes the token start teal because toggle is set to true
          break; // this will stop the column to be filled out completely
        }
      }
    }); // --> $button1Id click function ends

    $button2Id.on('click', function(){
      for (let i = 0; i < column2.length; i++) {
        if (column2[i].hasClass('light-blue-chip') || column2[i].hasClass('pink-chip')) {
        } else {
          toggleFunction(column2[i]);
          break;
        }
      }
    }); // --> $button2Id click function ends

    $button3Id.on('click', function(){
      for (let i = 0; i < column3.length; i++) {
        if (column3[i].hasClass('light-blue-chip') || column3[i].hasClass('pink-chip')) {
          console.log('space taken');
        } else {
          toggleFunction(column3[i]);
          break;
        }
      }
    }); // --> $button3Id click function ends

    $button4Id.on('click', function(){
      for (let i = 0; i < column4.length; i++) {
        if (column4[i].hasClass('light-blue-chip') || column4[i].hasClass('pink-chip')) {
          console.log('space taken');
        } else {
          toggleFunction(column4[i]);
          break;
        }
      }
    }); // --> $button4Id click function ends

    $button5Id.on('click', function(){
      for (let i = 0; i < column5.length; i++) {
        if (column5[i].hasClass('light-blue-chip') || column5[i].hasClass('blue-pink')) {
          console.log('space taken');
        } else {
          toggleFunction(column5[i]);
          break;
        }
      }
    }); // --> $button5Id click function ends

    $button6Id.on('click', function(){
      for (let i = 0; i < column6.length; i++) {
        if (column6[i].hasClass('light-blue-chip') || column6[i].hasClass('pink-chip')) {
          console.log('space taken');
        } else {
          toggleFunction(column6[i]);
          break;
        }
      }
    }); // --> $button6Id click function ends

    $button7Id.on('click', function(){
      for (let i = 0; i < column7.length; i++) {
        if (column7[i].hasClass('light-blue-chip') || column7[i].hasClass('pink-chip')) {
          console.log('space taken');
        } else {
          toggleFunction(column7[i]);
          break;
        }
      }
    }); // --> $button7Id click function ends

  }; // --> clickButtons function ends

  clickButtons(); // calling the clickButtons function so the user can click the x  buttons on top of the page


});//---> DO NOT TOUCH!













/*Psuedo code
create a board using html and css (divs possibly)
create rows of 6 down and 7 across total of 42 circles
circle should fill with color when player clicks desired spot
fill with purple when player 2 clicks desired spot
each player should have different color (player 1 - pink player 2 - purple )
check for winner when player makes a row of same color
pop up a winner message when winner is found
add buttons that will drop color into chosen slots
add reset game button*/
