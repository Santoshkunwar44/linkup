import React, { useContext, useRef, useState } from 'react'
import styles from "./comp.module.css"
import {IoCallSharp} from "react-icons/io5"
import {FaVideo} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Peer from "simple-peer";
import io from "socket.io-client";
import { AppContext } from '../context/context'
const socket = io("http://localhost:8000")
const uid = ""
const CallBox = () => {

  const {user,dispatch} = useContext(AppContext)
const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const connectionRef= useRef() 
   const [remoteId,setRemoteId] =useState("");
const remoteVideo  =useRef();
const myVideo = useRef()  

	useEffect(() => {

    socket.emit("join",uid)


		socket.on("CALL_USER", (data) => {
      const user = data.user
      dispatch({type:"SET_INCOMING",payload:user})
		})


    socket.on("CALL_REJECTED",()=>{
      dispatch({type:"CALL_REJECTED"})
      
    })

	}, [])
  const  handleCallUser =async({type})=>{

     const stream =  await navigator.mediaDevices.getUserMedia({
      video:type=== "video",
      audio:true
    })
        myVideo.current.srcObject = stream;

         const peer =   new Peer({
              initiator:true,
              trickle:false,
              stream
          })

          peer.on("signal",signal=>{
            socket.emit("CALL_USER",{
              from:user,
              to:remoteId,
              signal
            })
          })
          peer.on("stream", (stream) => {
            
              // userVideo.current.srcObject = stream
              remoteVideo.current.srcObject = stream;
            
          })
          
          socket.on("CALL_ACCEPTED",(signal)=>{
			    setCallAccepted(true)
			    peer.signal(signal)
		})

      


  }



 

  return (
    <div className={styles.callBox}>
        <input type="text" name="remoteId" required  placeholder='Id of remote user' />
        {/* <input type="button" value="Call" /> */}
        <div className={styles.actionButtons}>

            <div  className={styles.callButton}>

            <IoCallSharp/>
            <p>Audio Call</p>
            </div>
                
           

            <div className={styles.callButton}>
                <FaVideo/>
            <p>Video Call</p>
            </div>
       

        </div>
    </div>
  )
}

export default CallBox