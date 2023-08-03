import './App.css';
import { Home } from './components/Home';
import { AppBar, Toolbar } from "@mui/material";
import logo1 from "./images/petshop_logo (1).png"
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { PetCard } from './components/PetCard';
import { BrowserRouter,Route,Routes, Link } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';

const queryclient = new QueryClient({
  defaultOptions: {
    queries:{
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})
function App() {
  return (
    <>
    
    <BrowserRouter>
    <AppBar className="bar" sx={{backgroundImage:"linear-gradient(firebrick,indianred)"}}>
            <Toolbar>
            <Link to='/' className='logo-ctnr'>   
              <img className="logo-btn" src={logo1} alt='logo'/>
              </Link>Pet Shop</Toolbar>
        </AppBar>
    <QueryClientProvider client={queryclient}>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details/:id' element={<PetCard />}/>
        <Route path='*' element={<ErrorPage/>}/>
       </Routes>
    </QueryClientProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
