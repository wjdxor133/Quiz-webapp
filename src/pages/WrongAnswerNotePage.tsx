import React from 'react'

import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useRecoilValue } from 'recoil'
import { allSelectedAnswerState } from 'states/quiz.state'

import { WrongAnswer } from 'components'

const RootPage = styled(Box)(
  ({ theme }) => `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(3)};
`,
)

function WrongAnswerNotePage() {
  const { incorrectAnswers } = useRecoilValue(allSelectedAnswerState)

  console.log('incorrectAnswers', incorrectAnswers)

  return (
    <RootPage>
      <Typography component='h6' variant='h6' align='center'>
        오답 노트
      </Typography>
      {incorrectAnswers.map((incorrectAnswer, idx) => {
        return <WrongAnswer key={idx} incorrectAnswer={incorrectAnswer} />
      })}
    </RootPage>
  )
}

export default WrongAnswerNotePage
