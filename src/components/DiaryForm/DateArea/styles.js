import styled from "@emotion/styled";

// line-height: 40px;

export const DatePickerWrap = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const DatePickerBtn = styled.button`
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  line-height: 10px;
  border: none;
  border-radius: 50%;
  background-color: transparent;

  &:active {
    background: #e2e1e1;
  }
`;
