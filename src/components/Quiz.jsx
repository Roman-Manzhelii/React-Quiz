import {useState} from "react";
import QUESTIONS from '../questions.js'
import quizCompletedImg from '../assets/quiz-complete.png'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevState => {
            return [...prevState, selectedAnswer];
        })
    }

    if(isQuizComplete){
        return (
            <div id='summary'>
                <img src={quizCompletedImg} alt='Quiz Completed'/>
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id='quiz'>
            <div id='question' >
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map(answer =>
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>)}
                </ul>
            </div>
        </div>
    )

}