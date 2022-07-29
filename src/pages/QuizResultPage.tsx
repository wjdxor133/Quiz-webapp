import React from 'react'

import { Typography } from '@mui/material'

import { useRecoilValue } from 'recoil'
import { consumedTimeState } from 'states/quiz.state'

import { getSeconds, getMinutes } from 'utils/time'

import { QuizChart } from 'components'

function QuizResultPage() {
  const consumedTime = useRecoilValue(consumedTimeState)

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
        60000 > consumedTime
          ? `${getSeconds(consumedTime)}초`
          : `${getMinutes(consumedTime)}분 ${getSeconds(consumedTime)}초`
      }`}</Typography>
      <QuizChart />
    </>
  )
}

export default QuizResultPage
