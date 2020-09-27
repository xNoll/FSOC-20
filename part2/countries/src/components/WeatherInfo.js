import React from 'react';

const WeatherInfo = ({condition}) => {

    return (
        <div>
            <h1>
                <strong>Weather in {condition.location.name}</strong>
            </h1>
            <div>
            <span>
                <strong>Temperature: {condition.current.temperature}</strong>
            </span>
            </div>
            <div>
            <span>
                <img alt={"Weather Icon"} width={"200px"} src={condition.current.weather_icons}></img>
            </span>
            </div>
            <div>
            <span>
                <strong>Wind speed: {condition.current.wind_speed}</strong>
                <strong>Direction: {condition.current.wind_dir}</strong>
            </span>
            </div>
        </div>
    )

}

export default WeatherInfo;
