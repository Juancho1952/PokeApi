import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/InputSearch.css'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e =>{
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

    return (
        <form className='form-type' onSubmit={submit}>
            <input className='form-input' id='search'  type="text" />
            <p>👆🏽</p>
            <button>look for your pokemon ╰(*°▽°*)╯</button>
        </form>
    )
}

export default InputSearch