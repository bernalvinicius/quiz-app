import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import './styles.css';

const FinishQuiz = ({ score, quizData = [], restartQuiz }) => {

    // Inicialmente isOpen vem com o estado pré-definido como false
    const [isOpen, setIsOpen] = useState(true);


    // Quando cliar em Restart o modal fica como false
    const handleClose = () => {
        setIsOpen(false);
        restartQuiz();
        console.log('handleClose', isOpen)
    };

    return (
        <div>
            <Modal
                open={isOpen}
            // Se onClose ficar ativo, quando o usuario clicar fora do modal, é como se estivesse clicando em Start Quiz
            // onClose={handleClose}
            >
                <div className='box'>
                    <div className='modal-finish-quiz'>
                        <div className="modal-finish-header">
                            <p>Congratulations!</p>
                        </div>
                        <div className="modal-finish-body">
                            <p>You have completed the quiz.</p>
                            <p>You got: <b>{score}</b> out of <b>{quizData.length}</b> questions right.</p>
                        </div>
                        <div className="modal-finish-footer">
                            <button onClick={handleClose} className='submit-finish-button'>
                                Restart
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )

}

export default FinishQuiz;