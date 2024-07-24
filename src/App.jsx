import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const BASE_URL = "https://jsonplaceholder.typicode.com"
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${BASE_URL}/posts`)
      const data = await response.json()
      setPosts(data)
    }

    getData()
  }, [])

  return (
    <main>
      <h2>Data Fetching in React</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
