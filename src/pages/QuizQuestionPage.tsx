import React from 'react'
import { useParams } from 'react-router-dom'

import { Stack, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { useRecoilValueLoadable, useRecoilValue } from 'recoil'
import { questionInfoState, selectedAnswerState } from 'states/quiz.state'

import { Question } from 'components'

import { MAX_NUMBER } from 'utils/quiz'

function QuizQuestionPage() {
  const { id } = useParams()
  const questionNum = Number(id)

  const { state, contents } = useRecoilValueLoadable(questionInfoState(MAX_NUMBER))
  const answers = contents?.data?.results
  const { correct, incorrect } = useRecoilValue(selectedAnswerState)
  const selectedAnswer = [...correct, ...incorrect]

  return (
    <>
      {state === 'loading' && <div>로딩 중...</div>}
      {state === 'hasValue' && <Question answer={answers[questionNum - 1]} />}

      <Stack direction='row' justifyContent={questionNum > 1 ? 'space-between' : 'flex-end'} mt={2}>
        {questionNum > 1 && <Button startIcon={<ArrowBackIcon />}>이전 문항</Button>}
        {questionNum !== MAX_NUMBER && selectedAnswer.length > 0 && (
          <Button endIcon={<ArrowForwardIcon />}>다음 문항</Button>
        )}
      </Stack>
    </>
  )
}

export default QuizQuestionPage
