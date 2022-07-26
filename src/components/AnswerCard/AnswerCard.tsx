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
  Box,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { useRecoilState } from 'recoil'
import { quizNumberState, allSelectedAnswerState, consumedTimeState } from 'states/quiz.state'

import usePageMove from 'hooks/usePageMove'

import { PATH_NAME } from 'routes'
import { AnswerInfo } from 'types/quiz.type'
import { MAX_NUMBER } from 'utils/quiz'
import { getUnescapeHtml } from 'utils/character'

interface AnswerCardProps {
  answer: AnswerInfo
  contents: string[]
  content: string
}

function AnswerCard({ answer, contents, content }: AnswerCardProps) {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const [message, setMessage] = useState('')

  const [allSelectedAnswer, setAllSelectedAnswer] = useRecoilState(allSelectedAnswerState)
  const [quizNum, setQuizNum] = useRecoilState(quizNumberState)
  const [consumedTime, setConsumedTime] = useRecoilState(consumedTimeState)
  const { handlePageMove } = usePageMove()

  const { correct_answer: correctAnswer } = answer

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
    setSelectedValue('')
    setQuizNum((prev) => prev + 1)
  }

  useEffect(() => {
    if (selectedValue === correctAnswer) {
      setMessage('🎉 정답입니다!')
    }

    if (selectedValue && selectedValue !== correctAnswer) {
      setMessage('💩 오답입니다!')
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
              label={<Typography color='text.secondary'>{getUnescapeHtml(content)}</Typography>}
              onClick={handleClickOpen}
            />
            <Dialog open={open} fullWidth maxWidth='xs'>
              <Box component={DialogContent} p={4}>
                <DialogContentText variant='h5' align='center'>
                  {message}
                </DialogContentText>
              </Box>
              <Box p={2} pt={0}>
                {MAX_NUMBER > quizNum ? (
                  <Button
                    fullWidth
                    variant='contained'
                    size='large'
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleNextAnswer}
                  >
                    다음 문항
                  </Button>
                ) : (
                  <Button fullWidth variant='contained' size='large' onClick={handleCheckResult}>
                    결과 확인
                  </Button>
                )}
              </Box>
            </Dialog>
          </RadioGroup>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default AnswerCard
