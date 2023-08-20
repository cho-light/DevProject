import {styled} from 'styled-components'

export const Background = styled.div`
  position: ${(props) => (props.isMenuOpen ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${(props) => (props.isMenuOpen ? '10' : '-10')};
  opacity: ${(props) => (props.isMenuOpen ? '10' : '-1')};
  transition: opacity 0.3s ease;
`;

export const DropdownMenuContainer = styled.div`
    width:150px;
    height:100%;
    transition: right 1.3s ease;
    position:fixed;
    background-color:red;
    top:0;
    right:${(props) => props.isMenuOpen ? 0 : '-300px'};
    z-index:${(props) => props.isMenuOpen ? '10' : '0'};
`;

export const ToggleButton = styled.button`

`;