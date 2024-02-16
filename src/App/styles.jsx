import styled from "styled-components";
import { device } from "../styles/device";

export const Screen = styled.div`
  background-color: rgb(240, 242, 245);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #1b2327;
  box-shadow: 0px 0px 0px 0.5px #000;
  width: 30%;
  min-width: 500px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  gap: 20px;

  @media ${device.tablet}{
    width: 100%;
    height: 100%;
    min-width: 0;
    justify-content: center;
  }
`;

export const Titulo = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
`;

export const ButtonSearch = styled.div`
  width: 10%;
  display: flex;
  align-items:center;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ContainerInput = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`;

export const Input = styled.input`
  background-color: rgb(255, 255, 255);
  color: #000;
  outline: none;
  padding-left: 20px;
  height: 3rem;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  width: 90%;

`;

export const ContainerInfo = styled.div`
  color: #000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px;
  gap: 15px;
  font-weight: 600;
  font-size: 1rem;

`;
