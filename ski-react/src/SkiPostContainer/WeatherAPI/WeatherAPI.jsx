import React, {Component} from 'react';
import CurrentWeather from './CurrentWeather'


class WeatherApi extends Component {
    constructor(){
        super();

        this.state = {
            weather: []
        }
    }
    
    getWeather = async () => {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const headers = {'content-type': 'application/json'}
        const weather = await fetch(proxyUrl + 'api.darksky.net/forecast/13cca06941bd26f172e44ad0059ed4a4/39.5912,-106.0640', headers);
        console.log(weather, "<-- trying to fetch")
        const parsedWeather = await weather;
        return parsedWeather.daily
    }
    componentDidMount(){
        this.getWeather().then((weather) => {
            this.setState({
                weather: weather,

            })
            
        }).catch((err) => {
            console.log(err, "<---- here is our API error")
        })
    }
    sendCurrentWeather = (weather) => {
        this.props.getTheWeather(this.state.weather)
    }

    render(){
        return(
            <div>
                Current Weather
                <CurrentWeather weather={this.state.weather}/>
                
            </div>
        )
    }
}




export default WeatherApi;