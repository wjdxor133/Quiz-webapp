import { atom, atomFamily } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { getQuizInfo } from 'apis/quiz.api'
import { AllSelectedAnswerInfo } from 'types/quiz.type'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
})

export const quizNumberState = atom<number>({
  key: 'quizNumberState',
  default: 1,
  effects_UNSTABLE: [persistAtom],
})

export const consumedTimeState = atom<number>({
  key: 'consumedTimeState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
})

export const questionInfoState = atomFamily({
  key: 'questionInfoState',
  default: async (number: number) => {
    return await getQuizInfo(number)
  },
  effects: [persistAtom],
})

export const allSelectedAnswerState = atom<AllSelectedAnswerInfo>({
  key: 'allSelectedAnswerState',
  default: {
    correctAnswers: [],
    incorrectAnswers: [],
  },
  effects_UNSTABLE: [persistAtom],
})
