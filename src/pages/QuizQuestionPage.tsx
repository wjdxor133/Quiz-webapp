import React from 'react'
import { useParams } from 'react-router-dom'

import { useRecoilValueLoadable } from 'recoil'
import { questionInfoState } from 'states/quiz.state'

import { Question } from 'components'

import { MAX_NUMBER } from 'utils/quiz'

function QuizQuestionPage() {
  const { id } = useParams()
  const questionNum = Number(id)

  const { state, contents } = useRecoilValueLoadable(questionInfoState(MAX_NUMBER))
  const answers = contents?.data?.results

  return (
    <>
      {state === 'loading' && <div>로딩 중...</div>}
      {state === 'hasValue' && <Question answer={answers[questionNum - 1]} />}
    </>
  )
}

export default QuizQuestionPage
