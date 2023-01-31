import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProcessAuth from "@containers/ProcessAuth";

import {
  HeaderContainer,
  HeaderWrap,
  Logo,
  Navbar,
  NavBarWrapper,
  TopBar,
  UserMenu,
} from "./styles";
import { showAuthModal } from "@store/reducers/modal";
import { getState } from "@store/reducers/user";
import { getLogOut } from "@store/actions/users";

const Header = () => {
  const [isShowModal, setShowModal] = useState(false);
  const { loadUserInfo, isLoggedIn } = useSelector(getState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAuthModal = (e) => {
    setShowModal((prev) => (prev = true));
    dispatch(showAuthModal(isShowModal));
  };

  const onClickLogOut = () => {
      dispatch(getLogOut());
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
            {isLoggedIn ? (
              <UserMenu>
                <span>
                  {loadUserInfo.email.slice(0, loadUserInfo.email.indexOf("@"))}
                  님 환영합니다.
                </span>
                <button onClick={onClickLogOut}>로그아웃</button>
              </UserMenu>
            ) : (
              <UserMenu>
                <button onClick={onClickAuthModal}>로그인</button>
              </UserMenu>
            )}
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