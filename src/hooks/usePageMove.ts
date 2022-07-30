import { useNavigate } from 'react-router-dom'

function usePageMove() {
  const navigate = useNavigate()

  const handlePageMove = (path: string) => {
    navigate(`${path}`)
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return { handlePageMove, handleGoBack }
}

export default usePageMove
