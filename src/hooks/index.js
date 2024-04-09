import { useEffect } from 'react'

function useConsoleLog(variable) {
  useEffect(() => {
    console.log(variable)
  })
}

export default useConsoleLog
