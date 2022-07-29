import React from 'react'

import { Typography, Button, Stack } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

import { useRecoilValue, useResetRecoilState } from 'recoil'
import { quizNumberState, consumedTimeState, allSelectedAnswerState } from 'states/quiz.state'

import usePageMove from 'hooks/usePageMove'

import { getSeconds, getMinutes } from 'utils/time'
import { PATH_NAME } from 'routes'

import { QuizChart } from 'components'

function QuizResultPage() {
  const consumedTime = useRecoilValue(consumedTimeState)
  const seconds = getSeconds(consumedTime)
  const minutes = getMinutes(consumedTime)
  const handleResetQuizNum = useResetRecoilState(quizNumberState)
  const handleResetConsumedTime = useResetRecoilState(consumedTimeState)
  const handleResetAllSelectedAnswer = useResetRecoilState(allSelectedAnswerState)
  const { handlePageMove } = usePageMove()

  const handleReset = () => {
    handleResetQuizNum()
    handleResetConsumedTime()
    handleResetAllSelectedAnswer()
    handlePageMove(PATH_NAME['quiz'])
  }

  return (
    <>
      <Typography component='h4' variant='h4' pb={1}>
        오늘의 퀴즈 결과!
      </Typography>
      <Typography
        component='h6'
        variant='h6'
        color={(theme) => theme.palette.grey[700]}
      >{`소요 시간: ${
        60000 > consumedTime ? `${seconds}초` : `${minutes}분 ${seconds}초`
      }`}</Typography>
      <QuizChart />

      <Stack direction='column' rowGap={1} mt={1}>
        <Button variant='contained' size='large'>
          오답노트 보러가기
        </Button>
        <Button variant='text' size='large' startIcon={<RestartAltIcon />} onClick={handleReset}>
          다시 하기
        </Button>
      </Stack>
    </>
  )
}

export default QuizResultPage
