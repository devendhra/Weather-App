import { useState } from 'react'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import BackgroundLayout from './Components/BackgroundLayout'
import WeatherCard from './Components/WeatherCard'
import MiniCard from './Components/MiniCard'

function App() {
  
    const [input, setInput] = useState('');

    const { weather , location, values, setPlace} = useStateContext()

    const submitCity = () => {
      setPlace(input)
      setInput('')
    }

  return (
     <div className='w-full h-screen text-blue-700 px-8' >
        <nav className='w-full flex p-3  justify-between items-center'>
          <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
          <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2 '>
            <img src={search} alt='Not found' className='w-[1.5rem] h-[1.5rem]'/>
            <input  onKeyUp={ (e) => {
              if(e.key === 'Enter'){
                //Submit the form 
                submitCity();
              }
            }}  
            type='text'  placeholder='Search City' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={ e => setInput(e.target.value)}/>
            
          </div>
          

        </nav>
        <BackgroundLayout></BackgroundLayout>

        <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>

            <WeatherCard
               place={location}
               windspeed={weather.wspd}
               humidity={weather.humidity}
               temperature={weather.temp}
               headIndex={weather.heatindex}
               iconString={weather.conditions}
               conditions={weather.conditions}
            />

            <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
            {
              values?.slice(1,7).map(curr => {
                return (

                  <MiniCard
                  key = {curr.datetime}
                  time = {curr.datetime}
                  temp = {curr.temp}
                  iconString = {curr.conditions}
                  />
                )
              })
            }

            </div>

        </main>    

     </div>
  )
}

export default App
