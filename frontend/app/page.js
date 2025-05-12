import MainPage from './component/MainPage';
import Navbar from './component/Navbar';
import React from 'react';
import Footer from './component/Footer';
export default function Home() {
  return <>
    <Navbar></Navbar>
    <MainPage></MainPage>
    <Footer></Footer>
  </>
}
