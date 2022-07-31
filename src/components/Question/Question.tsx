import React from 'react'

import { motion } from 'framer-motion'

import { FormControl, RadioGroup, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useRecoilValue } from 'recoil'
import { quizNumberState } from 'states/quiz.state'

import { AnswerCard } from 'components'

import { AnswerInfo } from 'types/quiz.type'
import { MAX_NUMBER } from 'utils/quiz'
import { getUnescapeHtml } from 'utils/character'

interface AnswerCardListProps {
  answer: AnswerInfo
}

const RadioGroupWrapper = styled(RadioGroup)(
  ({ theme }) => `
  row-gap: ${theme.spacing(2)};
`,
)

function AnswerCardList({ answer }: AnswerCardListProps) {
  const quizNumber = useRecoilValue(quizNumberState)
  const { question, correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } = answer
  const contents = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)

  return (
    <FormControl component={Box} fullWidth>
      <Typography
        variant='subtitle2'
        align='right'
        color={(theme) => theme.palette.grey[800]}
      >{`${quizNumber} / ${MAX_NUMBER}`}</Typography>
      <Typography component='h6' variant='h6' mb={1}>
        {`Q. ${getUnescapeHtml(question)}`}
      </Typography>
      <RadioGroupWrapper>
        {contents.map((content, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100, transition: { delay: 0.5, ease: 'easeIn' } }}
              transition={{
                duration: 0.25,
              }}
            >
              <AnswerCard answer={answer} contents={contents} content={content} />
            </motion.div>
          )
        })}
      </RadioGroupWrapper>
    </FormControl>
  )
}

export default AnswerCardList
