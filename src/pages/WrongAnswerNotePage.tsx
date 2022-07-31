import React from 'react'

import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import BarChartIcon from '@mui/icons-material/BarChart'

import { useRecoilValue } from 'recoil'
import { allSelectedAnswerState } from 'states/quiz.state'

import usePageMove from 'hooks/usePageMove'

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
  const { handleGoBack } = usePageMove()

  return (
    <RootPage>
      <Typography component='h6' variant='h6' align='center'>
        🔍 오답 노트
      </Typography>
      {incorrectAnswers.map((incorrectAnswer, idx) => {
        return <WrongAnswer key={idx} incorrectAnswer={incorrectAnswer} />
      })}
      <Box pb={2}>
        <Button
          fullWidth
          variant='contained'
          size='large'
          startIcon={<BarChartIcon />}
          onClick={handleGoBack}
        >
          결과창 다시보기
        </Button>
      </Box>
    </RootPage>
  )
}

export default WrongAnswerNotePage
