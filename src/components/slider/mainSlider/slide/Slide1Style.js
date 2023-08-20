import { styled } from "styled-components";

export const Slide1Container = styled.div`
    flex: 1;
    height:100%;

    display: flex;
    flex-direction:column;
    justify-content:center;
    padding-left:100px;
    
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`

export const Slide1Section1 = styled.div`
    padding-bottom: 300px;
    text-shadow : 4px 4px 8px gray;
`
export const Text1 = styled.div`
    position:fixed;
    top:20%;
    left:-200px;
    font-size: 78px;
    font-weight: 700;
    transition:1.5s;
`
export const Text2 = styled.div`
    position:fixed;
    top:32%;
    left:-900px;
    font-size: 78px;
    font-weight: 700;
    transition:1.5s;
`
export const Text3 = styled.div`
    position:fixed;
    top:44%;
    left:-600px;
    font-size: 78px;
    font-weight: 700;
    transition:1.5s;
`

export const Slide1Section2 = styled.div`
    display:flex;
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
