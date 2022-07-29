import { atom, atomFamily } from 'recoil'
import { getQuizInfo } from 'apis/quiz.api'
import { AllSelectedAnswerInfo } from 'types/quiz.type'

export const quizNumberState = atom<number>({
  key: 'quizNumberState',
  default: 1,
})

export const questionInfoState = atomFamily({
  key: 'questionInfoState',
  default: async (number: number) => {
    return await getQuizInfo(number)
  },
})

export const allSelectedAnswerState = atom<AllSelectedAnswerInfo>({
  key: 'allSelectedAnswerState',
  default: {
    correct: [],
    incorrect: [],
  },
})
