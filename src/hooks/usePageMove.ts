import { useNavigate } from 'react-router-dom'

function usePageMove() {
  const navigate = useNavigate()

  const handlePageMove = (path: string) => {
    navigate(`${path}`)
  }

  return { handlePageMove }
}

export default usePageMove
