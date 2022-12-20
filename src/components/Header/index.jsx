import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, HeaderWrap, Logo, Navbar, NavBarWrapper, TopBar, UserMenu } from "./styles";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <NavBarWrapper>
        <TopBar>
          <Logo>
            <h1>
              <Link to="/">Diary</Link>
            </h1>
          </Logo>
          <UserMenu>
            <Link>로그인</Link>
            <Link>회원가입</Link>
          </UserMenu>
        </TopBar>
        <Navbar>
            <ul>
                <li><Link to={'/'}>menu1</Link></li>
                <li><Link to={'/'}>menu2</Link></li>
            </ul>
        </Navbar>
        </NavBarWrapper>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
