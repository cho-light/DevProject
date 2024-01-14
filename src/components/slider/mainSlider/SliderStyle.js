import { styled } from "styled-components";

export const SliderContainer = styled.div`
    position:relative;
    height: 100%;
    width:100%;
    /* overflow:hidden; */
    /* scrollbar-width:none;
    -ms-overflow-style:none; */
    /* overflow:auto; */
    &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
    /* ${props => props.scroll ? `background-color: red;` : `background-color: #CBCAC5;` } */
    /* background-color: #CBCAC5; */
`

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

export const Slider = styled.div`

    height:100%;
    transition: 2s;
    /* scrollbar-width:none;
    -ms-overflow-style:none;
    overflow-y:scroll;
    &::-webkit-scrollbar {
        display:none;
    } */

`


