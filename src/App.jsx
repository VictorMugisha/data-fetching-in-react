import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const BASE_URL = "https://jsonplaceholder.typicode.com"
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const response = await fetch(`${BASE_URL}/posts`)
      const data = await response.json()
      setPosts(data)
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <main>
      <h2>Data Fetching in React</h2>
      {isLoading ? <div>Loading...</div> :
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
