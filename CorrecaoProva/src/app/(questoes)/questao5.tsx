import { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

export default function Questao5() {

  const [aba, setAba] = useState('home');

  return (
    <View style={styles.container}>

      <View style={styles.content}>

        {aba === 'home' ? (
          <Text style={styles.text}>
            Home Screen
          </Text>
        ) : (
          <Text style={styles.text}>
            Settings Screen
          </Text>
        )}

      </View>

      <View style={styles.tabBar}>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setAba('home')}
        >
          <Ionicons
            name={
              aba === 'home'
                ? 'home'
                : 'home-outline'
            }
            size={28}
            color={
              aba === 'home'
                ? 'tomato'
                : 'gray'
            }
          />

          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setAba('settings')}
        >
          <Ionicons
            name={
              aba === 'settings'
                ? 'settings'
                : 'settings-outline'
            }
            size={28}
            color={
              aba === 'settings'
                ? 'tomato'
                : 'gray'
            }
          />

          <Text>Settings</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },

  tab: {
    alignItems: 'center',
  },
});