import React from 'react'

import {
  FormControl,
  FormControlLabel,
  Stack,
  RadioGroup,
  Radio,
  Typography,
  Box,
} from '@mui/material'

import { SelectedAnswerInfo } from 'types/quiz.type'

interface WrongAnswerProps {
  incorrectAnswer: SelectedAnswerInfo
}

function WrongAnswer({ incorrectAnswer }: WrongAnswerProps) {
  const { question, allAnswers, selectedAnswer, correct_answer: correctAnswer } = incorrectAnswer

  return (
    <FormControl component={Stack} rowGap={1}>
      <Typography>{`Q. ${question}`}</Typography>
      <RadioGroup defaultValue={selectedAnswer}>
        {allAnswers.map((content, idx) => {
          return (
            <FormControlLabel
              key={idx}
              value={content}
              control={<Radio />}
              label={content}
              disabled
            />
          )
        })}
      </RadioGroup>
      <Box>
        <Typography variant='subtitle2' color={(theme) => theme.palette.grey[600]}>
          [해설]
        </Typography>
        <Typography
          variant='subtitle2'
          color={(theme) => theme.palette.grey[600]}
        >{`정답은 ${correctAnswer}입니다.`}</Typography>
      </Box>
    </FormControl>
  )
}

export default WrongAnswer
