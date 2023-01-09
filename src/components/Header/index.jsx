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
            <button>로그인</button>
            <button>회원가입</button>
          </UserMenu>
        </TopBar>
        <Navbar className="navbars">
            <ul>
                <li><Link to={'/write'}>글쓰기</Link></li>
            </ul>
        </Navbar>
        </NavBarWrapper>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
