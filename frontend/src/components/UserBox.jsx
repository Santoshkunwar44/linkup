import React, { useState } from 'react'
import styles from "./comp.module.css"
import {BiUserCircle} from "react-icons/bi"

const UserBox = () => {
    const [userData,setUserData]=  useState({
        username:"",
        gender:"",
        id:""
    })
    const handleSetUser=(e)=>{
        e.preventDefault()
        }

        const handleInputChange=(e)=>{
            const {name, value} = e.target;

            setUserData(prev=>({
                ...prev, [name]:value
            }))
            
        }

  return (
    <div className={styles.userBox}>
        <form className={styles.userForm} onSubmit={handleSetUser}>
            <input required  disabled  type="text" name="id" id=""  placeholder='unique id' onChange={handleInputChange} value={userData.id}/>
          
            <input  required type="text" name="username" id="" placeholder='username' onChange={handleInputChange} value={userData.nickname} />
            <select required  name="gender" id="" onChange={handleInputChange} value={userData.gender}>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <button >
                <BiUserCircle/>
                <p>Set profile </p>
            </button>
        </form>

    </div>
  )
}

export default UserBox