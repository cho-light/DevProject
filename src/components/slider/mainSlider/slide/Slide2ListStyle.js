import { styled } from "styled-components";


export const Slide2ListSection = styled.div`
    padding-left:20px;
    overflow:hidden;
    
    ${props => props.value ? `
        animation: gradient .3s ease-in-out forwards;
        @keyframes gradient {
        from {
            background-position-x: 100%;
        }
        to {
            background-position-x: 0%;
        }
        }
        background-image:linear-gradient(
            270deg,
            #f6f0ed 20%,
            transparent 70%,
            #f6f0ed
            
        );
    `:`
    &:hover{
        animation: gradient .3s ease-in-out forwards;
        @keyframes gradient {
        from {
            background-position-x: 100%;
        }
        to {
            background-position-x: 0%;
        }
        }
        background-image:linear-gradient(
            270deg,
            transparent 70%,
            #f6f0ed
            
        );
    }
    `}
    background-size: 300% 100%;
    background-position-x: 100px; 
`
export const Numbering = styled.div`
    display:flex;
    
`
export const ListTitle = styled.div`
    display:inline-block;
    font-size:24px;
    margin-bottom:10px;
    transition: .2s;
    
    &:hover{
        cursor:pointer;
        text-shadow: 2px 4px 2px gray;
        justify-content:space-between;
       
        
    }
    

`

export const ListComments = styled.div`

    width:100%;
    font-size: 14px;
    margin-bottom:10px;
    transition: all .2s;
    
    ${props => props.value ? `
        animation: fadein .2s forwards;
        @keyframes fadein {
            from {
                display:none;
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
        }}
        `: `
        animation: fadeout .2s forwards;
        @keyframes fadeout {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                display:none;
                opacity: 0;
                transform: translateY(-20px);
        }}
        `};

`