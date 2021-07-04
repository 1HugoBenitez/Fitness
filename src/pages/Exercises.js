import React from 'react'
import ExercisesList from '../Componets/ExerciseList'
import Welcome from '../Componets/Welcome'
import Loading from '../Componets/Loading'
import FatalError from './500'


class Exercises extends React.Component {
    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount() {
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://http://localhost:8000/api/exercises')
            let data = await res.json()


            this.setState({
                data,
                loading: false
            })

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }

    }

    render() {
        if (this.state.loading)
            return <Loading />

        if (this.state.error)
            return <FatalError />
        return (
            <div>
                <Welcome
                    username='Hugo'
                />
                <ExercisesList
                    exercises={this.state.data}
                />

            </div>
        )
    }

}

export default Exercises