import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import LoaderButton from '../components/LoaderButton'
import { useFormFields } from "../libs/hooksLib"
import Todos from "../components/Todos"
import axios from 'axios'
import config from '../config'

import './Todo.css'

function Todo() {
    const [formIsOpen, setFormOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [todos, setTodos] = useState(null)
    const [fields, handleFieldChange, reset] = useFormFields({
        content: ""
    });

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        try {
            const response = await axios.get(`${config.API_URL}/allTodos`)
            console.log(response.data)
            setTodos(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const hide = () => {
        setFormOpen(false)
    }

    const showModal = () => {
        setFormOpen(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const response = await axios.post(`${config.API_URL}/create`, {
                content: fields.content
            })
            console.log(response)
            load()
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
        reset()
        hide()
    }

    return (
        <div className="Todo">
            <div className="appName">
                <h3>Todo App</h3>
            </div>
            <div className="ml-3">
                <Button variant="primary" onClick={showModal}>New Todo</Button>
            </div>
            <Todos todos={todos} load={load}/>
            <Modal show={formIsOpen} backdrop="static" centered onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Assign Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="content" size="lg">
                            <Form.Control
                                type="text"
                                value={fields.content}
                                placeholder="Content"
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <LoaderButton
                            block
                            type="submit"
                            size="lg"
                            variant="primary"
                            isLoading={isLoading}
                            disabled={false}
                        >
                        Submit
                        </LoaderButton>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Todo
