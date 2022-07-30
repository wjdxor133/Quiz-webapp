import React from 'react'

import { Box, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useRecoilValueLoadable, useRecoilValue } from 'recoil'
import { questionInfoState, quizNumberState } from 'states/quiz.state'

import { Question } from 'components'

import { MAX_NUMBER } from 'utils/quiz'

const RootPage = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function QuizQuestionPage() {
  const quizNum = useRecoilValue(quizNumberState)

  const { state, contents } = useRecoilValueLoadable(questionInfoState(MAX_NUMBER))
  const answers = contents?.data?.results

  return (
    <RootPage>
      {state === 'loading' && <CircularProgress />}
      {state === 'hasValue' && <Question answer={answers[quizNum - 1]} />}
    </RootPage>
  )
}

export default QuizQuestionPage
