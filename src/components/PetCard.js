import { Grid } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { FetchDetails } from "./FetchDetails"
import logo from '../images/petshop_logo (1).png'
import PetsIcon from '@mui/icons-material/Pets';
import { LoadingPrompt } from "./LoadingPrompt"

export const PetCard = () => {

    let {id} = useParams()
    let { fetchSinglePet } = FetchDetails()

    let [heroImage,SetHeroImage] = useState(logo)
    let [HeroPet,SetheroPet] = useState()

    let Response = useQuery(["HeroPet",id],fetchSinglePet)
    if(Response.isFetched && !HeroPet){
     SetheroPet(Response?.data?.pets[0] ?? {})
     SetHeroImage(Response?.data?.pets[0]?.images[0] ?? logo)
    }

    if(Response.isFetching){
        return(
           <LoadingPrompt />
        )
    }


    return(
        <div className="petCard">
            <Grid container className="SinglePetContainer">
              <Grid item xs={2}></Grid>
              <Grid item xs={8} className="PetInformation">
                <div className="PetCard-top">
                    <div className="petImage-Box">
                        <img className="selected-pet-image" src={heroImage ?? []} alt="Pet"/>
                    </div>
                    <div className="petImages-cont">
                        {(HeroPet?.images ?? [logo,logo]).map(item => (<img className="nonselectedpet-image" id={heroImage === item ? "heroImage" : 
                    ""} src={item} onClick={()=>SetHeroImage(item)} alt="Pet" key={item}/>))}
                    </div>
                </div>
                <div className="PetCard-btm">
                    <div className="pet-details">
                        {HeroPet?.animal ?? "Animal"}--{HeroPet?.breed ?? "Breed"}--{HeroPet?.city ?? "City"}
                    </div>
                    <div className="adpt-me">Adopt {HeroPet?.name}<button className="btn"><PetsIcon fontSize="medium"/></button></div>
                    <div className="pet-desc">
                        {HeroPet?.description ?? "Description"}
                    </div>
                </div>
              </Grid>
              <Grid item xs={2} ></Grid>
            </Grid>    
            </div>
    )
}