import React from 'react'
import ExerciseFrom from '../Componets/ExerciseFrom'
import Card from '../Componets/Card'
import '../Componets/styles/ExerciseNew.css'

class ExerciseNew extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }

        })
    }

    handleSubmit = async e => {
        e.preventDefaul()
        try {
            let config = {
                methond: 'POST',
                headers: {
                    'Accept': 'aplication/json',
                    'Content-Type': 'aplication/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json = await res.json()

            console.log(json)
        } catch (error) {

        }
    }


    render() {
        return (
            <div className="ExerciseNew_Lateral_Space row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card
                        {...this.state.form} />

                </div>
                <div className="col-sm ExerciseNew_Form_Space">
                    <ExerciseFrom
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>

            </div>
        )
    }
}

export default ExerciseNew
