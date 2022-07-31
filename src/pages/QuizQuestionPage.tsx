import React, { useEffect } from 'react'

import { Box, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useRecoilValueLoadable, useRecoilValue } from 'recoil'
import { questionInfoState, quizNumberState } from 'states/quiz.state'

import { Question } from 'components'

import { MAX_NUMBER } from 'utils/quiz'

const RootPage = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function QuizQuestionPage() {
  const quizNum = useRecoilValue(quizNumberState)
  const { state, contents } = useRecoilValueLoadable(questionInfoState(MAX_NUMBER))

  const answers = contents?.data?.results

  // 뒤로가기 막기
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

  // 새로고침 알림 메시지
  const preventClose = (event: BeforeUnloadEvent) => {
    event.preventDefault()
    event.returnValue = ''
  }

  useEffect(() => {
    ;(() => {
      window.addEventListener('beforeunload', preventClose)
    })()
    return () => {
      window.removeEventListener('beforeunload', preventClose)
    }
  }, [])

  return (
    <RootPage>
      {state === 'loading' && <CircularProgress />}
      {state === 'hasValue' && <Question answer={answers[quizNum - 1]} />}
    </RootPage>
  )
}

export default QuizQuestionPage
