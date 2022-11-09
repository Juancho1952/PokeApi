import axios from 'axios'
import '../Components/Pokedex/Styles/PokedexStyle.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../Components/Pokedex/CardPoke'
import InputSearch from '../Components/Pokedex/InputSearch'
import SelectByType from '../Components/Pokedex/SelectByType'
import { useNavigate } from 'react-router-dom'
import Pagination from '../Components/Pokedex/Pagination'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState()
    const [typeSelected, setTypeSelected] = useState("All Pokemons")
    
    const userName = useSelector(state => state.userName)
    const navigate = useNavigate()

    useEffect(() => {
        if (typeSelected !== "All Pokemons") {
            axios.get(typeSelected)
                .then(res => {
                    const result = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(result);
                })
                .catch(err => console.log(err))
        } else {
            const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.'
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        }
    }, [typeSelected])

    const handleClickImage = () => {
        navigate('/')
    }

    //para la paginación
    const [page, setPage] = useState(1)
    const [pokeperPage, setPokeperPage] = useState(8)
    const initialPoke = (page -1) * pokeperPage
    const finalPoke = page * pokeperPage

    return (
        <div className='pokedex-bg'>
            <header className='pokedex-header'>
                <img onClick={handleClickImage} className='pokedex-img-tittle' src="./Images/POKEDEX.png" alt="" />
                <div className='pokedex-border'></div>
                <h2 className='pokedex-text'>Welcome <span>{userName}</span></h2>
            </header>
            <aside>
                <InputSearch />
                <SelectByType
                    setTypeSelected={setTypeSelected}
                    setPage={setPage}
                />
            </aside>
            <main>
                <div className='card-container'>
                    {
                        pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                            <CardPoke
                                key={pokemon.url}
                                url={pokemon.url}
                            />
                        ))
                    }
                </div>
            </main>
            <Pagination 
                    page={page}
                    pagesLength={pokemons && Math.ceil(pokemons.length / pokeperPage)}
                    setPage={setPage}
                />
        </div>
    )
}

export default Pokedex