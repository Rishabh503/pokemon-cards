export const PokemonCards=(props)=>{
    return(<>
    <li className="pokemon-card">
        <figure>
            <img
                src={props.pokemonData.sprites.other.dream_world.front_default}
                alt={props.pokemonData.name}
                className="pokemon-image"
            />
        </figure>
        <h1 className="pokemon-name">{props.pokemonData.name}</h1>
        </li>
    </>)
}