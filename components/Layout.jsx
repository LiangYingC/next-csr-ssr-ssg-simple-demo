import Link from "next/link";
import styled from "styled-components";
import { withRouter } from "next/router";

const Layout = ({ children, router }) => {
  return (
    <Wrapper>
      <Header>
        <NavList>
          <NavItem isActive={router.pathname === "/csr"}>
            <Link href="/csr">CSR Demo</Link>
          </NavItem>
          <NavItem isActive={router.pathname === "/ssr"}>
            <Link href="/ssr">SSR Demo</Link>
          </NavItem>
          <NavItem isActive={router.pathname === "/ssg"}>
            <Link href="/ssg">SSG Demo</Link>
          </NavItem>
        </NavList>
        <Description>
          可點擊各個按鈕，觀察 CSR / SSR / SSG render 的差異，也可 reload page
          試試效果。
        </Description>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <FooterItem>API 貢獻來源：https://api.apiopen.top/api.html</FooterItem>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 30px 10px 20px 10px;
`;

const NavList = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const NavItem = styled.div`
  margin-right: 10px;
  padding: 5px 8px;
  border: 0.5px solid #555;
  border-radius: 16px;

  background-color: ${({ isActive }) => (isActive ? "#333" : "#fff")};

  > a {
    font-weight: ${({ isActive }) => (isActive ? "bold" : "initial")};
    color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  }
`;

const Description = styled.div`
  font-size: 14px;
  font-style: italic;
  color: #555;
`;

const Content = styled.div`
  padding: 25px 10px 15px 10px;
  border-top: 0.5px solid #aaa;
  border-bottom: 0.5px solid #aaa;
`;

const Footer = styled.footer`
  padding: 20px 10px;
`;

const FooterItem = styled.div`
  font-size: 12px;
`;

export default withRouter(Layout);
