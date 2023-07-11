import React from 'react'
import ReactPlayer from 'react-player'
import styles from "./comp.module.css"

const VideoCall = ({myStream,remoteStream}) => {
  console.log("my stream",myStream)
  return (
    <div className={styles.videoWrapper}>
            <ReactPlayer  playing style={{flex:1}} url={myStream} />
            <ReactPlayer playing={true}  style={{flex:1}} url={remoteStream}/>
    </div>
  )
}

export default VideoCall