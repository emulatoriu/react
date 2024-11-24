import { useEffect, useState } from "react"

export default function useTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [timer, setTimer] = useState(0)
  const [laps, setLaps] = useState([])

  useEffect(() => {
    let interval;
    if (isRunning) interval = setInterval(() => setTimer(prev => prev + 1), 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  const handleStartClicked = () => setIsRunning(true)
  const handleStopClicked = () => setIsRunning(false)
  const handleLapAddClicked = () => {    
    setLaps(prev => {
      return [...prev, timer]
    })
    setTimer(0)
  }

  return {isRunning, timer, laps, handleStartClicked, handleStopClicked, handleLapAddClicked}

}