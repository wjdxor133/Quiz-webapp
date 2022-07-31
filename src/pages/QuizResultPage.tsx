import React, { useEffect } from 'react'

import { Typography, Button, Stack, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

import { useRecoilValue } from 'recoil'
import { consumedTimeState } from 'states/quiz.state'

import usePageMove from 'hooks/usePageMove'
import useQuizReset from 'hooks/useQuizReset'

import { getSeconds, getMinutes } from 'utils/time'
import { PATH_NAME } from 'routes'

import { QuizChart } from 'components'

const RootPage = styled(Box)(
  ({ theme }) => `
  width: 100%;
  row-gap: ${theme.spacing(2)};
`,
)

function QuizResultPage() {
  const consumedTime = useRecoilValue(consumedTimeState)
  const seconds = getSeconds(consumedTime)
  const minutes = getMinutes(consumedTime)

  const { handlePageMove } = usePageMove()
  const { handleQuizReset } = useQuizReset()

  const handlePreventGoBack = () => {
    history.pushState(null, '', location.href)
  }

  useEffect(() => {
    history.pushState(null, '', location.href)
    window.addEventListener('popstate', handlePreventGoBack)
    return () => {
      window.removeEventListener('popstate', handlePreventGoBack)
    }
  }, [])

  const handleReset = () => {
    handleQuizReset()
    handlePageMove(PATH_NAME['quiz'])
  }

  return (
    <RootPage>
      <Typography component='h4' variant='h4'>
        오늘의 퀴즈 결과!
      </Typography>
      <Typography
        component='h6'
        variant='h6'
        color={(theme) => theme.palette.grey[700]}
        mt={1}
      >{`⏱ 소요 시간: ${
        60000 > consumedTime ? `${seconds}초` : `${minutes}분 ${seconds}초`
      }`}</Typography>
      <QuizChart />

      <Stack direction='column' rowGap={1}>
        <Button
          variant='contained'
          size='large'
          onClick={() => handlePageMove(`${PATH_NAME['wrong']}`)}
        >
          오답노트 보러가기
        </Button>
        <Button variant='text' size='large' startIcon={<RestartAltIcon />} onClick={handleReset}>
          다시 풀기
        </Button>
      </Stack>
    </RootPage>
  )
}

export default QuizResultPage
