import React, { useState, useEffect } from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { View, ImageBackground, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import RNPickerSelect from 'react-native-picker-select'

interface IBGEUFResponse {
  sigla: string
}

interface IBGECityResponse {
  nome: string
}


const Home = () => {

  const navigation = useNavigation()
  const [uf, setUf] = useState<string[]>([])
  const [city, setCity] = useState<string[]>([])

  const [selectedUF, setSelectedUf] = useState('0')
  const [selectedCity, setSelectedCity] = useState('0')

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf: selectedUF,
      city: selectedCity,
    })
  }
  useEffect(() => { // puxando api do ibge para ufs
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then(response => {
      const ufInitials = response.data.map(selectedUF => selectedUF.sigla)

      setUf(ufInitials)
    })
  }, [])

  useEffect(() => { //carregar cidades sempre que a uf mudar
    if (selectedUF === '0') {
      return
    }

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`).then(response => {
      const cityNames = response.data.map(selectedCity => selectedCity.nome)

      setCity(cityNames)
    })

  }, [selectedUF])

  const placeholder1 = {
    label: 'Selecione o estado',
    value: null,
    color: '#9EA0A4',
  };
  const placeholder2 = {
    label: 'Selecione a cidade',
    value: null,
    color: '#9EA0A4',
  };


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={{ width: 274, height: 300 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
          </View>
        </View>

        <View style={styles.footer}>

          <RNPickerSelect
            onValueChange={(value) => setSelectedUf(value)}
            value={selectedUF}
            style={pickerSelectStyles}
            placeholder={placeholder1}
            items={uf.map(uf => {
              return { label: uf, value: uf }
            })}
            useNativeAndroidPickerStyle={false}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedCity(value)}
            value={selectedCity}
            style={pickerSelectStyles}
            placeholder={placeholder2}
            items={city.map(city => {
              return { label: city, value: city }
              console.log(city)
            })}
            useNativeAndroidPickerStyle={false}
          />
            


          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#fff" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Entrar
                      </Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},



  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    fontSize: 16,
    backgroundColor: '#FFF',
    paddingVertical: 12,
    marginBottom: 8,
    paddingHorizontal: 24,
    borderRadius: 10,
    color: '#6C6C80',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: '#FFF',
    height: 60,
    fontSize: 16,
    paddingVertical: 12,
    marginBottom: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    color: '#6C6C80',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Home