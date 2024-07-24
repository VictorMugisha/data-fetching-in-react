import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const BASE_URL = "https://jsonplaceholder.typicode.com"
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(`${BASE_URL}/posts`)
        const data = await response.json()
        setPosts(data)
      } catch (e) {
        setError(e)
      } finally {
        setIsLoading(false)
      }

    }

    getData()
  }, [])

  return (
    <main>
      <h2>Data Fetching in React</h2>
      {isLoading ? <div>Loading...</div> : 
      error ? <div>Something went wrong</div> :
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      }
    </main>
  )
}

export default App
