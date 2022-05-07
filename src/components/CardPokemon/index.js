import { View, Text } from 'react-native'
import React from 'react'

export default function CardPokemon(props) {
  console.log('Hola')
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}