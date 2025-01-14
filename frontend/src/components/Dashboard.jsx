import React, { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    const [inputs , setInputs] = useState([]);
    const navigate = useNavigate();
    const addTodo = () =>{
        navigate('/add')
    }

    const deleteTodo =(id) =>{
        const newArray = axios.delete(`http://localhost:5000/delete/${id}`)
  setInputs(newArray);
  };
    
    

    
   
    const fetchProducts = async () => {
            const { data } = await axios.get("http://localhost:5000/list");
            const inputs = data;
            setInputs(inputs);
            console.log(inputs);
          };
          useEffect(() => {
              fetchProducts();
              
             }, []);
  
    return (
      
       <>
 {inputs.map((input) => (<>
<Card sx={{ minWidth: 275 }}  key = {input._id}>
 
      <CardContent>
    
        <Typography variant="body2">
          {input.description}
          <br />
          
        </Typography>
        <Typography>{input.status}</Typography>
      </CardContent>
      <CardActions>
        
        <Button onClick={()=>{addTodo()}} >add</Button>
        <Button onClick={()=>{deleteTodo(input._id)}} >delete</Button>
      </CardActions>
    
    </Card>
    <br />
    </>
    
    ))}
       
    </>
      
    )
  }
  
  export default  Dashboard





