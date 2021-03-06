import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import Heading from './components/Heading';
import Status from './components/Status';
import Button from './components/Button';
import Container from './components/Container';


const personName = [{
  first : 'Avinash',
  last : 'sharma'
},
{first: 'Abhishek',
last : 'kansana'},
{first: 'Abhishek',
last : 'kansana'},
{first: 'Abhishek',
last : 'kansana'}]

function App() {
 
  return (
    
    <div className="App">
      <Greet name= {'Avinash'} />
      <Person  name= {  personName  } />
      <Status status='success' />
      <Heading>Please submit the forms</Heading>
      <Button handleClick = { (event,id) => {
        console.log(event.target,"hii",id);
      }} />
      <Container styles={{border: 0, display: '' }} />
  
    </div>

    
  );
}

export default App;
