import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

const Weather = ({query}) =>{
    const [condition, setCondition] = useState({});
    const [hasCondition, setHasCondition] = useState(false);

    const APIKey = process.env.REACT_APP_API_KEY || null

    const params = {
        query: query,
        access_key: APIKey
    }

    const updateCondition = () => {
        if (!APIKey) return;

    let source = axios.CancelToken.source();

    axios
        .get('http://api.weatherstack.com/current',{
            params: params,
            cancelToken: source.token,
        })
        .catch((error) => {
            if (axios.isCancel(error)){
                console.log("Couldnt connect", error.message)
            } else{
                throw error
            }
        })
        .then((response) => {
            if(response.statusText === "OK"){
                setCondition(response.data)
                setHasCondition(true)
            }
        })
        .catch((error) => {
            console.log(error.config)
        })

        return () => {
            source.cancel("...");
        };
    };
    useEffect(updateCondition, []);

    return (
        <div>
            {hasCondition && <WeatherInfo condition={condition} />}
        </div>
    )
}


export default Weather;
