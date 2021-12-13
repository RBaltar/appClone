import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {styles} from './style';
import BarraInferior from '../../Components/BarraInferior';
import {useNavigation} from '@react-navigation/native';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(null);
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const navigation = useNavigation();

  function signIn(email, senha) {
    if (email === 'loginkanui@gmail.com' && senha === '123456') {
      () => navigation.navigate("Home")
    } else {
      alert('Email ou senha incorretos');
    }
  }

  return (
    <>
      <View style={styles.barraSup}>
        <TouchableOpacity
          onPress={() => setIsLogged(!isLogged)}
          style={[
            styles.buttonLogin,
            {backgroundColor: isRegistered ? 'white' : '#303030'},
          ]}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsRegistered(!isRegistered)}
          style={[
            styles.buttonLogin,
            {backgroundColor: isLogged ? 'white' : '#303030'},
          ]}>
          <Text>Cadastro</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.safeArea}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="E-mail ou CPF*"
          />
          <TextInput
            style={styles.input}
            onChangeText={setSenha}
            value={senha}
            placeholder="Senha*"
            secureTextEntry
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.button}>
            <Text style={styles.texto}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.esqueci}>
            <Text style={{color: '#f9750c'}}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <BarraInferior />
    </>
  );
};
