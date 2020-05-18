import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import FinishQuiz from './components/Modal/FinishQuiz/FinishQuiz';
import StartQuiz from './components/Modal/StartQuiz/StartQuiz';
import './style.css';

import { getQuiz } from '../../api';

class Quiz extends Component {

    state = {
        currentIndex: 0, // estado inicial da primeira pergunta
        answers: [], // array com todas as alternativas da questão
        correct_answer: '', // resposta correta que vem da API
        disable: true, // variavel que define quando o botão deve aparecer
        userAnswer: null, // resposta que o usuario da para cada pergunta
        score: 0, // score que contabiliza os acertos do usuário
        quizDataAPI: [], // dados que vem da API
        quizEnd: false, // variavel que ira ativar o modal de finalização do quiz
    }

    componentDidMount() {

        getQuiz().then(response => {
            this.setState({
                quizDataAPI: response.data.results
            })
            this.loadQuiz();
        })

    }

    // função para carregar as questões
    loadQuiz = () => {
        const { currentIndex } = this.state;
        const answers = this.shuffleAnswers(currentIndex);

        const quizDataAPI = this.state.quizDataAPI;

        this.setState(() => {
            return {
                question: quizDataAPI[currentIndex].question, // é renderizado a questão com de acordo com o index
                answers, // é renderizado as alternativas de acordo com a resposta da função shuffleAnswers
                correct_answer: quizDataAPI[currentIndex].correct_answer, // renderizado qual a resposta correta para a questão da vez
            }
        })
    }

    // funcão para randomizar as alternativas da questão
    shuffleAnswers = (currentIndex) => {
        const quizDataAPI = this.state.quizDataAPI;
        const options = [...quizDataAPI[currentIndex].incorrect_answers, quizDataAPI[currentIndex].correct_answer];
        return options
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
    }

    // função para renderizar a próxima pergunta do quiz
    nextQuestion = () => {
        const { userAnswer, correct_answer, score } = this.state;

        // se a resposta for correta então aumenta o score
        if (userAnswer === correct_answer) {
            this.setState({
                score: score + 1
            })
        }

        const currentIndex = this.state.currentIndex + 1;
        const quizDataAPI = this.state.quizDataAPI;

        this.setState({
            answers: this.shuffleAnswers(currentIndex), // as (novas) alternativas são renderizadas de modo randomico
            question: quizDataAPI[currentIndex].question, // é renderizado a questão com o novo index
            correct_answer: quizDataAPI[currentIndex].correct_answer, // é renderizado um novo valor para a resposta correta
            currentIndex, // o index é atualizado com + 1
            userAnswer: null, // o valor de resposta do usuario fica nulo até que ele selecione uma nova resposta
            disable: true, // enquanto o usario não selecionar uma alternativa o botão fica oculto
        })

    }

    // verifica se o usuario clicou em uma alternativa, caso sim, o botão de next question ou finish quiz aparece
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer, // o valor selecionado assume a posição de resposta do usuario
            disable: false, // o botão fica como false e pode aparecer
        })
    }

    // função para finalizar o quiz
    finishQuizHandler = () => {
        const { currentIndex, quizDataAPI } = this.state;

        if (currentIndex === quizDataAPI.length - 1) {
            this.setState({
                quizEnd: true
            });
        }
    }

    // função para reinicializar o quiz
    restartQuiz = () => {
        this.setState({
            currentIndex: 0, // estado inicial da primeira pergunta
            disable: true, // variavel que define quando o botão deve aparecer
            score: 0, // score que contabiliza os acertos do usuário
            quizEnd: true // variavel que ira ativar o modal de finalização do quiz
        })

        // chamando o componentDidMount para fazer uma nova chamada a API
        this.componentDidMount();
    }

    render() {
        const {
            question,
            currentIndex,
            answers,
            userAnswer,
            correct_answer,
            disable,
            quizDataAPI,
            score,
            quizEnd
        } = this.state;

        return (
            <div className='row'>

                {/* Modal de Inicianilização do Quiz */}
                <StartQuiz />

                {/* componente que renderiza o index da questão e também a pergunta da vez */}
                <Header
                    // envio o index pq deve aparecer ao usuario qual parte do quiz ele está
                    currentIndex={currentIndex}
                    // envio o quizData para o usário saber o tamanho total do array, e comparar com o currentIndex
                    quizData={quizDataAPI}
                    // envio a question que está a ser renderizada
                    question={question}
                />

                {/* componente que renderiza as alternativas das questões */}
                <Content
                    userAnswer={userAnswer} // Alternativa que o usuario clicou
                    correct_answer={correct_answer} // Alternativa correta para a questão
                    answers={answers} // todas as alternativas para a questão
                    checkAnswer={this.checkAnswer} // função que verifica se o usuario clicou e onde clicou
                />

                {/* Apesar dos botões serem "iguais", dupliquei o codigo pq as funções que passam no onclick são diferentes */}
                {/* Botão enquanto não é a ultima questão */}
                {
                    currentIndex < quizDataAPI.length - 1 &&
                    <div id="submit">
                        <button
                            className='submit-button'
                            style={{ display: disable ? 'none' : 'block' }}
                            onClick={this.nextQuestion}
                        >
                            Next Question
                        </button>
                    </div>
                }

                {/* Botão para a ultima questão */}
                {
                    currentIndex === quizDataAPI.length - 1 &&
                    <div id="submit">
                        <button
                            className='submit-button'
                            style={{ display: disable ? 'none' : 'block' }}
                            onClick={this.finishQuizHandler}
                        >
                            Finish Quiz
                        </button>
                    </div>
                }

                <Footer />

                {/* Modal de Finalização do Quiz */}
                {
                    quizEnd &&
                    <FinishQuiz
                        score={score} // enviar score para mostrar quantos acertos o usuario teve
                        quizData={quizDataAPI} // envio o quizData para o usário saber o tamanho total do array, e comparar com o score
                        restartQuiz={this.restartQuiz} // função para reinicar o quiz
                    />
                }

            </div>
        )
    }
}

export default Quiz;