import { styled } from "styled-components";


export const SlideButtonGroup = styled.div`
    position:absolute;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:60px;
    top:50%;
    z-index:9;
`
export const SlideUpButton = styled.div`
    height:0;
    width:0;
    border-bottom: 50px solid #f8f6f4;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    transform:translateY(-100%);
`
export const SlideDownButton = styled.div`
    height:0;
    width:0;
    border-top: 50px solid #f8f6f4;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    transform:translateY(0%);
`

export const SliderContainer = styled.div`
    position:relative;
    height: 100%;
    width:100%;
    overflow:hidden;
    background-color: #F1F0E8;
    /* background-color: ${(props) => (props.weather === '0' ? '#d2e9e9' : '#F8F6F4')}; */
`

export const Slider = styled.div`
    flex-direction:column;
    height:100%;
    transition: 2s;
`


