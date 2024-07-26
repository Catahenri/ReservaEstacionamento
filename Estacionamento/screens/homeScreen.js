import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Card from './../compnents/card';
import Farmacia from './../constants/farmacia';
import Shopping from './../constants/shopping';
import Mercado from './../constants/mercado';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Estacionamento from './../compnents/estacionamento';

const Stack = createStackNavigator();

function Principal() {
  return (
    <NavigationContainer independent={true}>
      <View>
        <Text style={{ height: 1 }}>.</Text>
      </View>
      <Stack.Navigator initialRouteComponent={HomeScreen}>
        <Stack.Screen
          name="Bem vindo ao nosso Menu!"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: '#305887', height: 0 },
            headerTintColor: 'black',

            headerTitleStyle: {
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Italianno',
              backgroundColor: 'black',
              height: 5,
            },
          }}
        />      
        <Stack.Screen
          name="Placas"
          component={Placas}
          options={{
            title: 'Estacionamento',
            headerStyle: {
              backgroundColor: '#305887',
              height: 50,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = (props) => {

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <Text style={styles.categoryTitle}> Shoppings</Text>
      <FlatList
        style={styles.categoryWrapper}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        data={Shopping}
        renderItem={(itemShopping) => {
          const item = itemShopping.item;

          return (
            <Card style={styles.card}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Placas')}>
                <Image source={item.image} style={styles.cardImage} />
              </TouchableOpacity>
              <View style={styles.cardInfoWrapper}>
                <Text style={styles.cardText}>{item.title}</Text>
              </View>
            </Card>
          );
        }}
      />
      <Text style={styles.categoryTitle}> Farmacias</Text>
      <FlatList
        style={styles.categoryWrapper}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        data={Farmacia}
        renderItem={(itemFarmacia) => {
          const item = itemFarmacia.item;

          return (
            <Card style={styles.card}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Placas')}>
                <Image source={item.image} style={styles.cardImage} />
              </TouchableOpacity>
              <View style={styles.cardInfoWrapper}>
                <Text style={styles.cardText}>{item.title}</Text>
              </View>
            </Card>
          );
        }}
      /> 

      <Text style={styles.categoryTitle}> Mercados</Text>
      <FlatList
        style={styles.categoryWrapper}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        data={Mercado}
        renderItem={(itemMercado) => {
          const item = itemMercado.item;

          return (
            <Card style={styles.card}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Placas')}>
                <Image source={item.image} style={styles.cardImage} />
              </TouchableOpacity>
              <View style={styles.cardInfoWrapper}>
                <Text style={styles.cardText}>{item.title}</Text>
              </View>
            </Card>
          );
        }}
      />
    </ScrollView>
  );
};
const Placas = (props) => {
  return(
    <Estacionamento/>
  )
}

export default Principal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: '7%',
    marginTop: 0,
    overflow:'hidden' ,
  },
  categoryTitle: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10
  },
  card: {
    width: 140,
    padding: 0,
    paddingBottom: 10,
    marginRight: 15,
    marginBottom: 0,
  },
  cardInfoWrapper: {
    paddingBottom: 10,
    paddingRight: 20,
  },
  cardImage: {
    width: '100%',
    height: 130,
    borderRadius: 15,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 6,
  },
  categoryWrapper: {
    position: 'relative',
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    backgroundColor: 'none',
  },
});
