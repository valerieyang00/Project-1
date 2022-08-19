# Kitty Treasure Guard
Help the kitty guard its treasures from the ants!

## Game Plan
The ants will come out from 4 side of the room, trying to reach the treasures placed in the middle of the room. Kitty is to move around the room stopping the ants from getting to the treasure. Kitty is able to attack the 4 ant bases, which will stop the ants for 5 seconds. Kitty can also cut through the ants, which will stop the ants for 2 seconds. Player wins the game when kitty successfully protects the treasure for 1 minute. 
![game frame](./Screen%20Shot%202022-08-18%20at%209.46.00%20PM.png)

## Tech being used
* HTML/CSS - Canvas
* Javascript

## MVP List
* Game start button, Game restart button for player who wants to start over
* Render a gameroom with treasure placed in middle
* Render a kitty character to move around the room freely with keypress
* Create 4 ant bases and render ants to come out through out the game
* Set timers to stop/start ants as kitty makes its two attack methods: attack the ant base (stop ants for 5 seconds), attack anywhere in the middle of the trail (stop ants for 2 seconds)
* Display win if player lasts 1 minute in the game
* End the game when any of the ants get to the treasure
** *The timer applied for each action may change as the game is assessed for reasonableness after it is built*


## Stretch Goals
* Make Easy/Medium/Hard mode by changing the ants speed
* Make "items" like Fish to appear randomly in the gameroom for 3 seconds, if kitty eats the fish, it slows down the ants speed for 5 seconds
* Make "traps" appear randomly in the gameroom for 3 seconds, if kitty steps on the trap, Game over.


