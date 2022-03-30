import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  CheckBox,
  ScrollView,
} from 'react-native';
import AuthContext from '../AuthContext';
import Constants from 'expo-constants';
//import * as SQLite from 'expo-sqlite';
import style from '../styles/Login_Cadastro';
import react from 'react';

/*function openDatabase() {
  if(Platform.OS === 'web')
  {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase('db.db');
  return db;
}

const db = openDatabase();

function Items ({done: doneHeading, onPressItem})
{
  const [items, setItems] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?`,
        [doneHeading? 1 : 0],
        (_,{rows: {_array}}) => setItems (_array)
      );
    });
  }, []);
}*/

const Login_Dark_Theme = () => {
  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');
  
  const { login } = React.useContext(AuthContext);
  
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../assets/img_app/Tela_Login_Dark_Theme.png')}
        style={style.fundo}>
        <Text style={style.TXTUsuario}>Nome de usuario</Text>
        <TextInput
          style={style.TBXUsuario}
          name="NomeUsuario"
          value={usuario}
          onChangeText={setUsuario}
          placeholder="Nome de usuario"></TextInput>
        <Text style={style.TXTSenha}>Senha</Text>
        <TextInput
          style={style.TBXSenha}
          secureTextEntryre
          value={senha}
          onChangeText={setSenha}
          name="Senha"
          placeholder="Senha"></TextInput>
        <TouchableOpacity style={style.BTNLogin} onPress={() => login({usuario, senha})}>
          <Text style={style.TXTButon_Dark}>Fazer login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const Login_Light_Theme = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../assets/img_app/Tela_Login_Light_Theme.png')}
        style={style.fundo}>
        <Text style={style.TXTUsuario_Light}>Nome de usuario</Text>
        <TextInput
          style={style.TBXUsuario_light}
          name="NomeUsuario"
          placeholder="Nome de usuario"></TextInput>
        <Text style={style.TXTSenha_Light}>Senha</Text>
        <TextInput
          style={style.TBXSenha}
          secureTextEntry
          name="Senha"
          placeholder="Senha"></TextInput>
        <TouchableOpacity style={style.BTNLogin_Light}>
          <Text style={style.TXTButon_Light}>Fazer login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const Login = ({dark_or_light}) => {
  if(dark_or_light == 0)
  {
    return <Login_Dark_Theme/>
  }
  else if(dark_or_light == 1)
  {
    return <Login_Light_Theme/>
  }
}

export default Login;