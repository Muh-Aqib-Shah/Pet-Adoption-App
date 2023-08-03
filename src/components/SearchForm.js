import { useState } from 'react';
import Logo2 from '../images/petshop_logo (2).png';
import { useQuery } from '@tanstack/react-query';
import { FetchDetails } from './FetchDetails';
import { slideOutRight } from '@wellyshen/use-web-animations';

const ANIMALS = ['Bird','Cat','Dog','Rabbit','Reptile']

export const SearchForm = (options) => {

    let {DrawerAnimation,animate,setFilteredState} = options.components
        
    let { fetchBreeds } = FetchDetails();
    let [animal,SetAnimal] = useState()
    let { breeds } = UseBreeds(animal) 

    function UseBreeds(value){

        let response = useQuery(["breeds",value],fetchBreeds)
         if(response.isLoading){
        
           return { breeds : [] }
        }
        return {...response.data}
        }
        
    return(
    <div className="srch-container" id="srch-box" ref={DrawerAnimation}>
        <div className="form-container">
            <div className='message-block'>
           <img className="srch-logo" src={Logo2} alt="logo"/>
           <div className="srch-msg">Search for Pets 
           <br />
           in Your Local Area</div>
           </div>
           <hr /> 
            <form onSubmit={(e)=>{
                e.preventDefault()
                let ObjectData = new FormData(e.target)
                const formData={
                    animal: ObjectData.get("Animal") ?? "",
                    breed:  ObjectData.get("Breed") ?? "",
                    location: ObjectData.get("Location") ?? ""
                }
                animate({...slideOutRight})
                setFilteredState({state: true,...formData})
            }}>
                <div className="loct-box">
                <label>Location
                    <br />
                <input type="select" name='Location'></input></label>
                </div>
                <div className="animal-box">
                <label>Animal
                    <br />
                    <select name='Animal' value={animal} id="animal" placeholder='Animal' onChange={e => {
                        if(e.target.value){
                        breeds = []
                        SetAnimal(e.target.value)  
                    }
                    }}>
                        <option />
                        {ANIMALS.map(item => (<option key={item}>{item}</option>))}
                    </select>
                </label>
                </div>
                <div className="breed-box">
                <label>Breed
                    <br />
                    <select name="Breed" disabled={breeds.length === 0} >
                        {breeds.map(item => (<option key={item}>{item}</option>))}
                    </select>
                </label>
                </div>
                <div className='submit-btn'>
                    <input className='sub-btn' type='submit' value="Go!"/>
                </div>
            </form>
        </div>
    </div>
    )
}