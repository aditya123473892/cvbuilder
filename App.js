import React,{Component} from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Form from './Form.js'
import Home from './Components/Home'
import Contact from './Components/Contact'

import { BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'
import Selector from './Components/Selector'
import Template from './Components/Template'
import Template2 from './Components/Template2'




export default function () {
  return (
  
    
    
      
  
     <div>
    
    
     < Navbar/>
     
     <Switch>
  
     <Route path='/Template'>
        <Template/>
       </Route>
      
       <Route path='/Template2'>
        <Template2/>
       </Route>
     
       
        <Route path='/Selector'>
        <Selector/>
       </Route>
       <Route path="/Form" >
        <Form/>
        </Route>
      
       
        <Route path='/Contact'>
        <Contact/>
       </Route>

       <Route path='/'>
        <Home/>
       </Route>
       
      

     
     
     
      
     </Switch>
    
     </div>
     
     
       
  )
}

