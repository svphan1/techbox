import styled from "styled-components";
import "../../App.css";

export const CardButton = styled.button`
  font-size: .8rem;
  background: transparent;
  display: flex;
  margin: 0 auto;
  margin-bottom: 2rem;
  border: 0.15rem solid var(--mainDark);
  cursor: pointer;
  border-radius: 3rem;
  padding: 0.1rem 0.8rem;
  transition: all 0.2s ease-in-out;
    &:focus {
      outline: 0;
    }
    &:hover {
      color: white;
      background: var(--mainDark);
    }
`;