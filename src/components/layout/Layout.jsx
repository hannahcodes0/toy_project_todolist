import React from "react";
import styled from "styled-components";

// Layout에는 children 주로 사용
const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
