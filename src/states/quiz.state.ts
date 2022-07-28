import { atom, atomFamily } from 'recoil'
import { getQuizInfo } from 'apis/quiz.api'

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
