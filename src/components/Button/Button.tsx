import React from 'react';
import {View, Text} from 'react-native';
import {Bt, Tx} from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

const Button = (props: Props) => {
  const {title, onPress} = props;

  return (
    <Bt onPress={onPress}>
      <Text style={{textTransform: 'uppercase', color: 'white'}}>{title}</Text>
    </Bt>
  );
};

export default Button;
