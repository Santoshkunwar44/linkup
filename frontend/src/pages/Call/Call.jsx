import { useContext, useEffect, useState } from "react"
import styles from "./Call.module.css"
import { AppContext } from "../../context/context"
import VideoCall from "../../components/VideoCall"


const Call = () => {
    const {call,user, dispatch} = useContext(AppContext)

  const [myStream,setMyStream] = useState(null)
  const [ remoteStream,setRemoteStream] =useState(null)


    useEffect(()=>{

      navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true
      }).then(stream=>{
        setMyStream(stream)
      })

    },[])
    
  const handleToggleVideo = ()=>{
  console.log(  myStream?.getVideoTracks()[0].enabled)
      // myStream.getVideoTracks()[0].enabled= !myStream.getVideoTracks()[0].enabled;
      // setMyStream(myStream)
      myStream.getVideoTracks()[0].stop()
    

  }
  {
    if(myStream)
    console.log(  myStream?.getVideoTracks()[0].enabled)
  }



  return (
    <div className={styles.call}>

        <div className={styles.callGround}>

    <VideoCall myStream={myStream} remoteStream={remoteStream}/>

        </div>
        <div className={styles.callActions}>

            <button onClick={handleToggleVideo}> TOGGLE VIDEO </button>
            <button>TOGGLE MIC</button>
            <button>END </button>

        </div>
        
    </div>
  )
}

export default Call