import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCards } from "./PokemonCard.jsx";
export const Pokemon=()=>{
    const[pokemon,setPokemon]=useState([]);
    const[loading,setLoading]=useState(true);
    
    const API= "https://pokeapi.co/api/v2/pokemon?limit=24";

    const fetchPokemon=async()=>{  //async because api returns promises
    try{
        const resultData= await fetch(API);  //data fetched and then used await /await use hota hai to wait for promises
        const modifiedData=await resultData.json();//used await and converted data into json as fetch gave us a promis
        console.log(modifiedData)

        // as in this case see in modifieddata we are getting name and another url so we will fetch the data againre as the data is in array we will use array method
        const detailedData=modifiedData.results.map(async(curentPokemon)=>{
            const fetchedData=await fetch(curentPokemon.url) //data got in promis
            const finalData=await fetchedData.json();
            return finalData;
            // console.log(finalData);
        });

        // so finally the detailedData will have all the data but the format will be promise
        console.log(detailedData);
        const detailedPokemonData= await Promise.all(detailedData);
        setPokemon(detailedPokemonData);//setted the data here right
        setLoading(false);  //handling the inital loading stage as we have set it to be empty arr initlally
        console.log(detailedPokemonData);
    }catch(error){
        console.log(error);
        setLoading(false);
    }
    }

    useEffect(()=>{
        fetchPokemon();
    },[])

    if(loading){
        return(
            <div>
                <h1>aara hai data bhnchd...</h1>
            </div>
        )
    }
    return(
        <><section className="container">
            <header>
                <h1>
               POKEMON AAGYE OYE
               </h1>
               </header>
               <div >
               <ul className="cards">
                {
                    pokemon.map((curPoke)=>{
                        return( 
                        // <li key={curPoke.id}>{curPoke.name}</li>
                        <PokemonCards key={curPoke.id} pokemonData={curPoke}/>
                    )
                    })
                }
               </ul>
               </div>
        </section>
        </>
    )
}