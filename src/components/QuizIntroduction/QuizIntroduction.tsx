import React from 'react'
import { Typography, Button, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

const QuizIntroductionWrapper = styled(Stack)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

function QuizIntroduction() {
  return (
    <QuizIntroductionWrapper rowGap={3}>
      <Typography variant='h4' component='h4' align='center'>
        퀴즈를 풀어볼까요??
      </Typography>
      <Button variant='contained' size='large'>
        퀴즈 풀기
      </Button>
    </QuizIntroductionWrapper>
  )
}

export default QuizIntroduction
