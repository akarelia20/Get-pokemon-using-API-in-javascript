async function getpokemon(e){
    if (pokemon_index.value <= 0) {
        pokemon_card.innerHTML=`
        <p class="error"> 
        Ooops!!! Not valid entry, Enter a number greater than zero..  
        </p>
        `
    }
    else if(pokemon_index.value %1 == 0) {
        rotated_value = pokemon_index.value % 1125;
        console.log(pokemon_index);
        var response= await fetch(`https://pokeapi.co/api/v2/pokemon/${rotated_value}`);
        var theData= await response.json()
        console.log(theData);
        pokemon_card.innerHTML= `
        <h2 class="pokemon_title"> ${theData.name}  <h2>
        <img class= "pokemon_img" src="${theData.sprites.front_default}"> </img>
        `
    } 
    else {
        pokemon_card.innerHTML=`
        <p class="error"> 
        Ooops!!! Not valid entry, try entering whole number..  
        </p>
        `
    }
}
