import React from 'react'
import '../../styles/Video.css'
const Video = ({ closePlayer, playState, player }) => {
    return (
        <>
        {playState ? <div className={`video-container`} ref={player} onClick={closePlayer}>
          <video
            autoPlay src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls muted loop>
  
          </video>
        </div> : ""}
      </>
    )
}

export default Video