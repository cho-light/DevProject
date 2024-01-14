import React, { useState } from 'react'
import { Slide2ProjectTitle, Slide2Container, Slide2ImgBox, Slide2Link, Slide2MainBox, Slide2Name, Slide2Section1, Slide2Section2, Slide2ProjectList, Slide2ListTitle, Slide2ListComment, Numbering, Comments, Slide2Box1, Slide2Box2, MyBox } from './Slide2Style'
import Slide2List from './Slide2List'
import Sidebar from '../../../sidebar/Sidebar'

export default function Slide2() {
  // About me
  const myintroduce = [`꺾이지 않는 개발자 조광익. 상대방 입장을 먼저 생각할 줄 아는 사람입니다.`,
  <br/>,
  <br/>,
  `내가 상상하는 것을 구현해 내는 것이 너무 즐겁습니다.`,
  <br/>,
  `아름다운 인터페이스를 만들고 사용자가 접근하기 쉽고 오래 머물게 하고 싶습니다.`,
  <br/>,
  `멈추지 않고 계속해서 나아갈 것입니다. `
  ]


  // Project List
  const title1 = [`Trip-Blance`]
  const comments1 = [
    `밸런스 게임을 통한 여행지 추천.`,
    <br/>,
    `결과를 통해 해당 여행지에 관련된 정보와 서비스 제공.`]
  const title2 = [`StarBucks-Clone`]
  const comments2 = [
    `스타벅스 웹사이트 클론 프로젝트`,
    <br/>,
    `StarBucks를 뜯어보며 JS와 CSS 위주로 공부해본 클론 프로젝트`]
  const title3 = [`Web-Portfolio`]
  const comments3 = [
    `웹 포트폴리오`,
    <br/>,
    `웹 포트폴리오와 개인 블로그 페이지를 만들어 사용하기 위한 프로젝트 `]
  
  const [list, setList] = useState([
    {
      id : 1,
      title: title1,
      comments : comments1,
      value: false,
      src:'',
      git: 'https://github.com/hanghae99-tripbalance',
    },
    {
      id : 2,
      title: title2,
      comments : comments2,
      value: false,
      src:'https://starbucks-clone-ebon.vercel.app/',
      git: 'https://github.com/cho-light/starbucks-clone'
    },
    {
      id : 3,
      title: title3,
      comments : comments3,
      value: false,
      src:'',
      git:'',
    },
  ])
  
  const toggleList = (id) => {
    setList(idx => 
      idx.map((item)=>
      item.id === id ? {...item, value: !item.value} : item)) 
  }
  
  return (
    <Slide2Container>
      <Sidebar>
        
      </Sidebar>
          <Slide2Section1>
            <Slide2Box1>
              <Slide2ListTitle>
                About&nbsp;me
              </Slide2ListTitle>
              <span>{myintroduce}</span>
            </Slide2Box1>
            {/* <Slide2Box1>
              <Slide2ListTitle>
                Career&nbsp;&&nbsp;Education
              </Slide2ListTitle>
              <span>
                <li>1 여기</li>
                <li>2 저기</li>
                <li>3 거기</li>
                <li>4 쩌어어어기</li>
              </span>
            </Slide2Box1> */}
          </Slide2Section1>
          
        <Slide2MainBox>
        </Slide2MainBox>
          {/* <Slide2Section2>
            <Slide2ListTitle>
              Project&nbsp;List
            </Slide2ListTitle>
            <Slide2ProjectList>
              {list.map((idx)=>(
                <Slide2List
                  key={idx.id}
                  toggleList={toggleList}
                  id={idx.id}
                  value={idx.value}
                  title={idx.title}
                  comments={idx.comments}
                  src={idx.src}
                  git={idx.git}
                  />
                  ))}
                </Slide2ProjectList>
              
          </Slide2Section2> */}

    </Slide2Container>
  )
}
