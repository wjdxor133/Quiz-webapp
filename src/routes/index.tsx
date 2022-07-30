import React from 'react'
import { Routes, Route } from 'react-router-dom'
import QuizPage from 'pages/QuizPage'
import QuizQuestionPage from 'pages/QuizQuestionPage'
import QuizResultPage from 'pages/QuizResultPage'
import WrongAnswerNotePage from 'pages/WrongAnswerNotePage'

interface PathName {
  quiz: string
  question: string
  result: string
  wrong: string
}

export const PATH_NAME: PathName = {
  quiz: '/',
  question: '/quiz-question',
  result: '/quiz-result',
  wrong: '/quiz-wrong-answer-note',
}

function index() {
  return (
    <Routes>
      <Route path={PATH_NAME['quiz']} element={<QuizPage />} />
      <Route path={`${PATH_NAME['question']}`} element={<QuizQuestionPage />} />
      <Route path={PATH_NAME['result']} element={<QuizResultPage />} />
      <Route path={PATH_NAME['wrong']} element={<WrongAnswerNotePage />} />
    </Routes>
  )
}

export default index
