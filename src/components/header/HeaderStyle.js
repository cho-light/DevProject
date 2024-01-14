import { styled } from "styled-components";

export const HeaderSection = styled.div`
    width: 100%;
    div{
        font-size:20px;
    }
    animation: fadein 1s ease-in-out;
    @keyframes fadein {
      from{
        opacity:0;
      }
      to{
        opacity:1;
      }
    }
    transition: 0.5s;
    opacity:1;
    display:flex;
    justify-content:space-between;
    text-align:center;
    align-items:center;
    position:absolute;
    padding: 20px 15px;
    top:10px;
    right:0;
    font-family: 'Rajdhani', sans-serif;
    span{
        font-size:20px;
        font-weight:bold;
    }
    z-index: 9;
    &::before {
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:3px;
        background-color:black;
    }
    &::after{
        content:'';
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        height:1px;
        background-color:black;
    }
`
export const ChangeButton = styled.div`
    display:flex;
    position:absolute;
    justify-content:center;
    align-items:center;
    z-index:-1;
    top:0px;
    left:0;
    right:0;
    bottom:0;
    div{
        font-size:18px;
    }
`
export const  ChangeButtonFront = styled.div`
    display:flex;
    position:absolute;
    justify-content:center;
    align-items:center;
    width:70px;
    height:30px;
    transition:all .2s;
    
    ${props => props.button ? `
        border:solid 1px ;
        border-radius:50px 140px 30px 50px;
        box-shadow: 0px 5px 0px 0px #b4b4b4;
        transform:rotateY(180deg) translate(-15px);
        z-index:9;
        opacity:.2;
    ` : `
        border-radius:50px 140px 30px 50px;
        transform:translate(-15px);
        background-color:#d9d9d9;
        box-shadow: 0px 5px 0px 0px #b4b4b4;
        z-index:10;
        &:hover{
            cursor:pointer;
            margin-top: 15px;
            margin-bottom: 5px;
            box-shadow:0 0 0 0 #b4b4b4;
        }
        &:active{
            margin-top: 15px;
            margin-bottom: 5px;
            box-shadow:0 0 0 0 #b4b4b4;
            background-color:#b4b4b4;
        }

    `}
`
export const ChangeButtonBack = styled.div`
    display:flex;
    position:absolute;
    justify-content:center;
    align-items:center;
    width:70px;
    height:30px;
    transition:all .2s;
    
    ${props => props.button ? `
        border-radius:50px 140px 30px 50px;
        transform: translate(-15px);
        background-color:#d9d9d9;
        box-shadow: 0px 5px 0px 0px #b4b4b4;
        z-index:10;
        &:hover{
            cursor:pointer;
            margin-top: 15px;
            margin-bottom: 5px;
            box-shadow:0 0 0 0 #b4b4b4;

        }
        &:active{
            margin-top: 15px;
            margin-bottom: 5px;
            box-shadow:0 0 0 0 #b4b4b4;
            background-color:#b4b4b4;
        }
        
        ` : `
        border:solid 1px ;
        border-radius:50px 140px 30px 50px;
        box-shadow: 0px 5px 0px 0px #b4b4b4;
        transform:rotateY(180deg) translate(-15px);
        z-index:9;
        opacity:.2;
    `}
    
`
export const GoToBlogButton = styled.div`
  perspective:300px;
  
  div{
    top:0;
    bottom:0;
    left:0;
    right:0;
    transition:all .5s;
    backface-visibility: hidden;
  }
  .material-symbols-outlined {
   
    position:absolute;
    transform:rotateY(0);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      90deg,
      #ff8177,
      #ff8c7f 10%,
      #f99185 33%,
      #cf556c 45%,
      #b12a5b 50%,
      #cf556c 55%,
      #f99185 66%,
      #ff8c7f 80%,
      #ff8177
    );
    background-size: 300% 100%;
    background-position-x: 0%;
    animation: gradient 1s ease-in-out infinite;
    @keyframes gradient {
      from {
        background-position-x: 0%;
      }
      to {
        background-position-x: 100%;
      }
    }
  }
  .Blog{
    font-weight:900;
    transform:rotateY(-180deg);
  }
  &:hover{
    cursor: pointer;
    .Blog{
      transform:rotateY(0)
    }
    .material-symbols-outlined {
      transform:rotateY(180deg)
    }
  }
`