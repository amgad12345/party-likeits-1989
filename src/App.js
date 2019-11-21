import React, { useState, useEffect } from 'react'

// import axios from 'axios'
import Moveis from './components/Moveis'

const App = () => {
  const [moveis, setMoveis] = useState([])

  const getDataFromAPI = async () => {
    const resp = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=0bc0728f34b625ce3a0ce16d93e6973e'
    )
    const data = await resp.json()
    console.log(data)
    setMoveis(data.results)
  }

  useEffect(() => {
    console.log('using the effect')
    // call my API
    getDataFromAPI()
  }, [])

  return (
    <>
     <h1> Party Like Its 1989 </h1>
      <ul>
       

        {moveis.map(Movie => {
          return (
            <Moveis
              key={Movie.id}
              title={Movie.title}
              overview={Movie.overview}
              image={Movie.poster_path}
              
            />
          )
        })}
      </ul>
    </>
  )
}

export default App
