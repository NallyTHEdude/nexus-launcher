import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { Calendar } from '@/components/ui/calendar.tsx'

function Home() {
  const navigate = useNavigate()
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => navigate('/login/')}>Hello</Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    </div>
  )
}

export default Home