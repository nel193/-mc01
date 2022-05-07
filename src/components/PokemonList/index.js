import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CardPokemon from '../CardPokemon'
export default function PokemonList(props) {
  // console.log(props.data.length)
  return (
      <FlatList
        data={props.data}
        keyExtractor={ elm => elm.id.toString()}
        renderItem={({item}) => <CardPokemon info={{item}} />}
      />
  )
}