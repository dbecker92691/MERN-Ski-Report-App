import React, {Component} from 'react';
import CurrentWeather from './CurrentWeather'


class WeatherApi extends Component {
    constructor(){
        super();

        this.state = {
            weather: {
                main:{
                    temp: "",
                },
                weather:[{
                    description: ''
                }]
                
            }
                
        }
    }
    
    getWeather = async () => {
        
        const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=39.5912&lon=-106.0640&APPID=42cc72bd45edbc58f7d1ff378f21b1d8');
        const parsedWeather = await weather.json();
        return parsedWeather
    }
    componentDidMount(){
        this.getWeather().then((theWeather) => {
            console.log(theWeather, "<----- this is the weather")
            this.setState({
                weather: theWeather

            })
        }).catch((err) => {
            console.log(err, "<---- here is our API error")
        })
    }

    render(){
        return(
            <div>
                <CurrentWeather theWeather={this.state.weather} />
            </div>
        )
    }
}




export default WeatherApi;