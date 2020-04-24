import React from 'react';
import './styles.css'

// funcão que verifica qual o estilização deve aparece de acordo com a resposta do usario
const verifyAnswer = (userAnswer, option, correct_answer) => {
    // Se o usario clicou em algumas das alternativas
    if (userAnswer === option) {
        // entao é verificado se ele respondeu de maneira correta ou incorreta
        return userAnswer === correct_answer ? 'correct' : 'incorrect'
    }
    return ''
}

// Labels que aparecem ao lado de cada alternativa
const auxLabels = ['A', 'B', 'C', 'D']

// option - esta sendo renderizado 4 X com cada item do array
// checkAnswer - esta passando a função que está em Quiz.jsx
// userAnswer - esta passando a alternativa que o user clicou
// correct_answer - esta passando a resposta correta
// index - para renderizer o array com as labels
const OptionsItem = ({ option, checkAnswer, userAnswer, correct_answer, index }) => {

    if (option === undefined) {
        return null;
    }

    const verify = verifyAnswer(userAnswer, option, correct_answer);

    return (
        <div className={`quiz-option-item ${verify}`} onClick={() => checkAnswer(option)}>
            <span className={`label ${verify}`}>
                {/* para cada posição do index é renderizado uma label */}
                {auxLabels[index]}
            </span>
            <span className='option'>
                {/* cada uma das alternativas */}
                {option}
            </span>
        </div>
    )
}

export default OptionsItem;