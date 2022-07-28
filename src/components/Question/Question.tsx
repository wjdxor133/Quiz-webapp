import React from 'react'

import { FormControl, RadioGroup, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useRecoilValue } from 'recoil'
import { questionNumberState } from 'states/quiz.state'

import { AnswerCard } from 'components'

import { AnswerInfo } from 'types/quiz.type'
import { MAX_NUMBER } from 'utils/quiz'

interface AnswerCardListProps {
  answer: AnswerInfo
}

const RadioGroupWrapper = styled(RadioGroup)(
  ({ theme }) => `
  row-gap: ${theme.spacing(2)};
`,
)

function AnswerCardList({ answer }: AnswerCardListProps) {
  const questionNumber = useRecoilValue(questionNumberState)
  const { question, correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } = answer
  const contents = [correctAnswer, ...incorrectAnswers]

  return (
    <FormControl fullWidth>
      <Typography
        variant='subtitle2'
        align='right'
      >{`${questionNumber} / ${MAX_NUMBER}`}</Typography>
      <Typography component='h6' variant='h6' mb={1}>
        {`Q. ${question}`}
      </Typography>
      <RadioGroupWrapper>
        {contents.map((content, idx) => {
          return <AnswerCard key={idx} answer={answer} content={content} />
        })}
      </RadioGroupWrapper>
    </FormControl>
  )
}

export default AnswerCardList
