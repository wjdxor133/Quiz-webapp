import React from 'react'

import { Card, CardActions, CardContent, Typography, FormControlLabel, Radio } from '@mui/material'

import { useRecoilState } from 'recoil'
import { selectedAnswerState } from 'states/quiz.state'

import { AnswerInfo } from 'types/quiz.type'

interface AnswerCardProps {
  answer: AnswerInfo
  content: string
}

function AnswerCard({ answer, content }: AnswerCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(selectedAnswerState)

  const handleSelectedAnswer = () => {
    setSelectedAnswer({ ...selectedAnswer, correct: [...selectedAnswer.correct, answer] })
  }

  return (
    <Card>
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
    </Card>
  )
}

export default AnswerCard
