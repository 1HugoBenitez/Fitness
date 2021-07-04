import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNew from '../pages/ExerciseNew'


const App = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/exercise/new" component={ExerciseNew} />
        </switch>
    </BrowserRouter>
)


export default App