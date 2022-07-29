import Chart from 'react-apexcharts'

import { useRecoilValue } from 'recoil'
import { allSelectedAnswerState } from 'states/quiz.state'

function QuizChart() {
  const { correct, incorrect } = useRecoilValue(allSelectedAnswerState)

  const state = {
    options: {
      chart: {
        id: 'quiz-bar',
      },
      xaxis: {
        categories: [''],
      },
    },
    series: [
      {
        name: '정답 개수',
        data: [correct.length],
      },
      {
        name: '오답 개수',
        data: [incorrect.length],
      },
    ],
  }

  const { options, series } = state

  return (
    <>
      <Chart options={options} series={series} type='bar' width='500' />
    </>
  )
}

export default QuizChart
