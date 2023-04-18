import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import { getUserState } from "@store/reducers/user";
import { getLogOut } from "@store/actions/users";
import { getUserName } from "@utils/days";

const Header = ({ isLoggedIn }) => {
  const [isShowModal, setShowModal] = useState(false);
  const { loadUserInfo } = useSelector(getUserState);
  const dispatch = useDispatch();

  const onClickAuthModal = (e) => {
    setShowModal((prev) => (prev = true));
    dispatch(showAuthModal());
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
                {loadUserInfo && (
                  <>
                    <span>{getUserName(loadUserInfo.email)}</span>
                    <button onClick={onClickLogOut}>로그아웃</button>
                  </>
                )}
              </UserMenu>
            ) : (
              <UserMenu>
                <button onClick={onClickAuthModal}>로그인</button>
              </UserMenu>
            )}
          </TopBar>
          {isLoggedIn && (
            <Navbar className="navbars">
              <ul>
                <li>
                  <Link to={"/write"}>글쓰기</Link>
                </li>
              </ul>
            </Navbar>
          )}
          {isShowModal && <ProcessAuth />}
        </NavBarWrapper>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
