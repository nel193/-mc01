import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Image, StyleSheet} from 'react-native'
import Home from '../screens/Home'
import AccountNavigation from './AccountNavigation'
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Favorites' 
        component={FavoriteNavigation} 
        options={{
          tabBarLabel:'Favoritos',
          tabBarIcon: ({color, size}) => {
            return(
              <Icon name='heart' color={color} size={size} />
            )
          }
      }}/>
      <Tab.Screen 
      name='Pokedex' 
      component={PokedexNavigation} 
      options={{
        tabBarLabel:'',
        tabBarIcon: () => pokeballImg()
      }} />
      <Tab.Screen 
        name='Account' 
        component={AccountNavigation} 
        options={{
          tabBarLabel:'Cuenta',
          tabBarIcon: ({color, size}) => {
            return(
              <Icon name='user' color={color} size={size} />
            )
        }
      }}
      />
      {/* <Tab.Screen name='Wishlist' component={Wishlist} />
      <Tab.Screen name='Favorites' component={Favorites} /> */}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  pokeIcon:{
    width:50,
    height:50,
    top:-15
  }
})

function pokeballImg(){
  return(
    <Image
      source={require('../../assets/pokeball.jpg')}
      style={styles.pokeIcon}
    />
  )
}