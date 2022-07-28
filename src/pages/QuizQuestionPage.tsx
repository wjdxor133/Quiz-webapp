import React from 'react'
import { useParams } from 'react-router-dom'

import { useRecoilValueLoadable } from 'recoil'
import { questionInfoState } from 'states/quiz.state'

import { Question } from 'components'

import { MAX_NUMBER } from 'utils/quiz'

function QuizQuestionPage() {
  const { id: questionNum } = useParams()

  const { state, contents } = useRecoilValueLoadable(questionInfoState(MAX_NUMBER))
  const answers = contents?.data?.results

  return (
    <>
      <h1>퀴즈 문항 페이지입니다.</h1>
      {state === 'loading' && <div>로딩 중...</div>}
      {state === 'hasValue' && <Question answer={answers[Number(questionNum) - 1]} />}
    </>
  )
}

export default QuizQuestionPage
