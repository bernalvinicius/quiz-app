import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import './styles.css';

const StartQuiz = () => {

    // Inicialmente isOpen vem com o estado pré-definido como falso
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* <button type='button' onClick={handleOpen}>Open Modal</button> */}
            <Modal
                open={isOpen}
                // onClose={handleClose}
            // style={{backgroundColor: 'red'}}
            >
                <div className='box'>
                    <div className='modal-start-quiz'>
                        <div className="modal-header">
                            <p>Welcome To Quiz</p>
                        </div>
                        <div className="modal-body">
                            <p>This is a quiz application built using ReactJS.</p>
                            <p>Currently, it is loaded with questions from the Trivia API, with each page update the questions are changed, but they all belong to the Computer Science category.</p>
                            <p>It will dynamically load the question->answers pair and upload them into the components.</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleClose} className='submit-button'>
                                Start The Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default StartQuiz;