"use client"

import { useRouter } from "next/navigation";


export default function NavBar() {
    const router = useRouter()

    const searchPokemon = async () => {
        const pokemon = (document.getElementById("search-input") as HTMLInputElement).value
        router.push("/pokemon/" + pokemon)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white ms-2 fw-bold" href="/">Prueba fácil</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active text-white" href="/pokemon">Pokemon</a>
                    </div>
                    <div className="navbar-nav">
                        <input style={{ width: "15rem" }} className="form-control form-control-sm" type="text" placeholder="Ingresa el nombre de tu pokemon" aria-label="search-input" id="search-input" />
                        <button className="btn btn-outline-success btn-sm ms-2" type="submit" onClick={searchPokemon}>Buscar</button>
                    </div>
                </div>
            </nav>
        </>
    )
}