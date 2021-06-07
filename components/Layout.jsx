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
          <NavItem isActive={router.pathname === "/isr"}>
            <Link href="/isr">ISR Demo</Link>
          </NavItem>
        </NavList>
        <Description>
          可點擊各個按鈕，觀察 CSR / SSR / SSG / ISR render 的差異，也可 reload
          page 試試效果。
        </Description>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <FooterItem
          href="https://github.com/LiangYingC/Next-CSR-SSR-SSG-Simple-Demo"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next-CSR-SSR-SSG-Simple-Demo Github Repo
        </FooterItem>
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

const FooterItem = styled.a`
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  font-size: 15px;
  color: #555;

  box-shadow: inset 0 -6px 0 0 rgb(0, 0, 0, 0.1);
  transition: 0.25s;

  :hover {
    box-shadow: inset 0 -2px 0 0 rgb(0, 0, 0, 0.1);
  }
`;

export default withRouter(Layout);
