

$(() => {

  // console.log('hi - jQuery is working for connect four!');

// SELECTING ELEMENTS
  const $board = $('#gameboard'); // grabbing the board id

  const $clearButton = $('#clear-board'); // grabbing the clear-board id

  const $nextTurn = $('p'); // grabbing p tag from the html

  let toggle = true; // global variable set to true

  const $circleClass = $('.circle'); // grabbing the circle class


// Switching Turns (3)
  const toggleFunction = function(column) {
    console.log('testing toggleFunction'); // click listener is working

    if (toggle) {
      $(column).addClass('light-blue-chip'); // if toggle is true, it will add the class of light-blue chip to the $newBoardDiv created below

      $nextTurn.text("Player Two"); // when light-blue chip is added to the div, the p tag will change to player 2 (pink) turn
      $nextTurn.css('color', '#FC89AC'); // changing the color of the p tag to pink
    } else {
      $(column).addClass('pink-chip'); // if toggle is false, it will add the class of the pink-chip to the $newBoardDiv

      $nextTurn.text("Player One"); // when pink-chip is added to the div, the p tag will change to player 1 (light blue) turn
      $nextTurn.css('color', '#43C6DB'); // changing the color of the p tag to light blue
    };

      toggle = !toggle; // alternates the turns between light blue and pink

      checkWinners(); // calls the checkingWins function to see who has won

  };// --> closing toggleFunction function



//  Creating gameboard (1)
  const createBoard = function() {
    for (let i = 0; i < 42; i++) { // create 42 white circles that when clicked will change to blue to pink
      const $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
        $newBoardDiv.addClass('circle'); // adding the class circle to the new board div
        $newBoardDiv.attr('id', i); // adding ids with numbers to the circles
        $board.append($newBoardDiv); // appending the $newBoardDiv that goes inside the board div
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


// grabbing the 'play' buttons from html
  const $button1Id = $('#button1');
  const $button2Id = $('#button2');
  const $button3Id = $('#button3');
  const $button4Id = $('#button4');
  const $button5Id = $('#button5');
  const $button6Id = $('#button6');
  const $button7Id = $('#button7');


// create a function to make the top x buttons clickable
  const clickBtns = function () {

    $button1Id.on('click', function(){ // when I click on this button, the for loop will run
      for (let i = 0; i < column1.length; i++) {
        if ($(column1[i]).hasClass('light-blue-chip') || column1[i].hasClass('pink-chip')) { // if it has a light blue or pink button do nothing
        } else { // else, run the toggleFunction which will switch from light-blue to pink token
          toggleFunction(column1[i]); // this makes the token start with player one (light-blue) because toggle is set to true
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

        } else {
          toggleFunction(column5[i]);
          break;
        }
      }
    }); // --> $button5Id click function ends

    $button6Id.on('click', function(){
      for (let i = 0; i < column6.length; i++) {
        if (column6[i].hasClass('light-blue-chip') || column6[i].hasClass('pink-chip')) {

        } else {
          toggleFunction(column6[i]);
          break;
        }
      }
    }); // --> $button6Id click function ends

    $button7Id.on('click', function(){
      for (let i = 0; i < column7.length; i++) {
        if (column7[i].hasClass('light-blue-chip') || column7[i].hasClass('pink-chip')) {

        } else {
          toggleFunction(column7[i]);
          break;
        }
      }
    }); // --> $button7Id click function ends

  }; // --> clickButtons function ends

  clickBtns(); // calling the clickButtons function so the user can click the x  buttons on top of the page

//CHECK WINS




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
