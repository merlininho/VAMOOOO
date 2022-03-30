import * as React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import style from '../styles/Login_Cadastro';




const Cadastro_Dark_Theme = () => {
  return (
    <View style={style.container}>
      <ImageBackground source = {require('../../assets/img_app/Tela_Cadastro_Dark_Theme.png')} style={style.fundo}>
        <Text style={style.TXTUsuario}>Nome de usuario</Text>
        <TextInput style={style.TBXUsuario}  name="NomeUsuario" placeholder="Nome de usuario" >
        
        </TextInput>
        <Text style={style.TXTSenha}>Senha</Text>
        <TextInput style={style.TBXSenha} secureTextEntry name="Senha" placeholder="Senha">
        
        </TextInput>
        <Text style={style.TXTSenha}>Confirme a senha</Text>
        <TextInput style={style.TBXConfirm} secureTextEntry  name="ConfirmaSenha" placeholder="Confirme a senha">

        </TextInput>
        <TouchableOpacity style={style.BTNCadastrar}>
          <Text style={style.TXTButon_Dark}>Cadastrar</Text>
        </TouchableOpacity>
      </ImageBackground>
  </View>);
}

const Cadastro_Light_Theme = () => {
  return (
    <View style={style.container}>
      <ImageBackground source = {require('../../assets/img_app/Tela_Cadastro_Light_Theme.png')} style={style.fundo}>
        <Text style={style.TXTUsuario_Light }>Nome de usuario</Text>
        <TextInput style={style.TBXUsuario_light}  name="NomeUsuario" placeholder="Nome de usuario" >
        
        </TextInput>
        <Text style={style.TXTSenha_Light}>Senha</Text>
        <TextInput style={style.TBXSenha_Light} secureTextEntry name="Senha" placeholder="Senha">
        
        </TextInput>
        <Text style={style.TXTSenha_Light}>Confirme a senha</Text>
        <TextInput style={style.TBXConfirm_Light} secureTextEntry  name="ConfirmaSenha" placeholder="Confirme a senha">

        </TextInput>
        <TouchableOpacity style={style.BTNCadastrar_Light}>
          <Text style={style.TXTButon_Light}>Cadastrar</Text>
        </TouchableOpacity>
      </ImageBackground>
  </View>);
}

const Cadastro = ({dark_or_light}) => {
  if(dark_or_light == 0)
  {
    return <Cadastro_Dark_Theme/>
  }
  else if(dark_or_light == 1)
  {
    return <Cadastro_Light_Theme/>
  }
}

export default Cadastro;
