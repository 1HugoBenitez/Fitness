//const element = document.createElement('h1')

//element.innerText = 'Hello React..'

//const container = document.getElementById('root')

//container.appendChild(element)

//https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06

import React from 'react'
import ReactDOM from 'react-dom'
import Exercises from './pages/Exercises'
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root')

//ReactDOM. render(__QUE__, __DONDE__)

ReactDOM.render(<Exercises/>, container) 