import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const StartQuiz = ({ modalIsVisible }) => {

    console.log('adfadsfafd', modalIsVisible)

    return (
        <Modal show={modalIsVisible}>
            <Modal.Header>Header do Modal</Modal.Header>
            <Modal.Body>Body do Modal</Modal.Body>
            <Modal.Footer>
                <Button>Fechar Modal</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StartQuiz;