import React from 'react'
import { Typography, Button, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

import usePageMove from 'hooks/usePageMove'

import { PATH_NAME } from 'routes'

const QuizIntroductionWrapper = styled(Stack)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

function QuizIntroduction() {
  const { handlePageMove } = usePageMove()

  return (
    <QuizIntroductionWrapper rowGap={3}>
      <Typography variant='h4' component='h4' align='center'>
        퀴즈를 풀어볼까요??
      </Typography>
      <Button
        variant='contained'
        size='large'
        onClick={() => handlePageMove(PATH_NAME['question'])}
      >
        퀴즈 풀기
      </Button>
    </QuizIntroductionWrapper>
  )
}

export default QuizIntroduction
