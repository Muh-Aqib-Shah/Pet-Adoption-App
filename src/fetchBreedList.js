import { useEffect, useState } from "react"

export const useBreedList = (animal) => {
    let localCache ={}

    let [loading,SetLoading] = useState(false)
    let [breed,SetBreed] = useState({})
    useEffect(()=>{
    if(!animal){
        SetBreed([])
    }
    else if(localCache[animal]){
        SetBreed(localCache[animal])
    }
    else{
        requestBreedList()
    }
    
    async function requestBreedList(){
        SetLoading(true)
        SetBreed([])
        let breed_list = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`)
        let breedlist_json = await breed_list.json()
        localCache[animal] = breedlist_json.breeds
        SetBreed(localCache[animal])
        SetLoading(false)
    }

    return [breed,loading];
},[animal])}
