import React, {useState} from 'react'
import axios from 'axios';




function App() {

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  const api_key = process.env.REACT_APP_API_KEY

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response)
      })
    }
  }
      
  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
          <h1>65 Fahrenheit</h1>            
          </div>
          <div className="description">
            <p>Overcast</p>
          </div>
        </div>
        <div className="bottom">

        </div>

      </div>
    </div>
  );
}

export default App;
