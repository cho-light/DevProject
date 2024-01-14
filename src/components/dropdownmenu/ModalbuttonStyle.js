import {styled} from 'styled-components'

export const SrcButton = styled.div`
  ${props => props.src ?
    `
      cursor:pointer;
    ` : 
    `
    color:gray;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;  
    `}
`
export const GitButton = styled.div`
  ${props => props.git ?
    `
    cursor:pointer;
    `:
    `
    color:gray;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none; 
    `}
`
export const Background = styled.div`
position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  
  transition: opacity 0.3s ease;
`;

export const DropdownMenuContainer = styled.div`
    display:block;
    position:absolute;
    width:50%;
    height:80%;
    top:10%;
    left:0;
    transition: right 1.3s ease;
    z-index:99;
    
    .iframe{

      border:solid 1px black;
      border-radius:20px;
      background-color:whitesmoke;
      width:200%;
      height:200%;
      
      -ms-transform: scale(0.5);
      -moz-transform: scale(0.5);
      -o-transform: scale(0.5);
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      
      -ms-transform-origin: 0 0;
      -moz-transform-origin: 0 0;
      -o-transform-origin: 0 0;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    }
`;
