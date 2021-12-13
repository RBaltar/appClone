import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  SafeAreaView,
  TextInput,
  Image,
  Touchable,
} from 'react-native';
import {styles} from './style';
import BarraInferior from '../../Components/BarraInferior';
import {ScrollView} from 'react-native-gesture-handler';

export const Home = () => {
  const [email, setEmail] = useState('');
  const [menu, setMenu] = useState([
    {
      id: 1,
      texto: 'MASCULINO',
    },
    {
      id: 2,
      texto: 'VESTUARIO&ACESSÓRIOS'
    },
    {
      id: 3,
      texto: 'ROUPAS'
    },
    {
      id: 4,
      texto: 'OUTLET K'
    },
    {
      id: 5,
      texto: 'CALÇADOS'
    },
    {
      id: 6,
      texto: 'FEMIININO'
    },
  ]);

  return (
    <>
      <ScrollView>
        {/* //header */}
        <View style={styles.barraSup}>
          <View style={styles.busca}>
            <Image
              source={require('../../assets/lupa.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Buscar na Kanui"
            />
          </View>
          <View style={styles.menus}>
            <FlatList 
              data={menu}
              renderItem={({item}) => <TouchableOpacity><Text style={{color: 'white', margin: 5, marginRight: 50}}>
              {item.texto}
            </Text></TouchableOpacity>}
              keyExtractor={item => item.id} //ALGO UNICO NO SEU ARRAY
              horizontal={true}
            />
          </View>
        </View>



        <View style={styles.safeArea}>
          <SafeAreaView style={styles.page}>
            <View style={styles.marca}>
              <View>
                {/* // barra frete */}
                  <TouchableOpacity>
                <View style={styles.frete}>
                  <Image
                    source={require('../../assets/frete.png')}
                    style={{resizeMode: 'contain', width: 50, height: 27}}
                  />
                  <Text style={{color: '#f9750c', fontWeight: 'bold'}}>
                    FRETE GRÁTIS
                  </Text>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    {' '}
                    A PARTIR DE R$ 79'
                  </Text>
                </View>
                  </TouchableOpacity>
                {/* FIM BARRA FRETE */}
                <TouchableOpacity>
                <View style={styles.off}>
                  {/* barra promoção */}
                  <View style={styles.promo}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginRight: 4,
                      }}>
                      R$ 100 GANHE
                    </Text>
                    <Text
                      style={{
                        color: '#f9750c',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      10% OFF
                    </Text>
                    <Text style={{color: '#f9750c'}}>*</Text>
                  </View>
                  <View style={styles.promo}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginRight: 4,
                      }}>
                      R$ 150 GANHE
                    </Text>
                    <Text
                      style={{
                        color: '#f9750c',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      15% OFF
                    </Text>
                    <Text style={{color: '#f9750c'}}>*</Text>
                  </View>
                  <View style={styles.promo}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginRight: 4,
                      }}>
                      R$ 200 GANHE
                    </Text>
                    <Text
                      style={{
                        color: '#f9750c',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      20% OFF
                    </Text>
                    <Text style={{color: '#f9750c'}}>*</Text>
                  </View>
                </View>
              </TouchableOpacity>
              </View>
              <TouchableOpacity>
              {/* barra lateral */}
              <Image
                style={{width: 60, height: 185, marginTop: 2}}
                source={require('../../assets/BARRA1.png')}
                />
            </TouchableOpacity>
            </View>
            {/* fim primeira view */}
            <View style={styles.marca}>
              <View>
                {/* // barra frete */}
            <TouchableOpacity>
                <View style={styles.frete}>
                  <Image
                    source={require('../../assets/frete.png')}
                    style={{resizeMode: 'contain', width: 50, height: 27}}
                  />
                  <Text style={{color: '#f9750c', fontWeight: 'bold'}}>
                    FRETE GRÁTIS
                  </Text>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    {' '}
                    A PARTIR DE R$ 79'
                  </Text>
                </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                <View style={styles.off}>
                  {/* barra promoção */}
                  <View style={styles.promo}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 23,
                        marginRight: 4,
                      }}>
                      NATAL ATÉ 60% OFF
                    </Text>
                    <Text style={{color: '#fff'}}>*</Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
              {/* barra lateral */}
              <TouchableOpacity>
              <Image
                style={{width: 60, height: 175, marginTop: 5}}
                source={require('../../assets/BARRA2.png')}
              />
              </TouchableOpacity>
            </View>
            {/* fim segunda view */}
            {/* compre 4 leve 5 */}
            <TouchableOpacity>
            <Image
              style={{marginLeft: 10, width: 350, height: 50}}
              source={require('../../assets/BARRA3.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#000',
                width: 350,
                height: 100,
                marginLeft: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
                Compre 4
              </Text>
              <Text
                style={{
                  color: '#f9750c',
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                LEVE 5
              </Text>
              <Text style={{color: '#f9750c'}}>*</Text>
            </View>
            </TouchableOpacity>
            {/* Fim compre 4 leve 5 */}
            {/* Bermudas */}
            <TouchableOpacity>
            <View style={styles.bermuda}>
              <View style={styles.bermudasText}>
                <Text style={styles.textoBermuda}> BERMUDAS</Text>
                <Text style={styles.textoBermuda}> PARA PRAIA</Text>
                <View style={styles.asteriscoBranco1}>
                  <Text style={styles.textoBermuda}> ATÉ R$ 49,00</Text>
                  <Text style={styles.asteriscoBranco}>*</Text>
                </View>
              </View>
              <Image
                style={styles.imgBermuda}
                source={require('../../assets/bermudas.jpeg')}
              />
            </View>
            </TouchableOpacity>
            {/* fiim bermudas */}
            {/* inicio tenis */}
            <TouchableOpacity>
            <View style={styles.tenis}>
              <View style={styles.bermudasText}>
                <Text style={styles.textoBermuda}> 3 TÊNIS</Text>
                <View style={styles.asteriscoBranco1}>
                  <Text style={styles.textoBermuda}> POR R$ 209</Text>
                  <Text style={styles.asteriscoBranco}>*</Text>
                </View>
              </View>
              <Image
                style={styles.imgBermuda}
                source={require('../../assets/Tenis.jpeg')}
              />
            </View>
            </TouchableOpacity>
            {/* FIM DIV TENIS */}
            {/* INICIO DIV SNEAJERS */}
            <TouchableOpacity>
            <View style={styles.sneakers}>
              <View style={styles.sneakers1}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    SNEAKERS
                  </Text>
                  <Text
                    style={{
                      color: '#f9750c',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginLeft: 10,
                    }}>
                    TOP MARCAS
                  </Text>
                </View>
                <View style={styles.topMarcas}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    ATÉ 50% OFF
                  </Text>
                  <Text style={{color: 'white'}}>*</Text>
                </View>
              </View>
              <Image
                style={{width: 60, height: 175, marginTop: 5}}
                source={require('../../assets/BARRA4.png')}
              />
            </View>
            </TouchableOpacity>
            {/* fIM SNEAKERS */}
            {/* INICIO CAMISETAS */}
            <TouchableOpacity>
            <View style={styles.camisetas}>
              <View style={styles.sneakers1}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    CAMISETAS
                  </Text>
                  <Text
                    style={{
                      color: '#f9750c',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginLeft: 10,
                    }}>
                    TOP MARCAS
                  </Text>
                </View>
                <View style={styles.topMarcas}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    ATÉ 40% OFF
                  </Text>
                  <Text style={{color: 'white'}}>*</Text>
                </View>
              </View>
              <Image
                style={{width: 60, height: 175, marginTop: 5}}
                source={require('../../assets/BARRA5.png')}
              />
            </View>
            </TouchableOpacity>
            {/* FIM CAMISETAS */}
            {/* INICIO SHOULDER BAG */}
            <TouchableOpacity>
            <View style={styles.shoulders}>
              <View style={styles.sneakers1}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    SHOULDER BAGS
                  </Text>  
                <View style={styles.topMarcas}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    ATÉ 50% OFF
                  </Text>
                  <Text style={{color: 'white'}}>*</Text>
                </View>
              </View>
              <Image
                style={{width: 60, height: 175, marginTop: 5}}
                source={require('../../assets/BARRA6.png')}
              />
            </View>
            </TouchableOpacity>
            {/* FIM SHOULDER BAG */}
            {/* INICIO JEANS */}
            <TouchableOpacity>
            <View style={styles.jeans}>
              <View style={styles.bermudasText}>
                <Text style={styles.textoBermuda}> JEANS</Text>
                <View style={styles.asteriscoBranco1}>
                  <Text style={styles.textoBermuda}> ATÉ R$ 79</Text>
                  <Text style={styles.asteriscoBranco}>*</Text>
                </View>
              </View>
              <Image
                style={styles.imgBermuda}
                source={require('../../assets/Jeans.jpeg')}
              />
            </View>
            </TouchableOpacity>
            {/* FIM JEANS */}
            {/* VANS */}
            <TouchableOpacity>
            <View style={styles.vans}>
            <Image style={styles.imageVans} source={require('../../assets/BARRA7.png')} />
            </View>
            </TouchableOpacity>
            {/* FIM VANS */}
            {/* BONÉS */}
            <TouchableOpacity>
            <View style={styles.bones}>
              <View style={styles.bermudasText}>
                <Text style={styles.textoBermuda}> BONÉS</Text>
                <Text style={styles.textoBermuda}> NEW ERA</Text>
                <View style={styles.asteriscoBranco1}>
                  <Text style={styles.textoBermuda}> ATÉ 50% OFF</Text>
                  <Text style={styles.asteriscoBranco}>*</Text>
                </View>
              </View>
              <Image
                style={styles.imgBones}
                source={ require('../../assets/Bones.jpeg')}
              />
              <Image />
              <Image
                style={{width: 45, height: 175, marginTop: 5}}
                source={require('../../assets/barra8.jpg')}
              />
            </View>
            </TouchableOpacity>
            {/* FIM BONÉS */}
            {/* CUECAS */}
            <TouchableOpacity>
            <View style={styles.cueca}>
              <View style={styles.bermudasText}>
                <Text style={styles.textoBermuda}> BONÉS</Text>
                <Text style={styles.textoBermuda}> NEW ERA</Text>
                <View style={styles.asteriscoBranco1}>
                  <Text style={styles.textoBermuda}> ATÉ 50% OFF</Text>
                  <Text style={styles.asteriscoBranco}>*</Text>
                </View>
              </View>
              <Image
                style={styles.imgBones}
                source={ require('../../assets/cuecas.jpeg')}
              />
              <Image
                style={{width: 45, height: 175, marginTop: 5}}
                source={require('../../assets/barra9.jpg')}
              />
            </View>
            </TouchableOpacity>
            {/* FIM CUECAS */}
          </SafeAreaView>
        </View>
      </ScrollView>
      <BarraInferior />
    </>
  );
};
