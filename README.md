# Kitty Treasure Guard
Help the kitty guard its treasures from the ants!

## Game Plan
The ants will come out from 4 side of the room, trying to reach the treasures placed in the middle of the room. Kitty is to move around the room stopping the ants from getting to the treasure. Kitty is able to attack the 4 ant bases, which will stop the ants for 5 seconds. Kitty can also cut through the ants, which will stop the ants for 2 seconds. However it can only attack black ants, kitty will die if it stops the poisonous red ants. Kitty can scare the ants 3 times in 1 game. Press "h" to Hiss, it will make the ants slow down for 3 seconds. Player's score goes up as kitty makes each attack until they lose the game. Maximum game time is 1 minute.
![game frame](./Screen%20Shot%202022-08-18%20at%209.46.00%20PM.png)

## Tech being used
* HTML/CSS - Canvas
* Javascript

## MVP List
* Game start button
* Render a gameroom with treasure placed in middle
* Render a kitty character to move around the room freely with keypress
* Create 4 ant bases and render ants to come out through out the game
* Randomize colors of ants (black/red) in ideal proportion for the game play
* Set timers to stop/start ants as kitty makes its two attack methods: attack the ant base (stop ants for 5 seconds), attack black ants before it gets to treasure (stop ants for 2 seconds). Slow down ants speed for 3 seconds when cat hisses ("h" keypress)
* Display loss and end the game if ants reach the treasure, or kitty stops a red ant
* End the game when player lasts 1 minute in the game, display maximum score
* Display scoreboard that tracks the player's score throughout the game.
* *The timer applied for each action may change as the game is assessed for reasonableness after it is built*


## Stretch Goals
* Make Easy/Medium/Hard mode by changing the ants speed
* Make "items" like Fish to appear randomly in the gameroom for 3 seconds, if kitty eats the fish, it slows down the ants speed for 5 seconds + bonus points
* Make "traps" appear randomly in the gameroom for 3 seconds, if kitty steps on the trap, Game over.

### Potential Roadblocks
* Having many different sets of timers will complicate the loops to be written
* Setting ideal time for each game action that makes the game enjoyable


