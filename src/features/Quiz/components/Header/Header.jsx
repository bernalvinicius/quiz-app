import React from 'react';
import QuestionCount from './QuestionCount';
import Question from './Question';
import './styles.css';

const Header = ({ currentIndex, quizData = [], question }) => {

    if (quizData.length === 0) {
        return null;
    }

    return (
        <div className='quiz-header'>
            <QuestionCount
                // envio o index pq deve aparecer ao usuario qual parte do quiz ele está
                currentIndex={currentIndex}
                // envio o quizData para o usário saber o tamanho total do array, e comparar com o currentIndex
                quizData={quizData}
            />
            <Question
                // envio a question que está a ser renderizada
                question={question}
            />
        </div>
    )
}

export default Header;