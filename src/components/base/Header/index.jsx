import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showAuthModal } from "../../../store/reducers/auth";
import ProcessAuth from '../../../containers/ProcessAuth'

import {
  HeaderContainer,
  HeaderWrap,
  Logo,
  Navbar,
  NavBarWrapper,
  TopBar,
  UserMenu,
} from "./styles";

const Header = () => {
  const [isShowModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const onClickAuthModal = (e) => {
    setShowModal((prev) => (prev = true));
    dispatch(showAuthModal(isShowModal));
  };

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
              <button onClick={onClickAuthModal}>로그인</button>
            </UserMenu>
          </TopBar>
          <Navbar className="navbars">
            <ul>
              <li>
                <Link to={"/write"}>글쓰기</Link>
              </li>
            </ul>
          </Navbar>
          {isShowModal && <ProcessAuth />}
        </NavBarWrapper>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
