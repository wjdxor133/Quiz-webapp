import { useResetRecoilState } from 'recoil'
import {
  quizNumberState,
  consumedTimeState,
  allSelectedAnswerState,
  localStorageState,
} from 'states/quiz.state'

function useQuizReset() {
  const handleResetQuizNum = useResetRecoilState(quizNumberState)
  const handleResetConsumedTime = useResetRecoilState(consumedTimeState)
  const handleResetAllSelectedAnswer = useResetRecoilState(allSelectedAnswerState)

  const handleQuizReset = () => {
    handleResetQuizNum()
    handleResetConsumedTime()
    handleResetAllSelectedAnswer()
    localStorage.removeItem(localStorageState)
  }

  return { handleQuizReset }
}

export default useQuizReset
