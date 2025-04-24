import React, { useEffect, useState } from 'react'
import useDate from '../Utilities/useData.jsx'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'


const WeatherCard = ({
  temperature, 
  windspeed,
  humidity,
  place,
  headIndex,
  iconString,
  conditions,

}) => {

  const [icon, setIcon] = useState(sun)

  const {time} = useDate()


   const iconmap = {
      cloud: cloud,
      rain: rain,
      clear: sun,
      thunder: storm,
      fog: fog,
      snow: snow,
      wind: wind
    };
  useEffect(()=> {


      if(iconString){
          const key= Object.keys(iconmap).find((key) => iconString.toLowerCase().includes(key));
          setIcon(iconmap[key] || sun);
    
        } 
    
      // if(iconString){
      //   if(iconString.toLowerCase().includes('cloud')){
      //     setIcon(cloud)
      //   }else if(iconString.toLowerCase().includes('rain')){
      //     setIcon(rain)
      //   }else if(iconString.toLowerCase().includes('clear')){
      //     setIcon(sun)
      //   }else if(iconString.toLowerCase().includes('thunder')){
      //     setIcon(storm)
      //   }else if(iconString.toLowerCase().includes('fog')){
      //     setIcon(fog)
      //   }else if(iconString.toLowerCase().includes('snow')){
      //     setIcon(snow)
      //   }else if(iconString.toLowerCase().includes('wind')){
      //     setIcon(wind)
      //   }

      }
  ,[iconString])
  

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
        <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4 '>

        <img src={icon} alt='weather_icon' />          
        <p className='fond-bold text-5xl flex justify-center items-center text-zinc-900'>{temperature} &deg;C</p>

        </div>

        

        <div className='text-zinc-900 font-bold text-center text-xl'>
          {place}
        </div>
        <div className='w-full flex justify-between items-center mt-4 '>
          <p className='flex-1 text-center p-2 text-white bg-slate-500 rounded'> {new Date().toDateString()}</p>
          <p className='flex-1 text-center p-2 text-white bg-slate-500 mx-2 rounded ml-4'> {time}</p>
        </div>
        <div className='w-full flex justify-between items-center mt-4 gap-4'>
          <p className='text-center   flex-col p-1 px-7 font-bold bg-blue-600 shadow rounded-lg text-white'>Wind Speed <br></br><span className='font-normal'>{windspeed} km/h</span></p>
          <p className='text-center  p-2 mr-1   flex-1 flex-col font-bold rounded-lg bg-green-600 text-white'>Humidity <br></br><span className='font-normal'>{humidity} gm/m&#179;</span></p>

        </div>
        <div className='w-full p-3 mt-4 flex justify-between items-center'>
          <p className='font-semibold text-lg text-white'>Head Index   </p>
          <p className='text-lg text-white'>{
              headIndex ? headIndex : 'N/A'

            }</p>

        </div>
        <hr className='bg-slate-600'/>
        <div className='w-full flex p-4 justify-center items-center text-3xl font-semibold text-white'>
              {conditions}
        </div>
    </div>
  )
  
}

export default WeatherCard