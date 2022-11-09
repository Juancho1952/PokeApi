import React from 'react'
import { Link } from 'react-router-dom'
import '../Pokedex/Styles/Pokemon404.css'

const Pokemon404 = () => {
    return (
        <article classname='page-no-found'>
            <section className='container-page'>
                <h3 className='page-tittle'>Pokemon not found 😢</h3>
                <Link className='page-Link' to='/pokedex'> Return to the main page</Link>
            </section>
        </article>
    )
}

export default Pokemon404