import { styled } from "styled-components";

export const Slide1Container = styled.div`
    min-height:100%;

    display: flex;
    position:relative;
    

    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    span{
        font-family: 'Rajdhani', sans-serif;
        font-weight:900;
    }
`

export const Slide1Section1 = styled.div`
    display:flex;
    position:relative;
    width:100%;
    
    text-shadow : 4px 4px 8px gray;
    div{
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 80px;
        transition: 1s;
        backface-visibility:hidden;
        transform-origin: bottom; 
        color:white;
        white-space:nowrap;
    }
    overflow:hidden;
`
export const Text1 = styled.div`
    position:absolute;
    top:30%;
    left:50%;
    ${props => (props.scroll > 50) ? 
    `
        transform: translate(-350%, -50%) rotateX(0deg) !important;
        
    `
    :
    `
        transform: translate(-50%, -50%) rotateX(180deg);
    `}
`
export const Text2 = styled.div`
    position:absolute;
    top:45%;
    left:50%;
    ${props => (props.scroll > 150) ? 
    `
        transform: translate(250%, -50%) rotateX(0deg) !important;
    `
    :
    `
        transform: translate(-50%, -50%) rotateX(180deg);
    `}
`
export const Text3 = styled.div`
    position:absolute;
    top:60%;
    left:50%;
    ${props => (props.scroll > 250) ? 
    `
        transform: translate(-250%, -50%) rotateX(0deg) !important;
    `
    :
    `
        transform: translate(-50%, -50%) rotateX(180deg);
    `}
    
`

export const Slide1Section2 = styled.div`
    display:flex;
    position:relative;
    width: 100%;
    background-color:blue;
    font-weight: 700;
`

export const Section2FEButton = styled.div`
    ${(props)=> props.btn ? (
        `color:#ADC4CE;
        text-shadow : 1px -1px 3px gray;
        cursor: pointer;
        `
        ) : (
        `
         color:#496363;
         text-shadow : 1px 2px 3px gray;
         text-decoration : underline;
         `
    )}
    margin:0 20px 0;
    font-size:36px;
    transition:.2s;
`

export const Section2BEButton = styled.div`
    ${(props)=> props.btn ? (
        `color:#ADC4CE;
        text-shadow : 1px -1px 3px gray;
        cursor: pointer;
        `
        ) : (
            `
            color:#496363;
            text-shadow : 1px 2px 3px gray;
            text-decoration : underline;
            `
    )}
    margin:0 20px 0;
    font-size:36px;
    transition:.2s;
`

export const Silhouette = styled.div`
    position:fixed;
    display:flex;
    z-index:-2;
    transition: all 1s ease-in-out;
    animation: fadein;
    @keyframes fadein {
        from {
            opacity:0;
        }
        to{
            opacity: 1;       
        }
    }
    right:0;
    left:0;
    bottom:0;
    margin:0 auto;
    width:500px;
    height:500px;

    ${props => (props.scroll > 895) ?
    `
        transform:translateX(210%) !important ;
        opacity:0;
    `
    :
    `
    `
     };

    ${props => (props.scroll > 200) ? 
    `
        transform: translateX(75%);
    `
    :
    `
        filter:grayscale(100%) brightness(30%);
    `};
`
export const Lazer = styled.div`
    display:flex;
    position:fixed;
    bottom:10%;
    width:10px;
    height:10px;
    background-color:red;

`
export const FeSilhouette = styled.img`
    position:absolute;
    backface-visibility:hidden;
    transition: all 1s ease-in-out;
    width:100%;
    ${props => props.button ? 
    `
        transform:rotateY(180deg);
    `
    :
    ``};
`
export const BeSilhouette = styled.img`
    position:absolute;
    backface-visibility:hidden;
    transition: all 1s ease-in-out;
    width:100%;
    ${props => props.button ? 
    `
    `
    :
    `
    transform:rotateY(180deg);
    `};

`

export const ScrollSection = styled.div`
    width:100%;
    position:absolute;
    display:flex;
    justify-content:center;
    bottom: 10px;
    transition: 1s;
    ${props => (props.scroll > 100) ? 
    `
    opacity:0;
    `
    :
    `
    `}
`
