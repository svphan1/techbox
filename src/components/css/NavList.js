import styled from "styled-components";

export const NavList = styled.li`
  display: inline-block;
  position: relative;
  opacity: 0.75;
  padding-bottom: 5px;
    &:hover {
      opacity: 1;
    }
    &::before {
      transition: 300ms;
      height: 1px;
      content: "";
      position: absolute;
      background-color: white;
    }
    &::before {
      width: 0%;
      bottom: 10px;
    }
    &:hover::before {
      width: 100%;
    }
`;