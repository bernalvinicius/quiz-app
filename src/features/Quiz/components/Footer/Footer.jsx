import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <div className='quiz-footer'>
            <div className='small'>
                You can find the code repo on <a href='https://github.com/bernalvinicius/quiz-app'>Github</a>. Feel free to make any pull requests to improve the aplication.
            </div>
            <p>
                Built with <span>&hearts;</span> by <a href='https://github.com/bernalvinicius'>Vinícius Bernal</a>
            </p>
        </div>
    )
}

export default Footer;