import styled from "styled-components";
import "../../App.css";

export const CartButton = styled.button`
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  background-color: rgb(87, 52, 140);
  display: flex;
  border: 0.15rem solid rgb(87, 52, 140);
  cursor: pointer;
  border-radius: 3rem;
  transform: translate(0, 8rem);
  transition: all 0.2s ease-out;
  padding: 0.1rem 0.8rem;
    &:focus {
      outline: 0;
    }
    &:hover {
      color: white;
      background-color: rgb(121, 85, 198);
      border: 0.15rem solid rgb(121, 85, 198);
    }
`;