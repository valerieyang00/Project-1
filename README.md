# Kitty Treasure Guard 
A simple game built where players move the main character, Kitty, around the canvas to make attacks and avoid obstacles to earn points and win the game by lasting 1 minute without losing.
* URL : https://valerieyang00.github.io/Project-1/

## Description of Game Rules
Help the kitty guard its treasures from the ants! 
Game begins with ants coming out from 4 bases, trying to reach the treasure placed in the middle of the room. Move the kitty around and stop the ants from getting to the treasure. Kitty is able to attack the 4 ant bases, which will clear the ants for 3 seconds. Kitty can also cut through the ants, which will slow down the ants for 3 seconds. However, it can only attack brown ants, as red ants are poisonous (game over). Kitty can hiss (press "h") to scare the ants 2 times in 1 game, and game will reset (only available in easy mode). Eat the fish to freeze ants for 2 seconds (+50 points) and avoid Traps which will end the game. Player's score goes up as kitty makes each attack until they lose the game. Avoid red blocks for higher score potential. Maximum game time is 1 minute (WIN!).

### Initial Wireframe
![Wireframe](./media/initial%20wireframe.png)

### Final Look

![Final](./media/Final%20game.png)

## Tech Used

* HTML/CSS - Canvas
* Javascript

## Game Functionalities Built

* Game start button / Reset button / Instructions 
* A game canvas with treasure placed in middle
* Kitty character rendered - to move around the room freely with keypress
* Created 4 ant bases and ants to come out through out the game
* Randomized colors of ants (brown/red) in ideal proportion for the game play
* Set timers to stop/start ants as kitty makes its two attack methods: attack the ant base (stop ants for 3 seconds), attack brown ants before it gets to treasure (slows ants for 2 seconds). 
* Display loss and end the game if ants reach the treasure, or kitty stops a red ant
* End the game when player lasts 1 minute - add +100 bonus points
* Display scoreboard that tracks the player's score throughout the game and 3 best scores
* Set "h" key to restart the game (time keeps running), limiting to 2 times per game only in Easy mode.
* Easy/Medium/Hard mode with different ants speed and increasing ratio of red ants.
* Fish appears randomly throughout the game -  if Kitty eats the fish, ants are frozen for 2 seconds + 50 bonus points
* Traps appear randomly throughout the game - Game over at collision
* Added red blocks to appear randomly as new feature to avoid player from running around the edge the whole game
* Added background audio and sound effects for each move

## Works Cited

* Background Image:
<a href="https://www.freepik.com/vectors/perspective">Perspective vector created by rawpixel.com - www.freepik.com</a>

* Cat Image:
Graphics Designed By Chatra Ardhisuryo From <a href="https://lovepik.com/image-450071496/cartoon-yellow-cat-vector-illustration.html">LovePik.com</a>

* Treasure Image:
https://www.pngegg.com/en/png-wscab

* Red Ants Image:
https://www.clipartmax.com/download/m2H7K9A0i8K9m2H7_ant-clip-art/

* Brown Ants Image:
https://www.pngitem.com/so/ant/2/

* Fish Image:
<a href="https://flyclipart.com/fish-emoji-fish-emoji-png-763466">Fish Emoji - Fish Emoji PNG</a>

* Trap Image:
https://www.emojipng.com/preview/12914623

* Tutorial:
https://www.w3schools.com/graphics/game_intro.asp

* Audio:
Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6896">Pixabay</a>

