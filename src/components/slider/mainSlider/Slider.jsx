/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react'
import { SliderContainer, Slider, SlideUpButton,SlideDownButton, SlideButtonGroup } from './SliderStyle';
import axios from 'axios';
import Slide1 from './slide/Slide1';
import Slide2 from './slide/Slide2';
import Slide3 from './slide/Slide3';
import Slide4 from './slide/Slide4';

export default function slider() {
    const [name, setName] = useState('Cho-light')
    const [button, setButton] = useState(false)
    

    const buttonClick = () => {
      setButton(!button)
      button ? setName('Cho-light') : setName('Dex')
    }

    const [slideIndex, setSlideIndex] = useState(0);
    // const [posts, setPosts] = useState('default');
    
    // useEffect(()=> {
    //     async function fetchPosts() {
    //         try {
    //             const day = new Date().getFullYear() + String(new Date().getMonth() + 1).padStart(2,'0') + String(new Date().getDate()).padStart(2,'0');
    //             const response = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=y2xKI4n8HVZ8FMf6oi7vjx6DgvRRcpEi9x%2FpdGYtsR71AvCYoUozg4Uj%2BxY3jXSRLLQm346SYraXBuNvpFjX2A%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&base_date=${day}&base_time=0500&nx=55&ny=127`);
    //             setPosts(response.data.response.body.items.item[0].obsrValue);
    //             console.log(response.data.response.body.items.item[0].obsrValue)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }
    //     fetchPosts()
    // },[])

    const handleUpClick = () => {
        setSlideIndex(prevIndex => (prevIndex - 1 + 4) % 4);
    }
    const handleDownClick = () => {
        setSlideIndex(prevIndex => (prevIndex + 1) % 4);
    }


    //   const [scrolling, setScrolling] = useState(false);
    // const handleWheel = (e) => {
    //     if (!scrolling) {
    //       setScrolling(true);
    //       // 휠의 deltaY 값에 따라 슬라이드를 움직임
    //       if (e.deltaY < 0 && slideIndex > 0) {
    //         setSlideIndex((prevIndex) => prevIndex - 1);
    //       } else if (e.deltaY > 0 && slideIndex < 3) {
    //         setSlideIndex((prevIndex) => prevIndex + 1);
    //       }
    //       setTimeout(() => {
    //         setScrolling(false);
    //       }, 1500); // 시간동안 휠 이벤트를 무시
    //     }
    //     // e.preventDefault();
    //   };


    const [scroll, setScroll] = useState();
    useEffect(()=>{
      const upscroll = () => {
        // if(window.scrollY > 400) {
        //   setScroll(true);
        // } 
        // if(window.scrollY <= 400) {
        //   setScroll(false)
        // }
        setScroll(window.scrollY)
        console.log(scroll)
      };
      window.addEventListener('scroll', upscroll);
      return () => {
        window.removeEventListener('scroll', upscroll)
      }
    },[scroll])

    
  return (
    <SliderContainer scroll={scroll}>
        {/* <SlideButtonGroup>
            <SlideUpButton onClick={handleUpClick}></SlideUpButton>
            <SlideDownButton onClick={handleDownClick}></SlideDownButton>
        </SlideButtonGroup> */}
        <Slider
          // onWheel={handleWheel}
          // style={{transform : `translateY(-${slideIndex*100}%)`}}
          >
          <Slide1 scroll={scroll} button={button} buttonClick={buttonClick} name={name}/>
          <Slide2/>
          <Slide3/>
          <Slide4/>
        </Slider>
    </SliderContainer>
  )
}
