import React from 'react'
import '../Pokedex/Styles/FormHome.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../Store/Slices/UserName.Slice'

const FormHome = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
        navigate('/pokedex')
    }

    return (
            <form className='pokedex__form' onSubmit={submit}>
                <input
                    required="text"
                    type="text"
                    className='pokedex__input'
                />
                <button>GO!</button>
            </form>
    )
}

export default FormHome