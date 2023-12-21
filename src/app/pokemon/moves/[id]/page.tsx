"use client"

import { PokemonMovesDto } from "@/app/dtos/pokemon.moves.dto"
import { useEffect, useState } from "react"

interface SpecificPokemonProps {
    params: {
        id: number
    }
}


export default function PokemonMovesDetail({params}: SpecificPokemonProps) {
    const { id } = params
    const [pokemonMoves, setPokemonMoves] = useState<PokemonMovesDto>(
        PokemonMovesDto.create({name: "", moves: []})
        )


    useEffect(()=>{
        const fetchMoves = async () => {
            const req = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)

            if(!req.ok){
                throw new Error("El pokemon con el id: " + id + "no existe")
            }

            
            await req.json().then((data) => setPokemonMoves(PokemonMovesDto.create(data)))
        }

        fetchMoves()
    }, [])


    return (
        <h1>
            Estos son los moves del pokemon tal {pokemonMoves.move.map((element) => element.move.name).join(", ")}
        </h1>
    )
}