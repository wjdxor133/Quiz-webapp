import { useState } from 'react'

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  FormControlLabel,
  Radio,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { useRecoilState } from 'recoil'
import { quizNumberState, allSelectedAnswerState } from 'states/quiz.state'

import { AnswerInfo } from 'types/quiz.type'
import { MAX_NUMBER } from 'utils/quiz'

interface AnswerCardProps {
  answer: AnswerInfo
  content: string
}

function AnswerCard({ answer, content }: AnswerCardProps) {
  const { correct_answer: correctAnswer } = answer
  const [allSelectedAnswer, setAllSelectedAnswer] = useRecoilState(allSelectedAnswerState)
  const [open, setOpen] = useState(false)
  const [quizNum, setQuizNum] = useRecoilState(quizNumberState)

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

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNextAnswer = () => {
    setQuizNum((prev) => prev + 1)
    handleClose()
  }

  return (
    <Card>
      <CardContent>
        <CardActions>
          <FormControlLabel
            value={content}
            control={<Radio />}
            label={<Typography color='text.secondary'>{content}</Typography>}
            onClick={handleClickOpen}
            onChange={handleSelectedAnswer}
          />
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
            <DialogTitle variant='h6'>
              {correctAnswer === content ? '🎉 정답!' : '❌ 오답!'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>{`정답은 ${correctAnswer}입니다.`}</DialogContentText>
            </DialogContent>
            {MAX_NUMBER !== quizNum ? (
              <Button
                variant='contained'
                size='large'
                endIcon={<ArrowForwardIcon />}
                onClick={handleNextAnswer}
              >
                다음 문항
              </Button>
            ) : (
              <Button variant='contained' size='large'>
                결과 확인
              </Button>
            )}
          </Dialog>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default AnswerCard
