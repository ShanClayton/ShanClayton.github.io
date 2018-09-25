
$(function(){
console.log('testing');
//Selecting Elements
const $gameboard = $('#gameboard'); // grabbing the board id

const $clearButton = $('#reset-board'); // grabbing reset board id

const $nextTurn = $('p'); // grabbing p tage from index.html

let toggle = true; // global variable set to true

const $circleClass = $('.circle'); // grabbing circle class

// Switiching Turns. Step 3
 const toggleFunction = function(column) {
   console.log('testing toggleFunction'); // click listener is working

   if (toggle) {
     $(column).addClass('pink-chip'); // if toggle is true, it will add the class of teal chip to the $gameDiv
     $nextTurn.text('Player 1'); // when teal chip is added to the div, the p tag will change color
     $nextTurn.css('color', '#43C6DB'); // color of p tag changes from pink to teal
   } else {
     $(column).addClass('teal-chip'); // if toggle is false, it will add the class of pink
     $nextTurn.text('Player 2 '); // when teal token is added to the div, the p tag will change to pink (player 2 ) and it's 2nd player turn
     $nextTurn.css('color', '#FC89AC'); // changing color of the p tag to pink
   };

     toggle = !toggle; // alternates the turns between teal and  pink

     // checkWinner(); // calls the checkwins function to see who has won

   }; // --> closing function

//  creating gameboard. Step 1
  const createGameBoard = function(){
    for (let i = 0; i < 42; i++) {
    const $gameDiv = $("<div>"); //createing a div that goes below the div board
    $gameDiv.addClass('circle'); // adding class circle to game div
    $gameDiv.attr('id', i); // adding ids with numbers to the circles
    $gameboard.append($gameDiv);// appending the $gameDiv that goes inside the board div
  };

}; // closing  function
createGameBoard(); // calling createGameBoard to create the board when page loads










});















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
