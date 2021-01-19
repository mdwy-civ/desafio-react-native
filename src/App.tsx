import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import Button from './components/Button/Button';
import TextInput from './components/TextInput';
import {useGitHub} from './hooks/useGitHub';

const App = () => {
  const [val, setVal] = useState('');
  const [getUserGitHub, {loading, error, data}] = useGitHub();

  const onPress = () => {
    getUserGitHub(val);
  };

  useEffect(() => {
    if (data) {
      Alert.alert('Atenção', 'Este usário tem ' + data + ' repositório(s).');
    }
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#006464" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setVal} value={val} />
      <Button onPress={onPress} title="Buscar usuário" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default App;
