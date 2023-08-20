import React, {useState} from 'react'
import { DropdownMenuContainer, ToggleButton, Background} from './DropdownMenuStyle';

export default function DropdownMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
  return (
    <>
        <button onClick={toggleMenu}> MENU </button>
        <Background isMenuOpen={isMenuOpen}/>
        <DropdownMenuContainer isMenuOpen={isMenuOpen}>
            <ToggleButton onClick={toggleMenu}>X</ToggleButton>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </DropdownMenuContainer>
    </>
  )
}
