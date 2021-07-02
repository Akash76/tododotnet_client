import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import config from '../config'

function Todos({todos, load}) {

    const markComplete = async (id) => {
        try {
            const response = await axios.put(`${config.API_URL}/markComplete/${id}`)
            console.log(response.data)
            load()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete(`${config.API_URL}/deleteTodo/${id}`)
            console.log(response.data)
            load()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            { todos && todos.map(({id, content, created, complete}) => (
                <Card key={id} className="m-3 card">
                    <Card.Body>
                        <Card.Header>
                            <b>Todo: </b>{content}
                        </Card.Header>
                        <Card.Text as="div" className="pt-2">
                            <b>Created At: </b>{created} <br />
                            <b>Complete: </b>{complete ? "Yes" : "No"}
                            <div className="pt-3">
                                <Button variant="success" disabled={complete} onClick={() => markComplete(id)}>Mark Complete</Button>
                                <Button variant="danger" className="ml-3" onClick={() => deleteTodo(id)}>Delete</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))
            }
        </div>
    )
}

export default Todos
