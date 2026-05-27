import { View, Text, StyleSheet } from 'react-native';

export default function Questao3() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>
          Home Screen
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>
          Profile Screen
        </Text>
      </View>

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

  card: {
    width: 250,
    padding: 30,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});