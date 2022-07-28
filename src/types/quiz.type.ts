export interface AnswerInfo {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface SelectedAnswerInfo {
  correct: AnswerInfo[]
  incorrect: AnswerInfo[]
}
