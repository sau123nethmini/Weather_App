import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidit_icon from '../assets/humidit.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {
  return (
    <div className='weather'>
        {/*for seachbar */}
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt="" />
        </div>

        {/* for weather details */}
        <img src={} alt="" />

    </div>
  )
}

export default Weather
