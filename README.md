# tictactoe

My main logic is to check if the backend recieved 3 filled squares or more,
if so, I'm checking first if the middle square is filled.
the winning option to the middle square are the same amount of add and reduce from 1 to 4 (4,5,6 / 3,5,7 / 2,5,8 / 1,5,9)
so I'm checking the squares above and below by add and reduce amout of 1 to 4.
The same principle is for the first and the last squares- (1,2,3 / 1,4,7 and 9,8,7 / 9,6,3), so for them I'm checking 1 and 3 option to add (for the first square) and reduce (for the last square).