import * as React from 'react';
import { View } from 'react-native';
import Login from './components/Login_Cadastro/login';
import Cadastro from './components/Login_Cadastro/cadastro';
import style from './components/styles/Login_Cadastro';

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