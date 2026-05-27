import { View, Text, StyleSheet } from 'react-native';

export default function Mensagem({ texto }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});