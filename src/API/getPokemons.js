import {API_HOST} from '../utils/constants'

// export  function getPokemons(){
//     try {
//         let limit = 20
//         let offset = 0
//         const url = `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     } catch (error) {
//        throw error 
//     }
// }

// export async function getPokemonDetails(url){
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     } catch (error) {
//         throw error
//     }
// }

let limit = 20
let offset = 0
const url = `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`
export const getPokemons = () => {
    return new Promise((resolve, reject) => {
        resolve(
            fetch(url)
                .then((results)=> results.json())
                .catch(error => console.log(error))
            )
    })
}

export const getPokemonDetails = (individualUrl) => new Promise((resolve, reject) => {
    resolve(
          fetch(individualUrl)
          .then((results)=> results.json())
        //   .then((data)=> {

        //   })
          .catch((error)=> console.log(error))
   )
})
