import React from 'react'
type FormProp = {
  formData : {
    id : string,
  model : string,
  makeyear: string,
  operatingsystem: string,
  screenheight: string,
  screenwidth : string,
   price : string

  }[]
  


}


function List(props : FormProp) {
  const {formData} = props  
  return (
    <div>
     <table style={{border: '1px solid black',margin: 'auto'}}>
       <tbody>
  <tr>
    <th>ID</th>
    <th>MODEL</th>
    <th>MANUFACTURING YEAR</th>
    <th>OPERATING SYSTEM</th>
    <th>SCREENHEIGHT</th>
    <th>SCREENWIDTH</th>
    <th>PRICE</th>
  </tr>

   {
     formData.map((item) => {
       return <tr>
       <td>{item.id} </td>
       <td>{item.model} </td>
       <td>{item.makeyear} </td>
       <td>{item.operatingsystem} </td>
       <td>{item.screenheight}</td>
       <td>{item.screenwidth}</td>
       <td>{item.price}</td>
       </tr>
     })
   }

  
 
  </tbody>

 
 

</table>
    </div>
  )
}

export default List