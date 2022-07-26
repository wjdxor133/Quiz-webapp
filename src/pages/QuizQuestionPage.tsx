import React from 'react'
import { AnswerCardList } from 'components'

function QuizQuestionPage() {
  const answerInfo = {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which popular First Person Shooter (FPS) franchise, got a Real Time Strategy (RTS) game developed based on its universe?',
    correct_answer: 'Halo',
    incorrect_answers: ['Battlefield', 'Call of Duty', 'Borderlands'],
  }

  const { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } = answerInfo

  const answers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)

  return (
    <>
      <h1>퀴즈 문항 페이지입니다.</h1>
      <AnswerCardList answers={answers} />
    </>
  )
}

export default QuizQuestionPage
