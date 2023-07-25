import { AppBar, Box, Grid, IconButton, Paper, Toolbar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { SearchForm } from "./SearchForm";
import { useEffect, useReducer, useState } from "react";
import { Pets } from "@mui/icons-material";
import FilterReducer from './StateReducer';

export const Home = () => {

   
   let [pets,SetPets] = useState()
   let state_copy = [pets,pets]
    let [state,dispatch] = useReducer(FilterReducer,state_copy)

    useEffect(()=>{
        requestAnimals()
    },[])
    
    async function requestAnimals(){
        let pets_list = await fetch(`https://pets-v2.dev-apis.com/pets`)
        let pets_list_json = await pets_list.json()
        console.log("SAT=>",pets_list_json.pets)
        SetPets(pets_list_json.pets)
    }

    function StartAnimation(){
        let SearchBox = document.getElementById("srch-box")
        SearchBox.style.animationPlayState = "running"   
    }

    return(
        
        <div className="home">
        <AppBar className="bar"><Toolbar><IconButton><HomeIcon fontSize="large" /></IconButton>Pet Shop</Toolbar></AppBar>
        <Box className="Search">
            <button className="srch-button" onClick={StartAnimation}><SearchIcon />Search
            </button>
            
        </Box>
        <SearchForm state={state}/>
        <hr />
        <Box className="container">
        <Grid container className="grid-cont" spacing={4}>
            {pets?.map(item =>
                <Grid item xs = {3}>
                    <Paper className="PetBox">
                    <Box className="img-box">
                        <img src={item.images[0]} className="img" />
                    </Box>
                    <Box className="desc-box">
                        <Box className="pet-name">{item.name}</Box>
                        <Box className="pet-type">{item.animal}--{item.breed}--{item.state},{item.city}</Box>
                        <button className="adopt-btn">Adopt Me!</button>
                    </Box>
                    </Paper>
                </Grid>
            )}
           
        </Grid>
        </Box>
        </div>
    )
}



// animation: DrawIn 1s linear 2s;
//animation-fill-mode: forwards;