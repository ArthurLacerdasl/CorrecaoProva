import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>

      <Drawer.Screen
        name="questao1"
        options={{
          drawerLabel: 'Questão 4',
          title: 'Questão 4',
        }}
      />

      <Drawer.Screen
        name="questao2"
        options={{
          drawerLabel: 'Questão 5',
          title: 'Questão 5',
        }}
      />

      <Drawer.Screen
        name="questao3"
        options={{
          drawerLabel: 'Questão 8',
          title: 'Questão 8',
        }}
      />

      <Drawer.Screen
        name="questao4"
        options={{
          drawerLabel: 'Questão 10',
          title: 'Questão 10',
        }}
      />

      <Drawer.Screen
        name="questao5"
        options={{
          drawerLabel: 'Questão 12',
          title: 'Questão 12',
        }}
      />

    </Drawer>
  );
}