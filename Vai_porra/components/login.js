import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import style from './style';

const Login_Dark_Theme = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/img_app/Tela_Login_Dark_Theme.png')}
        style={style.fundo}>
        <Text style={style.TXTUsuario}>Nome de usuario</Text>
        <TextInput
          style={style.TBXUsuario}
          name="NomeUsuario"
          placeholder="Nome de usuario"></TextInput>
        <Text style={style.TXTSenha}>Senha</Text>
        <TextInput
          style={style.TBXSenha}
          secureTextEntry="true"
          name="Senha"
          placeholder="Senha"></TextInput>
        <TouchableOpacity style={style.BTNLogin}>
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
        source={require('../assets/img_app/Tela_Login_Light_Theme.png')}
        style={style.fundo}>
        <Text style={style.TXTUsuario_Light}>Nome de usuario</Text>
        <TextInput
          style={style.TBXUsuario_light}
          name="NomeUsuario"
          placeholder="Nome de usuario"></TextInput>
        <Text style={style.TXTSenha_Light}>Senha</Text>
        <TextInput
          style={style.TBXSenha}
          secureTextEntry="true"
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