export interface AnswerInfo {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface AllSelectedAnswerInfo {
  correct: AnswerInfo[]
  incorrect: AnswerInfo[]
}
