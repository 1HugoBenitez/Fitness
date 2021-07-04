import React from 'react'
import './styles/AddButton.css'
import buttonImg from '../images/add.png'
import { Link } from 'react-router-dom'


const AddButton = () => (
    <Link to="exercise/new">
        <img src={buttonImg} className="Fitness-Add" alt="exsercises" />

    </Link>
)


export default AddButton