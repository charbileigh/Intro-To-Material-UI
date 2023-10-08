import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';



function App() {
  return <div>
    <Button variant="contained" color='secondary' size='large' onClick={() => alert("It works!")}>Contained Button</Button>
    <br />
    <Button variant="text">Text Button</Button>
    <br />
    <Button variant="outlined">Outlined Button</Button>
    <br />

    <IconButton color="success" aria-label="add to shopping cart">
    <AddShoppingCartIcon />
    </IconButton>
    <br />

    <IconButton aria-label="fingerprint" color="secondary">
    <Fingerprint />
    </IconButton>
    <br />


  </div>;
}

export default App;
