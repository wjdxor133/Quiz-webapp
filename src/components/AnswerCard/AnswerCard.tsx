import React from 'react'

import { Card, CardActions, CardContent, Typography, FormControlLabel, Radio } from '@mui/material'

import { useRecoilState } from 'recoil'
import { allSelectedAnswerState } from 'states/quiz.state'

import { AlertDialog } from 'components'

import { AnswerInfo } from 'types/quiz.type'

interface AnswerCardProps {
  answer: AnswerInfo
  content: string
}

function AnswerCard({ answer, content }: AnswerCardProps) {
  const { correct_answer: correctAnswer } = answer
  const [allSelectedAnswer, setAllSelectedAnswer] = useRecoilState(allSelectedAnswerState)

  const handleSelectedAnswer = () => {
    if (correctAnswer === content) {
      setAllSelectedAnswer({
        ...allSelectedAnswer,
        correct: [...allSelectedAnswer.correct, answer],
      })
    } else {
      setAllSelectedAnswer({
        ...allSelectedAnswer,
        incorrect: [...allSelectedAnswer.incorrect, answer],
      })
    }
  }

  return (
    <Card>
      <AlertDialog status={correctAnswer === content} correct={correctAnswer}>
        <CardContent>
          <CardActions>
            <FormControlLabel
              value={content}
              control={<Radio />}
              label={<Typography color='text.secondary'>{content}</Typography>}
              onChange={handleSelectedAnswer}
            />
          </CardActions>
        </CardContent>
      </AlertDialog>
    </Card>
  )
}

export default AnswerCard
