import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export default function useSocket(url) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const s = io(url)

    setSocket(s)

    return () => {
      s.disconnect()
    }
  }, [url])

  return socket
}
