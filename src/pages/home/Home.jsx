import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBY from '../../components/trustedBy/TrustedBY'
import Slide from '../../components/slide/Slide'
import CatCard from "../../components/catCard/CatCard";
import { cards } from '../../data'


const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBY />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home