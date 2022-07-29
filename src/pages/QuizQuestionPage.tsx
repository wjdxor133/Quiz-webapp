import React from 'react'

import { useRecoilValueLoadable, useRecoilValue } from 'recoil'
import { questionInfoState, quizNumberState } from 'states/quiz.state'

import { Question } from 'components'

import { MAX_NUMBER } from 'utils/quiz'

function QuizQuestionPage() {
  const quizNum = useRecoilValue(quizNumberState)

  const { state, contents } = useRecoilValueLoadable(questionInfoState(MAX_NUMBER))
  const answers = contents?.data?.results

  return (
    <>
      {state === 'loading' && <div>로딩 중...</div>}
      {state === 'hasValue' && <Question answer={answers[quizNum - 1]} />}
    </>
  )
}

export default QuizQuestionPage
