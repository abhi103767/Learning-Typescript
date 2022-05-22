import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import  Typography from '@mui/material/Typography'
import  TextField  from '@mui/material/TextField'
import Box from '@mui/material/Box'
import  Button  from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import axios, {AxiosResponse} from 'axios'
import List from './List'

type FormData = {
    id : string,
    model : string,
    makeyear: string,
    operatingsystem: string,
    screenheight: string,
    screenwidth : string,
     price : string


}



function Computer() {

    const [formData,setFormData] = useState<FormData>({
    'id' : nanoid(),
    'model' : '', 
   'makeyear': '',
'operatingsystem' : '',
'screenheight': '',
'screenwidth' : '',
'price' : ''
    });




    const [list,setList] = useState<FormData[]>([])

    useEffect(() => {
        getData()
    })

   console.log(formData)
    function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void{
      setFormData((perv) => {
       return {
           ...perv,
           [e.target.name] : e.target.value
       }   
      });
    
    }
    function handleClick(e:React.MouseEvent<HTMLButtonElement>){
  axios.post('http://localhost:8080/computers', formData).then(
               (res) => {
                   console.log(res.data)
               }
           )
        //    console.log(list)
        }


    function sortedByID(e:any) {
      console.log(e.target.value);
      const by: keyof FormData = e.target.value;
     
      setList((perv) => {
        return [...perv.sort((a,b) => a[by] > b[by] ? 1 : -1)]
      })

      
    }

        function getData(){
            axios.get('http://localhost:8080/computers')
            .then( (response : AxiosResponse<FormData[]>) => {
                const   {data}  = response;
              
               setList([...data]);
                 }); 
        }
      

  return (
    <div>
        <Box width={'50%'} p={10} border="1px solid black" 
        margin={'auto'} my={4} >
        <Box  p={2} > 
        <TextField 
        type={'text'}
        variant='outlined'
         size='small'
         name='model' 
          placeholder='Enter the modal Number'
          value={formData.model}
          onChange={  (e) => {
              handleChange(e);
          }}/>
          
          </Box> 
          
        
        <Box p={2}>
        <TextField
        type={'number'} 
        name='makeyear' 
        variant='outlined'
         size='small'
          placeholder='Enter the manufacturing year'
          value={formData.makeyear}
          onChange={  (e) => {
            handleChange(e);
        }}/>
          </Box>
          <Box >
          <TextField
          type = 'text'
        variant='outlined'
         size='small'
          placeholder='Enter the operating system '
          name = 'operatingsystem'
          value={formData.operatingsystem}
          onChange={  (e) => {
            handleChange(e);
        }}/>
          </Box>
          <Box p={2}>
          <TextField 
          type={'number'}
        variant='outlined'
         size='small'
          placeholder='Enter the screenheight'
          name = 'screenheight'
          value={formData.screenheight}
          onChange={  (e) => {
            handleChange(e);
        }}/>
          </Box>
          <Box p={2}>
          <TextField 
          type={'number'}
        variant='outlined'
         size='small'
         name='screenwidth'
          placeholder='Enter the screenwidth'
          value={formData.screenwidth}
          onChange={  (e) => {
            handleChange(e);
        }}/>
          </Box>
          <Box p={2}>
          <TextField 
          type={'number'}
        variant='outlined'
         size='small'
          placeholder='Enter the Price'
          value={formData.price}
          name='price'
          onChange={  (e) => {
            handleChange(e);
        }}/>
          </Box>
          <Button  
           variant='outlined' onClick={handleClick}>Save Data</Button>
      </Box>

      <div>
          <List formData={list} />
      </div>
     <Box>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    onChange={ (e) => {
      sortedByID(e);
    }}

  >
    <MenuItem value={'id'}> ID</MenuItem>
    <MenuItem value={'model'}> Model</MenuItem>
    <MenuItem value={'makeyear'}> By Year</MenuItem>
    <MenuItem value={'operatingsystem'}> Operating System</MenuItem>
    <MenuItem value={'screenheight'}> Screen Height</MenuItem>
    <MenuItem value={'screenwidth'}> Screen Width</MenuItem>
    <MenuItem value={'price'}> By Price</MenuItem>
  </Select>
     </Box>
          
    </div>
  )
}

export default Computer