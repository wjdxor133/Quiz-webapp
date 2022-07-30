import React, { useState } from 'react'

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { useRecoilState } from 'recoil'
import { quizNumberState, allSelectedAnswerState, consumedTimeState } from 'states/quiz.state'

import usePageMove from 'hooks/usePageMove'

import { PATH_NAME } from 'routes'
import { AnswerInfo } from 'types/quiz.type'
import { MAX_NUMBER } from 'utils/quiz'

interface AnswerCardProps {
  answer: AnswerInfo
  contents: string[]
  content: string
}

function AnswerCard({ answer, contents, content }: AnswerCardProps) {
  const { correct_answer: correctAnswer } = answer
  const [allSelectedAnswer, setAllSelectedAnswer] = useRecoilState(allSelectedAnswerState)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [quizNum, setQuizNum] = useRecoilState(quizNumberState)
  const [consumedTime, setConsumedTime] = useRecoilState(consumedTimeState)
  const { handlePageMove } = usePageMove()

  const handleSelectedAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = (event.target as HTMLInputElement).value
    setValue(selected)

    if (correctAnswer === content) {
      setAllSelectedAnswer({
        ...allSelectedAnswer,
        correctAnswers: [
          ...allSelectedAnswer.correctAnswers,
          { ...answer, selectedAnswer: selected, allAnswers: contents },
        ],
      })
    } else {
      setAllSelectedAnswer({
        ...allSelectedAnswer,
        incorrectAnswers: [
          ...allSelectedAnswer.incorrectAnswers,
          { ...answer, selectedAnswer: selected, allAnswers: contents },
        ],
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

  const handleCheckResult = () => {
    const endTime = Date.now()

    setConsumedTime(endTime - consumedTime)
    handlePageMove(`${PATH_NAME['result']}`)
  }

  return (
    <Card>
      <CardContent>
        <CardActions>
          <RadioGroup value={value} onChange={handleSelectedAnswer}>
            <FormControlLabel
              value={content}
              control={<Radio />}
              label={<Typography color='text.secondary'>{content}</Typography>}
              onClick={handleClickOpen}
            />
            <Dialog open={open} fullWidth maxWidth='xs'>
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
                <Button variant='contained' size='large' onClick={handleCheckResult}>
                  결과 확인
                </Button>
              )}
            </Dialog>
          </RadioGroup>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default AnswerCard
