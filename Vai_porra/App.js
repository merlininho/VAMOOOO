import * as React from 'react';
import { View } from 'react-native';
import Login from './components/cadastro';
import Cadastro from './components/login';
import style from './components/style';

export function App() {
  return (
    <View style={style.container}>
      <Login dark_or_light={1} />
    </View>
  );
}

export function App2() {
  return(
    <View style={style.container}>
      <Cadastro dark_or_light={0}/>
    </View>
  );
}

export default App