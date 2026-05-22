import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import React from "react"

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <h1 className="text-2xl font-bold">Hello World!</h1>
      <div>
        <Button variant="outline">Click me</Button>
      </div>
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
        />
      </div>
    </>
  )
}

export default App
