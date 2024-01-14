import React from "react";
import {
  About,
  Box,
  Expoerience,
  Footer,
  Home,
  Name,
  Portfolio,
  SidebarContainer,
} from "./SidebarStyle";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Box>
        <Name>
          <h1>Cho-light</h1>
          <h5>Web Developer</h5>
        </Name>
        <Home>
          <span>HOME</span>
        </Home>
        <About>
          <span>ABOUT</span>
        </About>
        <Expoerience>
          <span>EXPERIENCE</span>
        </Expoerience>
        <Portfolio>
          <span>PORTFOLIO</span>
        </Portfolio>
        <Footer>현재 페이지의 모든 작업물 기여도는 100% 입니다.</Footer>
      </Box>
    </SidebarContainer>
  );
}
