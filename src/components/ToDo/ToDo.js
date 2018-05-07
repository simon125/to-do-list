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

        ],
        newTaskName: ''

    }

    onNewTaskChange = (event, newValue) => this.setState({
        newTaskName: newValue
    })

    addTask = () => {
        if (!this.state.newTaskName) return 
            const newTask = {
                name: this.state.newTaskName,
                uid: Date.now()
            }

        const newTasks = this.state.tasks.concat(newTask)

        this.setState({
            tasks: newTasks,
            newTaskName: ''
        })
    }

    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)

        this.setState({
            tasks: newTasks
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Form
                        onNewTaskChangeProp={this.onNewTaskChange}
                        newTaskNameProp={this.state.newTaskName}
                        addTaskProp={this.addTask}
                    />
                </Container>
                <Container>
                    <List
                        tasksProp={this.state.tasks}
                        deleteTaskProp={this.deleteTask}
                    />
                </Container>
            </div>
        )
    }
}

export default ToDo 