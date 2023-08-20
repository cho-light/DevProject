import { styled } from "styled-components";

export const HeaderSection = styled.div`
    width: 100%;
    font-size:20px;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0)
    );


    display:flex;
    justify-content:space-between;
    text-align:center;
    position:fixed;
    padding: 10px;
    top:0;
    right:0;

    z-index: 9;
`