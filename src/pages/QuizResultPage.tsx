import React from 'react'

import { Typography } from '@mui/material'

import { useRecoilValue } from 'recoil'
import { consumedTimeState, allSelectedAnswerState } from 'states/quiz.state'

import { getSeconds, getMinutes } from 'utils/time'

function QuizResultPage() {
  const consumedTime = useRecoilValue(consumedTimeState)
  const { correct, incorrect } = useRecoilValue(allSelectedAnswerState)

  return (
    <>
      <Typography component='h4' variant='h4'>
        오늘의 퀴즈 결과!
      </Typography>

      <Typography>{`소요 시간: ${
        60000 > consumedTime
          ? `${getSeconds(consumedTime)}초`
          : `${getMinutes(consumedTime)}분 ${getSeconds(consumedTime)}초`
      }`}</Typography>
      <Typography>{`정답 개수: ${correct.length}개`}</Typography>
      <Typography>{`오답 개수: ${incorrect.length}개`}</Typography>
    </>
  )
}

export default QuizResultPage
