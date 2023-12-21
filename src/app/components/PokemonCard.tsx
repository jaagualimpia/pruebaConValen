"use client"

import { useRouter } from "next/navigation";

interface PokemonCardProps {
    id: number;
    name: string;
    imageUrl: string;
}

export default function PokemonCard({id, name, imageUrl} : PokemonCardProps) {
    const router = useRouter()

    const pokemonCardStyle = {
        cursor: "pointer",
    }
    

    return (
        <>
            <div className="card" style={pokemonCardStyle} onClick={() => router.push("/pokemon/" + id)}>
                <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
            </div>
        </>
    )
}