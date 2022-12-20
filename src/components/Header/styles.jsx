import styled from "@emotion/styled";

export const NavBarWrapper = styled.div`
  width: 100%;
  padding: 13px 8px;
`;
export const TopBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  a {
    color: gray;
    text-shadow: 3px -2px 4px grey;
    font-size: 24px;
    letter-spacing: -2px;
  }
`;

export const UserMenu = styled.div`
  a {
    margin-left: 5px;
    padding: 0 5px;
    display: inline-block;
  }
`;

export const HeaderWrap = styled.header`
  width: 100%;
  padding: 15px;
`;
export const HeaderContainer = styled.div`
  max-width: 680px;
  width: 80%;
  margin: 0px auto;
  background-color: #fbfafa;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 13%);
`;

export const Navbar = styled.nav`
  margin-top: 12px;
  border-top: 1px solid #eceaea;

  ul {
    display: flex;
    margin-top: 15px;
  }

  li:not(:first-of-type) {
    padding-left: 12px;
  }
`;
