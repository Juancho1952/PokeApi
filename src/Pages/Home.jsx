import React from 'react'
import FormHome from '../Components/Home/FormHome'
import '../Components/Pokedex/Styles/Home.css'

const Home = () => {
    return (
        <section className='pokedex'>
            <container className= 'pokedex-container'>
                <img className='pokedex-img' src="./Images/pokemon-ash.gif" alt="" />
                <h2 className='pokedex-subtitle'>HELLO TRAINER!</h2>
                <p className='pokedex-text'>to start, give me your name</p>
                <FormHome />
            </container>
        </section>
    )
}

export default Home