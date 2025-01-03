export const PokemonCards=(props)=>{
    return(<>
    <li className="pokemon-card">
        {props.pokemonData.name}
        </li>
    </>)
}