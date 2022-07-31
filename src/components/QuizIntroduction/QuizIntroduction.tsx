import React, { useEffect } from 'react'

import { Typography, Button, Stack, FormControl } from '@mui/material'

import { useSetRecoilState } from 'recoil'
import { localStorageState, consumedTimeState } from 'states/quiz.state'

import usePageMove from 'hooks/usePageMove'
import useQuizReset from 'hooks/useQuizReset'

import { PATH_NAME } from 'routes'

function QuizIntroduction() {
  const setConsumedTime = useSetRecoilState(consumedTimeState)

  const { handlePageMove } = usePageMove()
  const { handleQuizReset } = useQuizReset()

  useEffect(() => {
    if (localStorage.getItem(localStorageState)) {
      handleQuizReset()
    }
  }, [handleQuizReset])

  const handleQuizStart = () => {
    const startTime = Date.now()

    setConsumedTime(startTime)
    handlePageMove(`${PATH_NAME['question']}`)
  }

  return (
    <FormControl component={Stack} fullWidth rowGap={3}>
      <Typography variant='h4' component='h4' align='center'>
        📝 퀴즈를 풀어볼까요??
      </Typography>
      <Button variant='contained' size='large' onClick={handleQuizStart}>
        퀴즈 풀기
      </Button>
    </FormControl>
  )
}

export default QuizIntroduction
