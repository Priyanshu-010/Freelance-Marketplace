import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBY from '../../components/trustedBy/TrustedBY'
import Slide from '../../components/slide/Slide'
import CatCard from "../../components/catCard/CatCard";
import { cards } from '../../data'


const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBY />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home