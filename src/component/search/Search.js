import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './search.css'

const Search = () => {
    const [value,setValue] = useState('')
    const navigate = useNavigate()
    
    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        navigate(`/search/${value}`)
        setValue('')
    }
    
    return (
        <div className='search-btn' data-aos="fade-left" data-aos-offset="300" data-aos-duration="700">
            <form onSubmit={() => handleSubmit()}>
                <input value={value} placeholder='Search something...' onChange={(e) => handleInput(e)}></input>
            </form>
        </div>
    )
}

export default Search
