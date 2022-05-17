import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import  Typography from '@mui/material/Typography'
import  TextField  from '@mui/material/TextField'
import Box from '@mui/material/Box'
import  Button  from '@mui/material/Button'

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
    'id' : nanoid(),
    'model' : '', 
   'makeyear': null,
'operatingsystem' : '',
'screenheight': null,
'screenwidth' : null,
'price' : null
    });


    const [list,setList] = useState([])


    function handleChange(e:React.ChangeEvent){
        console.log(e.target.nodeValue)
    //     setFormData((perv) => {
    //   return {
    //       [e.target.name]
    //   }
    //     })
    }

  return (
    <div>
        <Box my={6} >
        <Box p={2}> 
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
        text={} 
        name='makeyear' 
        variant='outlined'
         size='small'
          placeholder='Enter the manufacturing year'
          value={formData.makeyear}
          onChange={  (e) => {
            handleChange(e);
        }}/>
          </Box>
          <Box>
          <TextField 
        variant='outlined'
         size='small'
          placeholder='Enter the modal Number'
          name = 'operatingsystem'
          value={formData.operatingsystem}
          onChange={  (e) => {
            handleChange(e);
        }}/>
          </Box>
          <Box p={2}>
          <TextField 
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
        variant='outlined'
         size='small'
          placeholder='Enter the Price'
          value={formData.price}
          name='price'
          onChange={  (e) => {
            handleChange(e);
        }}/>
          </Box>
          <Button variant='outlined'>Save Data</Button>
      </Box>
          
    </div>
  )
}

export default Computer