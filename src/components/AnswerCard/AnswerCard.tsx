import React from 'react'
import { Card, CardActions, CardContent, Typography, FormControlLabel, Radio } from '@mui/material'

interface AnswerCardProps {
  answer: string
}

function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <Card>
      <CardContent>
        <CardActions>
          <FormControlLabel
            value={answer}
            control={<Radio />}
            label={<Typography color='text.secondary'>{answer}</Typography>}
          />
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default AnswerCard
