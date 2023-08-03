export const FetchDetails = () => {
const fetchBreeds = async ( {queryKey} ) => {
    
    const animal = queryKey[1]

    if(!animal)
     return { breeds: [] }
 
    let apiResponse = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal.toLowerCase()}`)
    
    return apiResponse.json() 
} 

const fetchFilteredPets = async ( { queryKey } ) => {
    
    let {location,animal,breed} = queryKey[1]
    
    const FilteredPetsEndoint = `https://pets-v2.dev-apis.com/pets?\
${ !location ? "" : "&location=" + location + "&" }\
${ !animal ? "" : "animal="+ animal.toLowerCase() + "&" }\
${ !breed ? "" : "&breed="+ breed }`
    
    let apiResponse = await fetch(FilteredPetsEndoint)
    
    return apiResponse.json()
}
const fetchSinglePet = async ( { queryKey } ) => {
   let id = queryKey[1]

   let apiResponse = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`)
   
   return apiResponse.json()
}
 return {fetchBreeds,fetchFilteredPets,fetchSinglePet}
}