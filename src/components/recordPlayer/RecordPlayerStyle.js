import { styled } from "styled-components";
import Lp from './LP.png'
import Lparm from './LPARM.png'

export const RecordBody = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  top:30%;
  right:-150px;
  box-shadow:10px 10px 10px 10px gray;
`

export const Record = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${Lp});
  background-size: cover;
  border-radius: 50% ;
  animation: spin 6s linear infinite;
  overflow: hidden;
    @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  `


export const Arm = styled.div`
    position:absolute;
    width:80px;
    height:270px;
    background-image: url(${Lparm});
    background-color:red;
    background-size:cover;
    transform:rotate(120deg);
    right:120px;
    transition:1s;
    &:hover{
        transform: scale(1.1) rotate(120deg);
        transition: 1s;
        right:100px;
    }
`

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`

  
