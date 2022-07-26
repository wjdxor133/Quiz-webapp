import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material'

function AnswerCard() {
  return (
    <Card>
      <CardContent>
        <CardActions>
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography color='text.secondary'>Word of the Day</Typography>}
          />
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default AnswerCard
