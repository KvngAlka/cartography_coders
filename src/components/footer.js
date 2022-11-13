import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>

            <h1>
                Cartography Coders
            </h1>

            <div>
                <h3>
                    Stay updated on everything new and exciting at NMC with
                    our monthly newsletter
                </h3>
                <div>
                    <input type="text" name="email" id="s_email" />
                    <button>Submit</button>
                </div>
            </div>

        </div>

        <div className='bottom'>
            <div>
                <h4>New Delhi</h4>
                <h4>110 E. Main St. Suite 200</h4>

            </div>

            <div>

            </div>

        </div>

    </div>
  )
}

export default Footer