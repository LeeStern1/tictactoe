# tictactoe
general architecture:
frontend with Game component to hold all the application.
input component for the user name.
board component to manage a game.
score component to display the winners.
Some of the elements are saved in redux to allow use in several components.
backend: play route to hold the game logic.
score route to hold the users score.

My main logic for winning is to check if the backend recieved 3 filled squares or more,
if so, I'm checking first if the middle square is filled.
the winning option to the middle square are the same amount of add and reduce from 1 to 4 (4,5,6 / 3,5,7 / 2,5,8 / 1,5,9)
so I'm checking the squares above and below by add and reduce amout of 1 to 4.
The same principle is for the first and the last squares- (1,2,3 / 1,4,7 and 9,8,7 / 9,6,3), so for them I'm checking 1 and 3 option to add (for the first square) and reduce (for the last square).