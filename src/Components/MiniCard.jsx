import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'


const MiniCard = ({time, temp, iconString}) => {

  const [icon, setIcon ] = useState()

  const iconmap = {
    cloud: cloud,
    rain: rain,
    clear: sun,
    thunder: storm,
    fog: fog,
    snow: snow,
    wind: wind
  };

  useEffect(() => {

    if(iconString){
      const key= Object.keys(iconmap).find((key) => iconString.toLowerCase().includes(key));
      setIcon(iconmap[key] || sun);

    } 

  },[iconString])

  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>

      <p className='text-center text-blue'>
        {new Date(time).toLocaleTimeString('en', {weekday: 'long'}).split(" ")[0]}
      </p>

      <hr/>

      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt='Forecast not available' className='w-[4rem] h-[4rem]'/>
      </div>

      <p className='text-center font-bold text-white'>{temp}&deg;C</p>

    </div>
  )
}

export default MiniCard