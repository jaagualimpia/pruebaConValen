"use client"

import NavBar from "@/app/components/NavBar"
import { useEffect, useState } from "react"

interface SpecificPokemonProps {
    params: {
        name: number
    }
}

export default function SpecificPokemon({ params }: SpecificPokemonProps) {
    const { name } = params
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        const fetchPokemon = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)

            if (!res.ok) {
                throw new Error('El pokemon de nombre ' + name + ' no existe')
            }

            await res.json().then((data) => setPokemon(data))
        }

        fetchPokemon()
    }, [])


    return (
        <>
            <NavBar />
            <div className="card mt-4 mx-5">
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <img style={{ height: "10rem", width: "15rem" }} src={pokemon.sprites.back_shiny!} />
                            </div>
                            <div className="col text-center">
                                <img style={{ height: "10rem", width: "15rem" }} src={pokemon.sprites.front_default} />

                            </div>
                            <div className="col text-center">
                                <img style={{ height: "10rem", width: "15rem" }} src={pokemon.sprites.back_default} />

                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col text-center">
                                <h1 className="fw-bold">{pokemon.name}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-start">
                                <h1 className="">Habilidades: {pokemon.abilities.map((element: any) => element.ability.name).join(", ")}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-start">
                                <h1 className="">Movimientos: {pokemon.moves.map((element: any) => element.move.name)}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}