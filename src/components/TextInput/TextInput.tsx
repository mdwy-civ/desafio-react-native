import React from 'react';
import styled from 'styled-components/native';

const TI = styled.TextInput`
  background-color: #dbdbdb;
  width: 100%;
  border-radius: 2px;
`;

type Props = {
  onChangeText: (text: string) => void;
  value: string;
};

export const TextInput = ({
  onChangeText,
  value,
}: {
  onChangeText: (text: string) => void;
  value: string;
}) => {
  return (
    <TI
      placeholder="Digite o usuário do Github"
      value={value}
      onChangeText={(text) => onChangeText(text)}
    />
  );
};
