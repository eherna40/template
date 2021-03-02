import { useState, useEffect } from 'react'
export default function useQuery(url, options) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    const doFetch = async () => {
      setLoading(true)
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        if (!signal.aborted) {
          setData(json)
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e.message)
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }
    doFetch()
    return () => {
      abortController.abort()
    }
  }, [])

  return { loading, data, error }
}
