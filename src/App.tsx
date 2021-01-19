import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import Button from './components/Button/Button';

const App = () => {
  const onPress = () => {
    Alert.alert('Atenção', 'Botão clicado');
  };

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="Buscar usuário" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
