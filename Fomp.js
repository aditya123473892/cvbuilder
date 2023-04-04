import React from 'react'
import { useState } from 'react'

import  { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

export default function Form() {
  const divRef = useRef(null);
   

    const handleDownload = () => {
   
        html2canvas(divRef.current).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf");
        });}
  const [text,setText]=useState('');
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const [para,setPara]=useState('');
  const handeleOnChange = (event) => {
    console.log("On Change");
    setPara(event.target.value);
  }
  const [mail,setMail]=useState('');
  const handeleeOnChange = (event) => {
    console.log("On Change");
    setMail(event.target.value);
  }
  const [obj,setObj]=useState('');
  const handeleeeOnChange = (event) => {
    console.log("On Change");
    setObj(event.target.value);
  }
  const [skill,setSkill]=useState('');
  const handeleeeeOnChange = (event) => {
    console.log("On Change");
    setSkill(event.target.value);
  }
  const [skill2,setSkill2]=useState('');
  const handeleeeeeOnChange = (event) => {
    console.log("On Change");
    setSkill2(event.target.value);

  }
   const [work,setWork]=useState('');
  const handelOnChange = (event) => {
    console.log("On Change");
    setWork(event.target.value);
    
  }
   const [about,setAbout ]=useState('');
  const handellOnChange = (event) => {
    console.log("On Change");
    setAbout(event.target.value);
    
  }
  const [summ,setSumm ]=useState('');
  const handelllOnChange = (event) => {
    console.log("On Change");
    setSumm(event.target.value);
    
  }
  
  return (
    <div>
    
      
    <div class="container" id="cv-form">

        <h1 class="text-center">RESUME GENERATER</h1>

        <div class="row">
            <div class="col-md-6">
                <h3>personal information </h3>

                <div class="form-group 1">
                     <br></br> <label for="namefeild " >YOUR NAME   :</label>
                     <input onChange={handleOnChange} value={text} type="text" id="namefeild" placeholder="ENTER NAME" class="form control" size="40"/>
                </div>


                <div class="form-group2">
                     <br></br>  <label  for="numberfeild" >Designation:</label>
                     <input onChange={handeleOnChange} value={para} type="para"  id="numberfeild" placeholder="Eg. Engineer" class="form control" size="40"/>
                </div>

                <p class="form-group4"> Skills</p>

                <div class="form-group4">
                     <br></br> <label for="instafeild">Skill 1</label>
                     <input  onChange={handeleeeeOnChange} value={skill} type="text" id="instafeild" placeholder="ENTER HERE" class="form control" size="40"/>
                </div>

                <div class="form-group3">
                     <br></br> <label for="facebookfeild">Skill 2</label>
                     <input onChange={handeleeeeeOnChange} value={skill2} type="text" id="facebookfeild" placeholder="ENTER HERE" class="form control" size="40"/>
                </div>
                <div class="form-group3 " id="me">
                     <br></br> <label for="adressfeild">Professional Summary</label>
                     <br></br><textarea onChange={handelllOnChange} value={summ} placeholder="ENTER HERE" class="form control meFeild" cols="40" rows="3"></textarea>
                    <div class=" container text-center mt-2" id="aqaddbutton"></div>
                    
                </div>

               

            </div>
            <div class="col-md-6">
                <h3> proffesional information</h3>

                <div class="form-group3" id="we">
                     <br></br> <label for="">Objective</label>
                     <br></br><textarea  placeholder="ENTER HERE" onChange={handeleeeOnChange} value={obj} class="form control weFeild " cols="40" rows="3"></textarea>
                  
                     


                </div>
                <div class="form-group3" id="we">
                     <br></br> <label for="">WORK EXPERIENCE</label>
                     <br></br><textarea onChange={handelOnChange} value={work} placeholder="ENTER HERE" class="form control weFeild " cols="40" rows="4"></textarea>
                    
                </div>
                <div class="form-group3 " id="me">
                     <br></br> <label for="adressfeild">Achievements</label>
                     <br></br><textarea onChange={handellOnChange} value={about} placeholder="ENTER HERE" class="form control meFeild" cols="40" rows="4"></textarea>
                    <div class=" container text-center mt-2" id="aqaddbutton"></div>
                    
                </div>
                
                
     
       <div/>
       </div>
       <div/>
      </div>
      <button class="buton" onClick={handleDownload} >Download as PDF</button>
      </div>
          
      
     
      <div className="temp">
                  <div className="align">
                    <div className="download">
              
               

                   <div className="navv">
                    <div className="ele">
                    <h1>{text}</h1>
                    <h4>{para}</h4>
                    </div>
                    
                    <div className="adres">
                      <p>{summ} </p>
                    </div>
                   </div>
                   <div className="objective">
                    <h5>{obj}</h5>  
                    <div className="underline">

                    </div>
                    <h2>Professional Experience</h2>
                    
                    <h5>{work}</h5>
                    <div className="underline">

                      </div>
                    <h2>Education</h2>
                    <h5>{about}</h5>
                   <div className="underline">

                    </div>
                    <h2>key skills</h2>
                   <div className="underline">
                    

                    </div>
                   </div>
                   

                   
                   </div>
                   </div>

</div>
               
      <div className="temp">
         
          
        
<div class="left"></div>
<div class="stuff">
<div className="header"></div>
 <br/>
  <h1>{text}</h1>
  <h2>{para}</h2>
  <hr />
  <br/>
  <p class="head">Skills</p>
  <ul>
    <li >{skill}</li>
    <li>{skill2}</li>
  </ul>
  
  <p class="head">OBJECTIVE</p>
  <ul class="content">
   {obj}
  </ul>
  
  <p class="head">Work Experience </p>
     <p class ="content">{work}</p>
 
 <p class="">Professional Summary</p>
 <p class="content">{summ}</p>
    
 <p class="">Achievements</p>
 <p class="content">{about}</p>
    
</div>

 </div>

 

          </div>
         

	
		
		
		
		
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	

  )}
                



