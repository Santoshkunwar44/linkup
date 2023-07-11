import Peer from "simple-peer"


const useCall=()=>{
    const callUser =(userId)=>{

        const stream = navigator.mediaDevices.getUserMedia({
            video:type=== "video",
            audio:true
          })
         const peer =   new Peer({
              initiator:true,
              trickle:false,
              stream
          })

          peer.on("signal",stream=>{
                
          })

    }   
    
    
    return {callUser}
}