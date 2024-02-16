import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";

import api from "../services/api";

import {
  Screen,
  Container,
  Titulo,
  ContainerInput,
  Input,
  ButtonSearch,
  ContainerInfo,
} from "./styles";

const App = () => {
  const inputCep = useRef();
  const [cep, setCep] = useState({});

  const handleClick = async () => {
    if (!inputCep.current.value) {
      Swal.fire({
        title: "Vazio",
        text: "Por favor, Digite o CEP",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }

    try {
      const response = await api.get(`${inputCep.current.value}/json`);
      setCep(response.data);
      inputCep.current.value = "";
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Por favor digite um CEP valido!",
        icon: "error",
        confirmButtonText: "Ok",
      });

      inputCep.current.value = "";
    }
  };

  return (
    <Screen>
      <Container>
        <Titulo>Buscador de CEP</Titulo>
        <ContainerInput>
          <Input
            type="text"
            ref={inputCep}
            maxLength={8}
            placeholder="CEP"
          ></Input>
          <ButtonSearch>
            <FaSearch onClick={handleClick} cursor={"pointer"} />
          </ButtonSearch>
        </ContainerInput>

        {Object.keys(cep).length > 0 && (
          <ContainerInfo>
            <h1>CEP: {cep.cep}</h1>

            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>
              {cep.localidade} - {cep.uf}
            </span>
          </ContainerInfo>
        )}
      </Container>
    </Screen>
  );
};

export default App;
