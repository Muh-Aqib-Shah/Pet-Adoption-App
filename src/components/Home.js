import {  Box, Grid, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { SearchForm } from "./SearchForm";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../images/petshop_logo (1).png' 
import useWebAnimations from "@wellyshen/use-web-animations";
import { slideInRight } from "@wellyshen/use-web-animations";
import {FetchDetails} from './FetchDetails'
import { useQuery } from "@tanstack/react-query";
import { LoadingPrompt } from "./LoadingPrompt";


export const Home = () =>
 { 
   
   let [pets,SetPets] = useState({status:"not-loaded",pets: []})
   let [filteredstate,setFilteredState] = useState({state: true,location:"",animal:"",breed:""})
   let {fetchFilteredPets} = FetchDetails()
   let navigate = useNavigate()
   
   let { ref:DrawerAnimation,animate } = useWebAnimations()   

    let filteredResponse = useQuery(["filtered-pets",{...filteredstate}],fetchFilteredPets,{enabled: filteredstate.state})

    if(filteredResponse.isFetched && filteredstate.state){
      SetPets({status: "loaded",...filteredResponse.data})
      setFilteredState({state: false})
    }

   if(pets.status === "not-loaded" && filteredResponse.isFetching){
    return(
        <LoadingPrompt />
    )
   }

   if(pets.status === "loaded" && pets.pets.length === 0){
    navigate("/errpage")
   }
    return(
        
        <div className="home">
        <Box className="Search">
            <button className="srch-button" onClick={()=> animate({...slideInRight})}><SearchIcon />Search
            </button>
        <SearchForm components = {{DrawerAnimation,animate,setFilteredState}}/>
        </Box>
        <hr />
        <Box className="container">
        <Grid container className="grid-cont" spacing={4}>
            {(pets?.pets ?? []).map(item =>
                <Grid item xs = {3} key={item?.name}>
                    <Link to={`details/${item?.id}`} className="link-tab" >
                    <Paper className="PetBox">
                    <Box className="img-box">
                        <img src={(item?.images[0] ?? logo)} className="img" alt="Pet"/>
                    </Box>
                    <Box className="desc-box">
                        <Box className="pet-name">{item?.name}</Box>
                        <Box className="pet-type">{item?.animal}--{item?.breed}--{item?.state},{item?.city}</Box>
                        <button className="adopt-btn">Adopt Me!</button>
                    </Box>
                    
                    </Paper>
                    </Link>
                </Grid>
                
            )}
           
        </Grid>
        </Box>
        </div>
    )
}