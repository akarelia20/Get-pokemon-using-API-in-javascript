# Get-pokemon-using-API-in-javascript
What is this application about ? 
This appliaction allows a user to get a pokemon based on any random selection of input number. 

Strategy : 
I have used poke API data to fetch the pokemon image and name to the corresponding number using javascript. There are total of 1125 pokemons in the API which gets loaded based on random number provided.  
In order to handle input numbers exceeding available pokemons ie. 1125,  I have applied the logic to rotate the number using modulo division after it reaches to end. So for example, if your input number is 1126 it shows the pokemon 1 again. 

Test Cases handled :
1. Tested random numbers from 1 to 1125 
2. Tested random numbers exceeding 1125
3. Tested -ve numbers inputted
4. Tested letters which are not allowed
5. Tested input number 0 
