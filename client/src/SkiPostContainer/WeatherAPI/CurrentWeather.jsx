import React from 'react'
import TempConverter from "./TempConverter/TempConverter"


const CurrentWeather = (props) => {
    return(
      <main>
          <h2>Weather Report:</h2>
            <h5>Temp:</h5>
                    <TempConverter temp={props.theWeather.main.temp} />
            <h5>Summary:</h5>    
                <p>
                    {JSON.stringify(props.theWeather.weather[0].description)}
                </p>
      </main>
    )
    
}



export default CurrentWeather;