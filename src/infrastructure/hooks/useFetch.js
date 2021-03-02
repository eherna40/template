import { useState } from 'react'
export default function useFetch(url, method = 'POST') {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const doFetch = async (variables = {}) => {
    let { param, options } = variables
    setLoading(true)
    setError(null)
    try {
      param = param || ''
      const res = await fetch(url + param, {
        method,
        ...options,
      })
      if (res.ok) {
        const json = await res.json()
        setData(json)
        return {
          data: json,
        }
      }
      setError(true)
      return {
        errors: true,
      }
    } catch (e) {
      setError(e)
      return {
        errors: e.message,
      }
    } finally {
      setLoading(false)
    }
  }

  return [doFetch, { loading, data, error }]
}
