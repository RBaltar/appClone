import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles';
import Carrinho from '../assets/Carrinho.png';
import Categorias from '../assets/Categorias.png';
import Favoritos from '../assets/Favoritos.png';
import Inicio from '../assets/Inicio.png';
import MinhaConta from '../assets/MinhaConta.png';
import {useNavigation} from '@react-navigation/native';


function BarraInferior() {

  const navigation = useNavigation();

  return (
    <View style={styles.barraInf}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image
        style={{width: 60, height: 60}}
        resizeMode="contain"
        source={Inicio}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Coming soon")}>
      <Image
        style={{width: 85, height: 60}}
        resizeMode="contain"
        source={Categorias}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Coming soon")}>
      <Image
        style={{width: 80, height: 60}}
        resizeMode="contain"
        source={Carrinho}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Coming soon")}>
      <Image
        style={{width: 80, height: 60}}
        resizeMode="contain"
        source={Favoritos}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Image
        style={{width: 95, height: 60}}
        resizeMode="contain"
        source={MinhaConta}
      />
      </TouchableOpacity>
    </View>
  );
};

export default BarraInferior;