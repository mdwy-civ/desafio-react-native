import React from 'react';
import {Button as ButtonRN, Text} from 'react-native';
import {Bt, Tx} from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

const Button = (props: Props) => {
  const {title, onPress} = props;

  return (
    <Bt onPress={onPress}>
      <Tx>{title}</Tx>
    </Bt>
  );
};

export default Button;
