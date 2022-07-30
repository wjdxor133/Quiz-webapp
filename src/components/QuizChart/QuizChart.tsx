import Chart from 'react-apexcharts'

import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { useRecoilValue } from 'recoil'
import { allSelectedAnswerState } from 'states/quiz.state'

function QuizChart() {
  const { correct, incorrect } = useRecoilValue(allSelectedAnswerState)
  const theme = useTheme()

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
        color: theme.palette.primary.light,
      },
      {
        name: '오답 개수',
        data: [incorrect.length],
        color: theme.palette.error.light,
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
