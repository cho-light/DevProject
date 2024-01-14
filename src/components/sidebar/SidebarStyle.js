import { styled } from "styled-components";
const mb_lg = "1.5rem";

export const SidebarContainer = styled.div`
  width: 270px;
  height: auto;
  position: fixed;
  z-index: 999;
  top: 200px;
  left: 80px;
  background-color: #8da7bc;
  border-radius: 20px;
  padding: 20px;
`;

export const Box = styled.div`
  span {
    font-size: 0.875rem;
  }
`;
export const Name = styled.div`
  h1 {
    font-size: 1.75rem;
  }
  h5 {
    margin-bottom: 1.8rem;
  }
`;
export const Home = styled.div`
  margin-bottom: ${mb_lg};
`;
export const About = styled.div`
  margin-bottom: ${mb_lg};
`;
export const Expoerience = styled.div`
  margin-bottom: ${mb_lg};
`;
export const Portfolio = styled.div`
  margin-bottom: ${mb_lg};
`;
export const Footer = styled.div`
  margin-bottom: ${mb_lg};
`;
