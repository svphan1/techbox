import styled from "styled-components";

export const FooterList = styled.li`
  position: relative;
  padding-bottom: 7px;
    &:hover {
      opacity: 1;
    }
    &::before {
      content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: white;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
    }
    &:hover::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
`;