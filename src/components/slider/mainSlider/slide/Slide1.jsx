import React, { useEffect, useRef, useState } from 'react'
import { Slide1Container, Slide1Section1, Slide1Section2, Section2FEButton, Section2BEButton, Text1, Text2, Text3, ScrollSection, Silhouette, FeSilhouette, BeSilhouette} from './Slide1Style'
import ScrollIndicator from '../../../scrollindicator/ScrollIndicator';
import Header from '../../../header/Header';
import silhouetteImg from '../../../../assets/images/silhouette.png'
import photo from '../../../../assets/images/photo.png'

export default function Slide1({scroll, buttonClick, name, button}) {
  const firsttext = `Portfolio`

  // const [name, setName] = useState('Cho-light')
  // const [button, setButton] = useState(false)
  

  // const buttonClick = () => {
  //   setButton(!button)
  //   button ? setName('Cho-light') : setName('Dex')
  // }
  
  const [text1, setText1] = useState()
  const [text2, setText2] = useState()
  const [text3, setText3] = useState()

  useEffect(()=> {
    setTimeout(()=> {
      setText1('50')
    },900)
    setTimeout(()=> {
      setText2('50')
    },1350)
    setTimeout(()=> {
      setText3('50')
    },1525)
  },[])
  
  return (
    <Slide1Container>
      <Header name={name} button={button} buttonClick={buttonClick}/>
      <Slide1Section1>
          <Text1 style={{transform:`translate(-${text1}%, -50%)`}} scroll={scroll}>{firsttext}</Text1>
          <Text1 style={{transform:`translate(-50%, -50%)`,  WebkitTextStroke:'4px black', zIndex:'-1', color:'transparent', textShadow:'none'}}>{firsttext}</Text1>
          <br/>
          <Text2 style={{transform:`translate(-${text2}%, -50%)`}} scroll={scroll}>"{name}"</Text2>
          <Text2 style={{transform:`translate(-50%, -50%)`, WebkitTextStroke:'4px black', zIndex:'-1', color:'transparent', textShadow:'none'}}>"{name}"</Text2>
          <br/>
          <Text3 style={{transform:`translate(-${text3}%, -50%)`}} scroll={scroll}>web Developer</Text3>
          <Text3 style={{transform:`translate(-50%, -50%)`, WebkitTextStroke:'4px black', zIndex:'-1', color:'transparent', textShadow:'none'}}>web Developer</Text3>
      </Slide1Section1>
      {/* <Slide1Section2>
        <Section2FEButton onClick={febuttonClick} btn={febutton ? 1 : 0}>
          'Frontend'
        </Section2FEButton> 
        <Section2BEButton onClick={bebuttonClick} btn={bebutton ? 1 : 0}>
          'Backend'
        </Section2BEButton>
      </Slide1Section2> */}
      <Silhouette scroll={scroll}>
        <FeSilhouette src={photo} button={button}></FeSilhouette>
        <BeSilhouette src={silhouetteImg} button={button}></BeSilhouette>
      </Silhouette>
      <ScrollSection scroll={scroll}>
        <ScrollIndicator  color='gray'/>
      </ScrollSection>
    </Slide1Container>
  )
}