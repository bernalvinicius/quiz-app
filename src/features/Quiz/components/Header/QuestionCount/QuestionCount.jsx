import React from 'react';
import './styles.css'

const QuestionCount = ({ currentIndex, quizData = [] }) => {

    return (
        <div className='quiz-question-count'>
            Question {currentIndex + 1}/{quizData.length}
        </div>
    )
}

export default QuestionCount;