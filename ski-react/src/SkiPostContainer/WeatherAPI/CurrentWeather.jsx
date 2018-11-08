import React from 'react'
import TempConverter from "./TempConverter/TempConverter"


const CurrentWeather = (props) => {
    console.log(props.theWeather.weather)
    return(
      <main>
          <h2>Weather Report:</h2>
            <h5>Temp:</h5>
                <p>
                    {JSON.stringify(props.theWeather.main.temp)}
                </p>
            <h5>Summary:</h5>    
                <p>
                    {JSON.stringify(props.theWeather.weather[0].description)}
                </p>
      </main>
    )
    
}



export default CurrentWeather;