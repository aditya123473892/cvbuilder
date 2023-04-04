import React,{ useState }  from 'react'
import Form from './Form.js'
import { BrowserRouter as Router,
  
  Switch,
  Route,
  Link

} from 'react-router-dom'
import Selector from './Components/Selector.js'




const openform=()=>{
  
 
  <Switch>
  
  <Route path="/Selector" element={<Selector/>}>
  <Selector/>
  </Route>
  </Switch>
  
    
  
  
 
  
}


export default function Button() {
  return (
    <Link to="/Selector" onClick={openform}><div><button type="button " class="btn btn-dark mx-3 " >Create Your Resume</button></div></Link>
    
 
 
    )
}
