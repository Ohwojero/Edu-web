import React from 'react'
import '../../styles/Home.css'
import Header from '../../Component/Header/Header'
import Video from '../../Component/Video/Video'
import { useRef, useState } from 'react';
import Work from '../../Component/Work/Work';
import Building from '../../Component/Building/Building';
import Plans from '../../Component/Plans/Plans';
import Inspiring from '../../Component/Inspiring/Inspiring'
import Community from '../../Component/Community/Community';
import SliderCard from '../../Component/Slider/SliderCard';
import Ready from '../../Component/Ready/Ready';
const Home = () => {
  const [playState, setPlayerState] = useState(true)

  const player = useRef();

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayerState(false)
    }
  }

  return (
    <div>
      <div className='container'>
        <Header setPlayerState={setPlayerState} />

        <Video closePlayer={closePlayer} player={player} playState={playState} setPlayerState={setPlayerState} />
      </div>
      <section>
        <Work />
        <Building />
        <Plans />
        <Inspiring />
        <Community />
        <SliderCard />
        <Ready />
      </section>
    </div>

  )
}

export default Home