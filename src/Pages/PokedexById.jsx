import axios from 'axios'
import '../Components/Pokedex/Styles/PokedexById.css'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Pokemon404 from '../Components/PokedexId/Pokemon404'
import { GiPreviousButton } from 'react-icons/gi'

const PokedexById = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState()
    const [hasError, setHasError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => {
                setHasError(true)
                console.log(err)
            })
    }, [])

    if (hasError) {
        return <Pokemon404 />
    }

    const handleclick = () => {
        navigate('/pokedex')
    }


    return (
        <container className='card-pokedex-container'>
            <GiPreviousButton
                className='card-pokedex-icon'
                onClick={handleclick}
            />
            <p className='card-pokedex-number-pokemon'>#{pokemon?.order}</p>
            <section className='card-pokedex__section'>
                <img src={pokemon?.sprites.front_default} alt="" />
                <h2>{pokemon?.name}</h2>
                <img src={pokemon?.sprites.back_default} alt="" />
            </section>
            <header className='card-pokedex__header'>
                <img className='card-pokedex__img' src={pokemon?.sprites.other['home'].front_default} alt="" />
            </header>
            <section className='card-pokedex-data'>
                <article className='card-pokedex__article'>
                    <p className='card-pokedex__article-p'><span>Heigth</span> {pokemon?.height}</p>
                    <p className='card-pokedex__article-p'><span>Weight</span> {pokemon?.weight}</p>
                </article>
                <article className='card-pokedex__skill'>
                    <h2 className='card-pokedex__skill-tittle'>Skills</h2>
                    {
                        pokemon?.abilities.map(skills => (
                            <ul className='card-pokedex__skills-ul'>
                                <li
                                    key={skills.ability.url}
                                    className='card-pokedex__skills-li'>
                                    {skills.ability.name}
                                </li>
                            </ul>
                        ))
                    }
                </article>
            </section>
            <h2>Stats</h2>
            <section className='card-pokedex-statics'>
                <ul className='stats'>
                    {
                        pokemon?.stats.map(stat => (
                            <li>
                                <span className='text'>{stat.stat.name}</span>
                                <span className='base'></span>
                                <span className='percent'>
                                    <div style={{ width: `${100 * (stat.base_stat) / 150}%` }}></div>
                                </span>
                                {stat.base_stat}/150
                            </li>
                        ))
                    }
                </ul>
            </section>
            <h2>Moves</h2>
            <section className='card-pokedex-moves'>
                {
                    pokemon?.moves.map(move => (
                        <container className='card-pokedex-moves-container'>
                            <ul className='card-pokedex-moves-ul' key={move.move.url}>
                                <li className='card-pokedex-moves-li'>
                                    {move.move.name}
                                </li>
                            </ul>
                        </container>
                    ))
                }
            </section>
        </container>
    )
}

export default PokedexById