import React, { useEffect, useRef, useState } from 'react'
import { Slide1Container, Slide1Section1, Slide1Section2, Section2FEButton, Section2BEButton, Text1, Text2, Text3} from './Slide1Style'
import { styled } from 'styled-components';

export default function Slide1() {
  const [name, setName] = useState('Cho-light')
  const [febutton, setFebutton] = useState(false);
  const [bebutton, setBebutton] = useState(true);
  
  const febuttonClick = () => {
    setBebutton(true)
    setFebutton(false)
    setName('Cho-light')
  }
  const bebuttonClick = () => {
    setFebutton(true)
    setBebutton(false)
    setName('Dex')
  }
  const [text1, setText1] = useState()
  const [text2, setText2] = useState()
  const [text3, setText3] = useState()
  useEffect(()=> {
    setTimeout(()=> {
      setText1('100px')
    },900)
    setTimeout(()=> {
      setText2('100px')
    },2500)
    setTimeout(()=> {
      setText3('100px')
    },3500)
  },[])

  return (
    <Slide1Container>
      <Slide1Section1>
          <Text1 style={{left:`${text1}`}}>Hello</Text1>
          <Text1 style={{left:'100px', WebkitTextStroke:'2px white', zIndex:'-1', color:'transparent', textShadow:'none'}}>Hello</Text1>
          <br/>
          <Text2 style={{left:`${text2}`}}>I am "{name}"</Text2>
          <Text2 style={{left:'100px', WebkitTextStroke:'2px white', zIndex:'-1', color:'transparent', textShadow:'none'}}>I am "{name}"</Text2>
          <br/>
          <Text3 style={{left:`${text3}`}}>web Developer</Text3>
          <Text3 style={{left:'100px', WebkitTextStroke:'2px white', zIndex:'-1', color:'transparent', textShadow:'none'}}>web Developer</Text3>
      </Slide1Section1>
      <Slide1Section2>
        <Section2FEButton onClick={febuttonClick} btn={febutton}>
          'Frontend'
        </Section2FEButton>
        <Section2BEButton onClick={bebuttonClick} btn={bebutton}>
          'Backend'
        </Section2BEButton>
      </Slide1Section2>
    </Slide1Container>
  )
}