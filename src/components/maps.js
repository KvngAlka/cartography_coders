import React, { useState } from 'react'
import '../styles/maps.css'

const Maps = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const setCountry = ()=>{
    const country = document.getElementById('countries').value;
    setSelectedCountry(country)
  }

  return (

    <section className={`maps`}>

      {/* INDIA AND AFRICA MAP PAGE */}
      <div className={`page_one ${selectedCountry ? 'page_one_inactive': ''}`}>
          <div className='country_select'>
            <div>
              <select name="countries" id="countries">
                <option value="1">GHANA</option>
                <option value="2">INDIA</option>
                <option value="3">KENYA</option>
              </select>
              <button onClick={setCountry}>
                Start
              </button>
            </div>
          </div>
          <div className='maps_cont'>

            <div className='af_map'>

            </div>
            
            <div className='in_map'>

            </div>

          </div>
      </div>

    {/* CITIES SEARCH PAGE */}
      <div className={`page_two ${selectedCountry ? 'page_two_active': ''}`}>
        <div onClick={()=> setSelectedCountry('')}>
          <h4 className='go_back'>GO BACK</h4>
        </div>
        <div className='search_cont'>
          <div className='search_box'>
            <input type="text" name="search" id="c_search" />
            <button>Search</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Maps