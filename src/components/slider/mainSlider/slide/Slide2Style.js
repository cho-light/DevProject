import { styled } from "styled-components";

export const Slide2Container = styled.div`
    flex: 1;
    height:100%;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    
`
export const Slide2MainBox = styled.div`
    background-color:red;
    display:flex;
    width:90%;
    height:90%;
    box-shadow:0px 0px 20px gray;
    border-radius:15px;
`
export const Slide2Section1 = styled.div`
    height:100%;
    width:25%;
    background-color:#EEE0C9;
    border-radius: 15px 0 0 15px;
    
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Slide2ImgBox = styled.div`
    width:150px;
    height:150px;
    border: 1px solid red;
    border-radius:50%;
`
export const Slide2Name = styled.div`
    width:50px;
    height:50px;
    background-color:red;
    display:flex;
    justify-content: center;
    align-items:center;
`
export const Slide2Link = styled.div`
    width:50px;
    height:50px;
    background-color:green;
`

export const Slide2Section2 = styled.div`
    height:100%;
    width:75%;
    background-color:whitesmoke;

    border-radius: 15px 15px 15px 0;
`