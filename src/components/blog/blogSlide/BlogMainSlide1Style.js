import { styled } from "styled-components";

export const BlogMainSlideContainer = styled.div`
    width:100%;
    min-height:100%;
    color: white;
    display:flex;
    flex-direction:column;
    align-items:center;
    animation: appear 1.2s;
    @keyframes appear {
        from {
            opacity:0.1;
        }
        to {
            opacity:1;
        }
    }

`

export const BlogMainDate = styled.div`
    width:100%;
    font-size:12px;
    color:whitesmoke;
    display:flex;
    &::before, &::after{
        content:'';
        display:inline-block;
        width:100%;
        height:1px;
        background-color:gray;
    }
    justify-content:center;
    align-items:center;
    text-align:center;
    margin:10px auto 100px;
`
export const Today = styled.div`
    width:50%;
    display:inline-block;
`

export const BlogMainText = styled.div`
    position:absolute;
    top:20%;
    font-family: 'Inknut Antiqua', serif;
    font-size:78px;
    margin-bottom:20px;
`
export const BlogMainComments = styled.div`
    position:absolute;
    font-family: 'Comfortaa', cursive;
    top:40%;
    font-size:20px;
    line-height:30px;
    justify-content:center;
    text-align:center;
`