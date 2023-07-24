import { AppBar, Box, Grid, IconButton, Paper, Toolbar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { SearchForm } from "./SearchForm";

export const Home = () => {
   
    let myArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]
    
    function HandleClick(){
        let mn = document.getElementById("srch-box")
        mn.style.animationPlayState = "running"
        
    }
    return(
        
        <div className="home">
        <AppBar className="bar"><Toolbar><IconButton><HomeIcon fontSize="large" /></IconButton>Pet Shop</Toolbar></AppBar>
        <Box className="Search">
            <button className="srch-button" onClick={HandleClick}><SearchIcon />Search
            <SearchForm />
            </button>
        </Box>
        <hr />
        <Box className="container">
        <Grid container className="grid-cont" spacing={4}>
            {myArr.map(item =>
                <Grid item xs = {3}>
                    <Paper className="PetBox">
                    <Box className="img-box">
                        <Box className="img"></Box>
                    </Box>
                    <Box className="desc-box">
                        <Box className="pet-name">Luna</Box>
                        <Box className="pet-type">Dog--Labrador--WA,Seattle</Box>
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