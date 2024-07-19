import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBY from '../../components/trustedBy/TrustedBY'


const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBY />
    </div>
  )
}

export default Home