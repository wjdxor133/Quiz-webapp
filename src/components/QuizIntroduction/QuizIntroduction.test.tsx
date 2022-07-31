import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QuizIntroduction from './QuizIntroduction'

const mockedNavigator = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigator,
}))

describe('퀴즈 소개 컴포넌트를 렌더링한다.', () => {
  test('제목과 버튼이 있습니다.', () => {
    render(<QuizIntroduction />)

    const title = screen.getByText('📝 퀴즈를 풀어볼까요??')

    const button = screen.getByRole('button', {
      name: '퀴즈 풀기',
    })

    expect(title).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})

describe('버튼 기능을 테스트합니다.', () => {
  test('버튼을 눌렀을 때, 퀴즈 문제풀기 페이지로 이동합니다.', () => {
    render(<QuizIntroduction />)

    const button = screen.getByRole('button', {
      name: '퀴즈 풀기',
    })

    userEvent.click(button)

    expect(screen.queryByText('/퀴즈 풀기/i')).not.toBeInTheDocument()
  })
})
