import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/CardPokemon.css'

const CardPoke = ({ url }) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleclick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <article className={`card-poke bg-${pokemon?.types[0].type.name}`} onClick={handleclick}>
            <header className='card-poke__header'>
                <h3 className={`card-poke__name color-letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                <img className='card-poke__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <section className='card-poke__body'>
                <ul className='card-poke__types-container'>
                    {
                        pokemon?.types.map(type => (
                            <li key={type.slot} className='card-poke__type'>{type.type.name} </li>
                        ))
                    }
                </ul>
                <p className='card-poke__type-label'>type</p>
                <ul className='card-poke__stats-container'>
                    {
                        pokemon?.stats.map(stat => (
                            <li key={stat.stat.name} className='card-poke__stat'>
                                <span className='card-poke__stat-label'>{stat.stat.name}</span>
                                <span className={`card-poke__stat-number color-letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default CardPoke