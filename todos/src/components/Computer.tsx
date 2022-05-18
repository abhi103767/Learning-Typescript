import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import  Typography from '@mui/material/Typography'
import  TextField  from '@mui/material/TextField'
import Box from '@mui/material/Box'
import  Button  from '@mui/material/Button'
import axios, {AxiosResponse} from 'axios'
import List from './List'

type FormData = {
    id : string,
    model : string,
    makeyear: number | null,
    operatingsystem: string,
    screenheight: number | null,
    screenwidth : number| null,
     price : number | null


}



function Computer() {

    const [formData,setFormData] = useState<FormData>({
    'id' : '',
    'model' : '', 
   'makeyear': null,
'operatingsystem' : '',
'screenheight': null,
'screenwidth' : null,
'price' : null
    });




    const [list,setList] = useState<FormData[]>([])

    useEffect(() => {
        getData()
    },[])

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
  axios.post('http://localhost:8080/computers', {...formData, id : nanoid()}).then(
               (res) => {
                   console.log(res.data)
                   getData();

               }
           )
        //    console.log(list)
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
          
    </div>
  )
}

export default Computer