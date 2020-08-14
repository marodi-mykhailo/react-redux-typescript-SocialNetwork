import React from 'react';
import styles from './App.module.css'
import Head from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";



function App() {

  return (

      <div className={styles.appWrapper}>
        <Head/>
        <NavBar/>
        <Profile/>
      </div>

  );
}

export default App;
