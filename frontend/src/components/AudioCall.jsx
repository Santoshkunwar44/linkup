import React from 'react'
import ReactPlayer from 'react-player'
import styles from "./comp.module.css"

const AudioCall = ({myStream,remoteStream}) => {
      console.log("stream",myStream)
  return (
    <div  className={styles.audioWrapper}>
{/* 
        <ReactPlayer url={myStream}/>
        <ReactPlayer url={remoteStream}/> */}
        
        
    </div>
  )
}

export default AudioCall