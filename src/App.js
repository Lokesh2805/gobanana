import {Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import MaterialTable from 'material-table';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';


const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
     
          backgroundColor: '#eaeff1',
        },
      },
    },
  },
});




function App() {
  const [data, setData] = useState();

  const coloums = [
    {id:'id', name:'Id'},
    {id:'name', name:'Name'},
    {id:'phone', name:'Phone No.'},
    {id:'email', name:'Email'},
    { id: 'address', name: 'Address' }, 
  ]

const fetchdata = async() =>{
  try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data =await response.json()
      setData(data);
     
     

  }catch(e){
      console.error("Error", e);
  }
}

  useEffect(()=>{
    fetchdata();
  },[])
 
  return (
    <ThemeProvider theme={theme}>

  
    
   {/*<div style={{textAlign: 'center'}}>
      <h1 style={{margin:'50px'}}>JSONPlaceholder Data</h1>
      <Paper sx={{width: '90%', margin:"auto"}}>
      <TableContainer>
        <Table >
          <TableHead>
            <TableRow>
         
            {
              coloums.map((coloum)=>(
                <TableCell style={{fontWeight:'bold', textAlign:'center', height:'45px', background:'black', color:'white', fontSize:'18px'}} key={coloum.id}>{coloum.name}</TableCell>
              ))
            }
             
            </TableRow>
          </TableHead>
          <TableBody>
          {
            data && data.map((row, rowIndex)=>{
             return (
              <TableRow key={rowIndex}  sx={{
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
              >
           
              {
                coloums && coloums.map((coloum, colIndex)=>{
                  let value;
                  if (coloum.id === 'address') {
                    value = `${row.address.street}, ${row.address.suite}, ${row.address.city}, ${row.address.zipcode}`;
                  } else {
                    value = row[coloum.id];
                  }
                  return(
                    <TableCell key={colIndex} style={{textAlign:'center', height:'35px'}}>
                    {value}</TableCell>
                  )
                })
              }
              
              </TableRow>
            )
            })
          }
          
          </TableBody>
        </Table>
      
      </TableContainer>
      
      </Paper>
     
    </div>*/}
    </ThemeProvider>
  
  );
}

export default App;
