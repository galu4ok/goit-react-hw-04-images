import styled from 'styled-components';

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #3f51b5;
  border-radius: 5px;

  padding: 10px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #3f51b5;
  }
`;
