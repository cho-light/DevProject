import React from 'react'
import {ChangeButton, ChangeButtonBack, ChangeButtonFront, GoToBlogButton, HeaderSection} from './HeaderStyle'
import { useNavigate } from 'react-router-dom'

export default function Header({button, buttonClick, name, febutton, bebutton, febuttonClick, bebuttonClick}) {
  const navigate = useNavigate()
  const goToBlog = () => {
    navigate('/blog')
  }
  return (
        <HeaderSection>
            <div>
              <span>{name}</span>'s PORTFOLIO
            </div>
            <ChangeButton>
              <ChangeButtonFront button={button? 1:0 } onClick={buttonClick} >
                `Front
              </ChangeButtonFront>
              <ChangeButtonBack button={button? 1:0} onClick={buttonClick}  >
                `Back
              </ChangeButtonBack>
            </ChangeButton>
            <GoToBlogButton onClick={goToBlog}>
              <div className="material-symbols-outlined">
                auto_stories
              </div>
              <div className='Blog'>
                Blog
              </div>
            </GoToBlogButton>
        </HeaderSection>
  )
}
