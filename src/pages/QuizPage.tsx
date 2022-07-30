import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import { QuizIntroduction } from 'components'

const RootPage = styled(Box)`
  width: 100%;
`

function QuizPage() {
  return (
    <RootPage>
      <QuizIntroduction />
    </RootPage>
  )
}

export default QuizPage
