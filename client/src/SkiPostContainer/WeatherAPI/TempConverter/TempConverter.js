import React from 'react'


const TempConverter = (props) => {
    const fTemp = Math.floor((props.temp - 273.15) * (9/5) + 32)
    return(
        <main>
            {fTemp}ºF
        </main>
    )
}

export default TempConverter;