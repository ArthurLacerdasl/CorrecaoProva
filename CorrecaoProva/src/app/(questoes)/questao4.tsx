import { useState } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default function Questao4() {

  const [tela, setTela] = useState('home');

  if (tela === 'details') {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>
          Details Screen
        </Text>

        <Button
          title="Go Back"
          onPress={() => setTela('home')}
        />

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Home Screen
      </Text>

      <Button
        title="Go to Details"
        onPress={() => setTela('details')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});