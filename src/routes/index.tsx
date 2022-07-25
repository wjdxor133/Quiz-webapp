import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuizPage from 'pages/QuizPage'
import QuizResultPage from 'pages/QuizResultPage'

function index() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<QuizPage />} />
        <Route path='/quiz-result' element={<QuizResultPage />} />
      </Routes>
    </Router>
  )
}

export default index
