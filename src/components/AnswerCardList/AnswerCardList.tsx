import React from 'react'
import { FormControl, RadioGroup } from '@mui/material'
import { styled } from '@mui/material/styles'

import { AnswerCard } from 'components'

interface AnswerCardListProps {
  answers: string[]
}

const RadioGroupWrapper = styled(RadioGroup)(
  ({ theme }) => `
  row-gap: ${theme.spacing(2)};
`,
)

function AnswerCardList({ answers }: AnswerCardListProps) {
  return (
    <FormControl fullWidth>
      <RadioGroupWrapper>
        {answers.map((answer, idx) => {
          return <AnswerCard key={idx} answer={answer} />
        })}
      </RadioGroupWrapper>
    </FormControl>
  )
}

export default AnswerCardList
