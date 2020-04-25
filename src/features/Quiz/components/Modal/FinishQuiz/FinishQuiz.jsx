import React from 'react'
import Modal from 'react-bootstrap/Modal'

const FinishQuiz = () => {

    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <p>Footer</p>
            </Modal.Footer>
        </Modal.Dialog>
    )

}

export default FinishQuiz;