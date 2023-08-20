import React, { useState } from 'react'
import { Slide2Container, Slide2ImgBox, Slide2Link, Slide2MainBox, Slide2Name, Slide2Section1, Slide2Section2 } from './Slide2Style'
import { Section1 } from './Slide2Style'

export default function Slide2() {
  // const [xy,setXY]=useState({x:0,y:0})
  // const handleMouseMove=(e)=>{
  //       setXY({x:e.clientX,y:e.clientY});
  //   }

  return (
    // <Slide2Container onMouseMove={(e)=>handleMouseMove(e)}>
        // {/* <div style={{position:"absolute", left:xy.x,top:xy.y}}
        // >마우스따라이동</div> */}
    <Slide2Container>
        <Slide2MainBox>
         <Slide2Section1>
            <Slide2ImgBox>이미지</Slide2ImgBox>
            <Slide2Name>이름</Slide2Name>
            <Slide2Link>블로그, 깃허브</Slide2Link>
          </Slide2Section1>
         
         <Slide2Section2>
            
          </Slide2Section2>

        </Slide2MainBox>
    </Slide2Container>
  )
}
