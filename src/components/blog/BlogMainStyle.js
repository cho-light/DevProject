import { styled } from "styled-components";

export const BlogMainContainer = styled.div`   
    width: 100%;
    height: 100%;
    
    display:flex;
    flex-direction:column;
`

export const BackgroundImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    position:fixed;
    z-index:-1;

    -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

    
`