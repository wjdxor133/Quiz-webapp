import React, { useState, useEffect } from 'react'

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
  const [selectedValue, setSelectedValue] = useState('')
  const [message, setMessage] = useState('')
  const [quizNum, setQuizNum] = useRecoilState(quizNumberState)
  const [consumedTime, setConsumedTime] = useRecoilState(consumedTimeState)
  const { handlePageMove } = usePageMove()

  const handleSelectedAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = (event.target as HTMLInputElement).value
    setSelectedValue(selected)

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
    handleClose()
    setQuizNum((prev) => prev + 1)
  }

  useEffect(() => {
    if (selectedValue === correctAnswer) {
      setMessage('🎉 정답입니다!')
    } else {
      setMessage('❌ 오답입니다!')
    }
  }, [selectedValue, correctAnswer])

  const handleCheckResult = () => {
    const endTime = Date.now()

    setConsumedTime(endTime - consumedTime)
    handlePageMove(`${PATH_NAME['result']}`)
  }

  return (
    <Card>
      <CardContent>
        <CardActions>
          <RadioGroup value={selectedValue} onChange={handleSelectedAnswer}>
            <FormControlLabel
              value={content}
              control={<Radio />}
              label={<Typography color='text.secondary'>{content}</Typography>}
              onClick={handleClickOpen}
            />
            <Dialog open={open} fullWidth maxWidth='xs'>
              <DialogContent>
                <DialogContentText variant='h6' align='center'>
                  {message}
                </DialogContentText>
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
