import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext()

export const StateContextProvider = ({children}) => {

    const [weather, setWeather] = useState({})

    const [values, setValues] = useState([])

    const [place, setPlace] = useState('chennai')

    const [location, setLocation] = useState('')

    
    

const fetchWeather = async() => {
    
    const apiUrl = 'https://visual-crossing-weather.p.rapidapi.com/forecast';
    const options = {
        method: 'GET',
        url: apiUrl,
        params: {
            aggregateHours: '24',
            location: place,
            contentType: 'json',
            unitGroup: 'metric',
            shortColumnNames: 0,
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API,
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
        
    }

    try{
        const response = await axios.request(options);
        
        console.log(response.data)

        const thisData = Object.values(response.data.locations)[0]


        console.log(thisData.values[0]);
        setLocation(thisData.address)

        setValues(thisData.values)

        setWeather(thisData.values[0])
    }catch(e){
        console.error(e.response || e);
        alert('You entered location does not exist');
    }
 }

    useEffect(() => {
        if (place) { 
        fetchWeather()
        }
    }, [place])

    useEffect(() => {
        console.log(values)
    },[values])
    

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            location,
            place
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)