import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {Component} from 'react'
import { getPokemons, getPokemonDetails } from '../../API/getPokemons'
import {API_HOST} from '../../utils/constants'
import PokemonList from '../../components/PokemonList'


export class Pokedex extends Component{
  constructor(){
    super()
    this.state ={
      pokemonsList:[],
      pokemonsDetailedsList:[],
      load:false
    }
  }
  

  // console.log(pokemons)
  componentDidMount(){
    let limit = 20
    let offset = 0
    const url = `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`
    fetch(url)
    .then( (results) => results.json() )
    .then( (data) => {
      let arrPokemons = []
      this.setState(
      {pokemonsList: data},
      () => {
        this.state.pokemonsList.results.map(elm => {
          fetch(elm.url)
            .then(result => result.json())
            .then(data => arrPokemons.push({
              data: data.id,
              name: data.name,
              type: data.types[0].type.name,
              order:data.order,
              img: data.sprites.other['official-artwork'].front_default
          }))
        })      
      })
      return(arrPokemons)
    })
    .then( results => this.setState({
      pokemonsDetailedsList:results, load:true
    }, ()=> console.log(this.state.pokemonsDetailedsList.length) ) )
    .catch((error) => console.error(error))

  }



  render(){
    return (
      <SafeAreaView>
        <Text>{
        this.state.load ?
        'hola' :
        ''
        }</Text>
        <PokemonList data={this.state.pokemonsDetailedsList} />
      </SafeAreaView>
    )
  }
}