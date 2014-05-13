To run: open "main.html".

This is multiplayer game, where player controls snake.

Snake dies in two cases:
    when it get out of the field
    when it smashes into another snake

Player gets as much scores as much other snakes are dead now.

There is some settings in the head of "game/game.js" as:
    ROUNDS - number of rounds
    PLAYERS_COUNT - count of players
    COLORS - array of basic colors for snakes
    UCOLORS - array of colors for snakes. When snake is under the field UCOLORS using instead of COLORS
    CONTROLS - key codes for left and right (keyCode of keydown event)

There is some settings in the "game/snake.js" as:
    cangle - every game tic snake can turn on this angle (radian)
    cspeed - every game tic snake moves on cspeed (pixel)
    choleprob - probability of snake making hole
    cholebord - minimal count of tics between two holes
    choleminsize - minimal hole length
    cholemaxsize - maximal hole length


--
Sorry for my english