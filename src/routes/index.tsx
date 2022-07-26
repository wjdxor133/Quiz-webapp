import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuizPage from 'pages/QuizPage'
import QuizQuestionPage from 'pages/QuizQuestionPage'
import QuizResultPage from 'pages/QuizResultPage'

interface PathName {
  quiz: string
  question: string
  result: string
}

export const PATH_NAME: PathName = {
  quiz: '/',
  question: '/quiz-question',
  result: '/quiz-result',
}

function index() {
  return (
    <Router>
      <Routes>
        <Route path={PATH_NAME['quiz']} element={<QuizPage />} />
        <Route path={PATH_NAME['question']} element={<QuizQuestionPage />} />
        <Route path={PATH_NAME['result']} element={<QuizResultPage />} />
      </Routes>
    </Router>
  )
}

export default index
