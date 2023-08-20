import React from 'react'
import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/mainSlider/Slider'
import RecordPlayer from '../../components/recordPlayer/RecordPlayer'

export default function Main() {
  return (
    <Layout>
        <Header/>
        <Slider/>
        {/* <RecordPlayer/> */}
    </Layout>
    )
}
