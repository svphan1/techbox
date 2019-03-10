import styled from "styled-components";
import "../../App.css";

export const CardButton = styled.button`
  font-size: .8rem;
  font-weight: bold;
  color: white;
  background-color: rgb(87, 52, 140);
  display: flex;
  border: 0.15rem solid rgb(87, 52, 140);
  cursor: pointer;
  border-radius: 3rem;
  padding: 0.1rem 0.8rem;
  transition: all 0.2s ease-in-out;
    &:focus {
      outline: 0;
    }
    &:hover {
      color: white;
      text-decoration: underline;
    }
`;