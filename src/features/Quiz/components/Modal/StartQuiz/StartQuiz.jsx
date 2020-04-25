import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import './styles.css';

const StartQuiz = () => {

    // Inicialmente isOpen vem com o estado pré-definido como falso
    const [isOpen, setIsOpen] = useState(false);

    // Função chamada ao clicar em Open Modal
    const showModal = () => {
        setIsOpen(true);
    };

    // Função chamada ao fechar modal
    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header className='header-start-modal'>Welcome To Quiz</Modal.Header>
            <Modal.Body>
                <p>This is a quiz application built using ReactJS.</p>
                <p>Currently, it is loaded with questions from the Trivia API, with each page update the questions are changed, but they all belong to the Computer Science category.</p>
                <p>It will dynamically load the question->answers pair and upload them into the components.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ backgroundColor: "red" }} onClick={hideModal}>Start The Quiz</Button>
            </Modal.Footer>
        </Modal>
    )
}

/* 
Corrigir Warning:
- findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode.
*/

export default StartQuiz;