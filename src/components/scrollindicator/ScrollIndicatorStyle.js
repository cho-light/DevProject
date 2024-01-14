import { styled } from "styled-components";

export const ScrollIndicatorContainer = styled.div`
    width:20px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    bottom:10px;
    flex-direction:column;
`

export const ScrollButton = styled.div`
    width:100%;
    height:100%;
    border:3px solid ${(porps)=> porps.color};
    border-radius: 10px;
    display:flex;
    justify-content:center;
`
export const ScrollButtonAnimation = styled.div`
    width:10px;
    height:10px;
    display:inline-block;
    border:5px solid ${(porps)=> porps.color};
    border-radius:50%;
    margin:2px;
    animation: slide 2.0s linear infinite;
    @keyframes slide {
    /* 0% {
        opacity:.1;
        transform: translateY(0);
    }
    50%{
        opacity:.4;
        transform: translateY(50%);
    }
    80%{
        opacity:.9;
        transform: translateY(90%);
    }
    95% {
        opacity:1;
        transform: translateY(100%);
    }
    100% {
        opacity:1;
        transform: translateY(100%);
    } */

    0% {
        opacity:.1;
        transform: translateY(0);
    }
    10%{
        opacity:.4;
        transform: translateY(50%);
    }
    25%{
        opacity:.9;
        transform: translateY(90%);
    }
    45%{
        opacity:1;
        transform: translateY(100%);
    }
    50%{
        opacity:1;
        transform: translateY(100%); 
    }
    60%{
        opacity:.9;
        transform: translateY(90%);
    }
    75%{
        opacity:.4;
        transform: translateY(50%);
    }
    95%{
        opacity:.1;
        transform: translateY(0);
    }
    100%{
        opacity:0;
        transform: translateY(0);
    }
  }

`
export const ScrollButtonTag = styled.div`
    margin-top:5px;
    color: ${(porps)=> porps.color};
`