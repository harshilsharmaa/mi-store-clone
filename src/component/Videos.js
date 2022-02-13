import React from 'react'
import VideoCard from './VideoCard.js'
import '../styles/Video.css'

const Videos = ({videos}) => {
  return (
    <div className="Videos">
        {videos.map((item,index)=>(
            <VideoCard index={item.index} key={item.image} name={item.name} image={item.image} />
        ))}
    </div>
  )
}

export default Videos