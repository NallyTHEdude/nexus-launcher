import {useNavigate} from 'react-router-dom'
import {Button} from '@/components/ui/button.tsx'

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => navigate('/login/')}>Hello</Button>
    </div>
  )
}

export default Home