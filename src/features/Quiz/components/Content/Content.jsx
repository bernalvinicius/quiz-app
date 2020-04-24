import React from 'react';
import OptionsItem from './OptionsItem'
import './styles.css';

const Content = ({ answers = [], checkAnswer, correct_answer = '', userAnswer }) => {

    if (answers.length === 0) {
        return null;
    }

    return (
        <div className='quiz-content'>
            {
                answers.map((option, index) =>
                    <OptionsItem
                        key={option}
                        option={option} // todas as alternativas para a questão, mas uma a uma pq esta dentro do map
                        checkAnswer={checkAnswer} // função que esta em Quiz.jsx
                        userAnswer={userAnswer} // Alternativa que o usuario clicou
                        correct_answer={correct_answer} // Alternativa correta para a questão
                        index={index} // será usado para renderizar as Labels (A, B, C, D)
                    />
                )
            }
        </div>
    )
}

export default Content;