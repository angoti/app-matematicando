import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as Font from 'expo-font';
import TabNavigator from './TabNavigator';
import JogosScreen from '../screens/JogosScreen';
import VideoScreen from '../screens/VideoScreen';
import LogoTitle from '../components/LogoTitle';
import {
  Text,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainContext } from '../context/MainContext';
import { useContext } from 'react';
import TermsScreen from '../screens/TermsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import { getNivelAprendizado } from '../api/dados';
import { deleteDatabase } from '../api/bancoDeDados';

const Drawer = createDrawerNavigator();

const iconColor = '#64B5F6';
const iconSize = 24;

export default function DrawerNavigator() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { state, authContext } = useContext(MainContext);
  const { signOut } = authContext;

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ChalkboardSE-Regular': require('../../assets/fonts/ChalkboardSE-Light.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  function calcularNivelAprendizado() {
    return getNivelAprendizado(0);
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Ajuda"
          onPress={() => Alert.alert('Link para Ajuda')}
          icon={() => (
            <Icon name="help-circle" size={iconSize} color={iconColor} />
          )}
        />
        <DrawerItem
          label="Configurações"
          onPress={() => Alert.alert('Link para Configurações')}
          icon={() => <Icon name="cog" size={iconSize} color={iconColor} />}
        />
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            padding: 8,
            backgroundColor: '#01579B',
          }}>
          <Image
            source={{ uri: state.user.photo }}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              borderRadius: 10,
              flex: 1,
              marginRight: 8,
            }}
          />
          <View
            style={{
              justifyContent: 'space-evenly',
              flexShrink: 1,
              flex: 2,
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
              {state.user.name}
            </Text>
            <Text style={{ color: 'white', fontSize: 10 }}>
              {state.user.email}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'white',
                textAlign: 'center',
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
              }}>
              {calcularNivelAprendizado().nivel}
              {'\n'}
              {calcularNivelAprendizado().descricao}
            </Text>
          </View>
        </View>
        <Button
          title="Sair"
          onPress={async () => {
            try {
              await signOut();
            } catch (e) {
              Alert.alert('Erro', e.message);
            }
          }}
        />
        {/* <Button
          title="Apagar BD"
          onPress={async () => {
            try {
              await deleteDatabase();
            } catch (e) {
              Alert.alert('Erro', e.message);
            }
          }}
        /> */}
      </DrawerContentScrollView>
    );
  }

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: { backgroundColor: '#396934' },
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Text
            style={{
              fontSize: 28,
              fontWeight: '600',
              color: 'white',
              paddingRight: 16,
              fontFamily: 'ChalkboardSE-Regular',
            }}>
            Matematicando
          </Text>
        ),
        headerRight: () => <LogoTitle />,
      }}>
      <Drawer.Screen
        name="Inicio"
        component={TabNavigator}
        options={{
          drawerIcon: () => (
            <Icon name="home" size={iconSize} color={iconColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Jogos"
        component={JogosScreen}
        options={{
          drawerIcon: () => (
            <Icon name="gamepad-variant" size={iconSize} color={iconColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Video aulas"
        component={VideoScreen}
        options={{
          drawerIcon: () => (
            <Icon name="video" size={iconSize} color={iconColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Termos de Uso"
        component={TermsScreen}
        options={{
          drawerIcon: () => (
            <Icon name="text-box-check" size={iconSize} color={iconColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Política de Privacidade"
        component={PrivacyPolicyScreen}
        options={{
          drawerIcon: () => (
            <Icon name="security" size={iconSize} color={iconColor} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
