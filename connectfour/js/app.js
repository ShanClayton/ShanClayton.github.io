
$(function(){
console.log('testing');
//Selecting Elements
let $gameboard = $('#gameboard'); // grabbing the board id

let $clearButton = $('#reset-board'); // grabbing reset board id

let $nextTurn = $('p'); // grabbing p tage from index.html

let toggle = true; // global variable set to true

let $circleClass = $('.circle'); // grabbing circle class

// Switiching Turns. Step 3
const toggleFunction = function(column){
  console.log(testing);
  
}
//  creating gameboard. Step 1
const createGameBoard = function(){
  for (let i = 0; i < 42; i++) {
    const $gameDiv = $("<div>"); //createing a div that goes below the div board
    $gameDiv.addClass('circle'); // adding class circle to game div
    $gameDiv.attr('id', i); // adding ids with numbers to the circles
    $gameboard.append($gameDiv);// appending the $gameDiv that goes inside the board div
  };

};
createGameBoard()l // calling createGameBoard to create the board when page loads
















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
