import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, HeaderWrap, Logo, Navbar, NavBarWrapper, TopBar, UserMenu } from "./styles";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <NavBarWrapper>
        <TopBar className="navbars">
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
        <Navbar className="navbars">
            <ul>
                <li><Link to={'/'}>글쓰기</Link></li>
            </ul>
        </Navbar>
        </NavBarWrapper>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
