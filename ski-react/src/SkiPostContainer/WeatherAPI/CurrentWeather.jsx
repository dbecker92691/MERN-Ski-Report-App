import React from 'react'


const CurrentWeather = (props) => {
    const weather = props.weather.map((dailyWeather, id) => {
        return(
            <div class='Daily Weather' key={id}>
                <h3>
                    Summary:
                </h3>
                <p>
                    {dailyWeather.daily.summary}
                </p>
            </div>
        )
    })

    return(
        <div>
            {weather}
        </div>
    )
}


export default CurrentWeather;