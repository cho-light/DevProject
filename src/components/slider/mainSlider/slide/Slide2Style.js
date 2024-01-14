import { styled } from "styled-components";

export const Slide2Container = styled.div`
  flex: 1;
  min-height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const Slide2MainBox = styled.div`
  display: flex;
  position: absolute;
  z-index: -3;
  width: 100%;
  min-height: 100%;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(187, 177, 147, 0.5),
    rgba(187, 177, 147, 0.8),
    rgba(187, 177, 147, 1)
  );
`;
export const Slide2Section1 = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  background-color: green;
  margin: auto 80px;
`;
export const Slide2Box1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  float: left;
  span {
    color: black;
    font-size: 28px;
    line-height: 1.5;
    /* font-family: 'GowunBatang-Regular'; */
    /* -webkit-text-stroke: .2px gray;
        text-shadow:2px 2px 4px #C2948A; */
    font-weight: bold;
  }
  @font-face {
    font-family: "GowunBatang-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff")
      format("woff");
  }
`;

export const Slide2Section2 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Slide2ListTitle = styled.div`
  font-family: "Rajdhani", sans-serif;
  font-size: 70px;
  font-weight: 900;

  color: black;
  -webkit-text-stroke: 0.2px #c2948a;
  text-shadow: 2px 2px 4px gray;

  width: min-content;
  display: inline-block;
  margin-bottom: 25px;
  border-bottom: 4px solid #c2948a;
  padding-top: 6px;
`;
export const Slide2ProjectList = styled.div`
  font-size: 18px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;
