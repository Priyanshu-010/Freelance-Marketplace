import React from 'react'
import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="letf">
          <h1>Find the perfect freelance services for your Business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try building mobile app' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/newest_img.png" />
        </div>
      </div>
    </div>
  )
}

export default Featured