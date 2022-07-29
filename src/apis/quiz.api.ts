import axios from 'axios'
import { BASE_API } from 'apis'

export const getQuizInfo = (number: number) => {
  return axios.get(`${BASE_API}?amount=${number}`)
}
