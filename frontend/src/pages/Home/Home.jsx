import React from 'react'
import styles from "./Home.module.css"
import CallBox from '../../components/CallBox'
import UserBox from '../../components/UserBox'

const Home = () => {
  return (
    <div className={styles.home}>

        <UserBox/>
        <CallBox/>

    </div>
  )
}

export default Home