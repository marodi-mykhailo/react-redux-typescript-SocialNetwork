import React from 'react';
import styles from './App.module.css'
import Head from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";



function App() {

  return (

      <div className={styles.appWrapper}>
        <Head/>
        <NavBar/>
        <Content/>
      </div>

  );
}

export default App;
