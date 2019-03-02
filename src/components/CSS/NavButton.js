import styled from "styled-components";
import "../../App.css";

export const NavButton = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainDark);
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.4rem;
  transition: all 0.2s ease-in-out;
    &:focus {
      outline: 0;
    }
    &:hover {
      background: var(--mainGray);
    }
`;