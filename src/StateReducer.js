export default (state,action) => {
    const orignalState = state[0]
    switch(action.type){
        case "FETCH-BREEDS":
            state[0] = requestBreedList(action.payload)
            return{
                ...state
            }
        case "FETCH-PETS":
                

    }
}

async function requestBreedList(animal){

    let breed_list = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal.toLowerCase()}`)
    let breedlist_json = await breed_list.json()
    console.log("GOT REPLY ",breedlist_json.breeds)
    return breedlist_json
}