import { useEffect, useState } from "react"

export const useBreedList = (animal) => {

    console.log("GOT ANIMAL:",animal)
    let [loading,SetLoading] = useState(false)
    let [breed,SetBreed] = useState()
    useEffect(()=>{
    if(!animal){
        console.log("IF EXE")
        SetBreed([])
    }
    else{
        console.log("NEW ENVIRONMENT")
        requestBreedList()
    }
    
    

    return [breed,loading];
},[animal])}
