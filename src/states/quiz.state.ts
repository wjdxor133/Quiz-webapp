import { atom, atomFamily } from 'recoil'
import { getQuizInfo } from 'apis/quiz.api'
import { SelectedAnswerInfo } from 'types/quiz.type'

export const questionNumberState = atom<number>({
  key: 'questionNumberState',
  default: 1,
})

export const questionInfoState = atomFamily({
  key: 'questionInfoState',
  default: async (number: number) => {
    return await getQuizInfo(number)
  },
})

export const selectedAnswerState = atom<SelectedAnswerInfo>({
  key: 'selectedAnswerState',
  default: {
    correct: [],
    incorrect: [],
  },
})
