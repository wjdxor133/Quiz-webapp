import Chart from 'react-apexcharts'

import { Box } from '@mui/material'

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
    <Box>
      <Chart options={options} series={series} type='bar' width='100%' />
    </Box>
  )
}

export default QuizChart
