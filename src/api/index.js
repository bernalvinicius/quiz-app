import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

export const getQuiz = () => axios.get(BASE_URL);
