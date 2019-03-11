import styled from "styled-components";
import "../../App.css";

export const DetailsButton = styled.button`
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background-color: ${props =>
    props.cart ? "rgb(87, 52, 140)" : "rgb(16, 181, 59)"};
  display: flex;
  margin: 1rem 1rem 0 0;
  border: 0.15rem solid
    ${props => (props.cart ? "rgb(87, 52, 140)" : "rgb(16, 181, 59)")};
  cursor: pointer;
  border-radius: 3rem;
  padding: 0.2rem 0.8rem;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: 0;
  }
  &:hover {
    color: white;
    background-color: ${props =>
      props.cart ? "rgb(121, 85, 198)" : "rgb(19, 207, 68)"};
    border: 0.15rem solid
      ${props => (props.cart ? "rgb(121, 85, 198)" : "rgb(19, 207, 68)")};
  }
`;
