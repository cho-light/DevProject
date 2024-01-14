import React, {useState} from 'react'
import { DropdownMenuContainer, Background, SrcButton, GitButton} from './ModalbuttonStyle';
import { useEffect } from 'react';

export default function DropdownMenu({id, src, git}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      if(src){
        setIsMenuOpen(!isMenuOpen)
      }
    }
    const handleOpenNewTab = () => {
      if(git){
        window.open(git)
      }
    }
    
    
  return (
      <>
            <SrcButton onClick={toggleMenu} key={id} src={src}> 
              살펴보기
            </SrcButton>
            <GitButton onClick={handleOpenNewTab} key={id} git={git}>
             GigHub
            </GitButton>
        
        {isMenuOpen && 
          <>
            <Background onClick={toggleMenu}></Background>
            <DropdownMenuContainer>
                {/* <ToggleButton onClick={toggleMenu}>X</ToggleButton>
                    <li>1</li> */}
                    <iframe key={id} className='iframe' src={src} frameBorder="0" ></iframe>
            </DropdownMenuContainer>
          </>
        }
      </>

  )
}
