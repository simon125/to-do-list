import React from 'react'

import Form from './Form'
import List from './List'
import Container from '../Container'

class ToDo extends React.Component {

    state = {
        tasks: [
            { name: 'śmieci', uid: 'jadsgjas' },
            { name: 'umyc okna', uid: 'ksjdansx' },
            { name: 'umyć naczynia', uid: 'kmadhksx' }

        ]
    }

    render() {
        return (
            <div> 
                <Container>
                    <Form />
                </Container>
                <Container>
                    <List
                        tasksProp = {this.state.tasks}
                        deleteTaskProp={(uid)=>alert(uid)}
                    />
                </Container>
            </div>
        )
    }
}

export default ToDo 