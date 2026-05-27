import React, { useState } from 'react';

import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import Mensagem from '../components/Mensagem';

export default function Questao2() {

  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Digite seu texto"
        value={texto}
        onChangeText={setTexto}
      />

      <Mensagem texto={texto} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
});