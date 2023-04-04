import React from 'react'
import { useState } from 'react'

import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

export default function Form() {
  const divRef = useRef(null);


  const handleDownload = () => {

    html2canvas(divRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 6, 4);
      pdf.save("download.pdf");
    });
  }
  const [text, setText] = useState('');
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const [para, setPara] = useState('');
  const handeleOnChange = (event) => {
    console.log("On Change");
    setPara(event.target.value);
  }
  const [mail, setMail] = useState('');
  const handeleeOnChange = (event) => {
    console.log("On Change");
    setMail(event.target.value);
  }
  const [obj, setObj] = useState('');
  const handeleeeOnChange = (event) => {
    console.log("On Change");
    setObj(event.target.value);
  }
  const [skills, setSkills] = useState('');
  const handeleeeeOnChange = (event) => {
    console.log("On Change");
    setSkills(event.target.value);
  }
  const [skill2, setSkill2] = useState('');
  const handeleeeeeOnChange = (event) => {
    console.log("On Change");
    setSkill2(event.target.value);

  }
  const [work, setWork] = useState('');
  const handelOnChange = (event) => {
    console.log("On Change");
    setWork(event.target.value);

  }
  const [about, setAbout] = useState('');
  const handellOnChange = (event) => {
    console.log("On Change");
    setAbout(event.target.value);

  }
  const [summ, setSumm] = useState('');
  const handelllOnChange = (event) => {
    console.log("On Change");
    setSumm(event.target.value);

  }

  const [skill, setSkill] = useState('');
  const handellllOnChange = (event) => {
    console.log("On Change");
    setSkills(event.target.value);

  }
  const [link, setLink] = useState('');
  const handeloOnChange = (event) => {
    console.log("On Change");
    setLink(event.target.value);

  }
  const [link1, setLink1] = useState('');
  const handelooOnChange = (event) => {
    console.log("On Change");
    setLink1(event.target.value);

  }

  return (









    <div>
      <div className="flexor">
      <div className="forme">
      <div className="heeding">
          <h1>Fill the required form </h1>
          <h5> You can see ur resume buiding side by side <br></br> </h5>
        </div>
        
        <div className="forme1">
          <div class="form-group1">


            <br></br> <label for="namefeild " >YOUR NAME   :</label><br />
            <input onChange={handleOnChange} value={text} type="text" id="namefeild" placeholder="ENTER NAME" class="form control" size="40" />
          </div>

          <div class="form-group2">
            <br></br>  <label for="numberfeild" >Job title:</label><br />
            <input onChange={handeleOnChange} value={para} type="para" id="numberfeild" placeholder="Eg. Engineer" class="form control" size="40" />
          </div>
        

          <div class="form-group3 " id="me">
            <br></br> <label for="adressfeild">Adress</label>
            <br></br><textarea onChange={handelllOnChange} value={summ} placeholder="ENTER HERE" class="form control meFeild" cols="40" rows="3"></textarea>
            <div class=" container text-center mt-2" id="aqaddbutton"></div>
          </div>
          <div class="form-group3">
                     <br></br> <label for="facebookfeild">MAIL</label><br />
                     <input onChange={handeloOnChange} value={link} type="text" id="facebookfeild" placeholder="ENTER HERE" class="form control" size="40"/>
                </div>
               

        </div>
      </div>
      <div className="form2">
  
        <div class="form-group3 " id="me">
        <div class="form-group3" id="we">
              <br></br> <label for="">Objective</label>
              <br></br><textarea placeholder="ENTER HERE" onChange={handeleeeOnChange} value={obj} class="form control weFeild " cols="40" rows="3"></textarea>
</div>
<div class="form-group3" id="we">
            <br></br> <label for="">Proffesional Experience</label>
            <br></br><textarea onChange={handelOnChange} value={work} placeholder="ENTER HERE" class="form control weFeild " cols="40" rows="3"></textarea>
           

          <br></br> <label for="adressfeild">Education</label>
          <br></br><textarea onChange={handellOnChange} value={about} placeholder="ENTER HERE" class="form control meFeild" cols="40" rows="3"></textarea>
          <div class=" container text-center mt-2" id="aqaddbutton"></div>
        
              <div class="form-group3">
               
                     <br></br> <label for="facebookfeild">Linked In</label><br />
                     <input onChange={handelooOnChange} value={link1} type="text" id="facebookfeild" placeholder="ENTER HERE" class="form control" size="40"/>
                   
                     <div class="form-group3 " id="me">
            <br></br> <label for="adressfeild">Key Skills</label>
            <br></br><textarea onChange={handellllOnChange} value={skills} placeholder="ENTER HERE" class="form control meFeild" cols="40" rows="3"></textarea>
            <div class=" container text-center mt-2" id="aqaddbutton"></div>
          </div>
      <button class="buton" onClick={handleDownload} >Download as PDF</button>
      
               
                </div>
                <div className='ref' ref={divRef}>
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
                    <h5>{skills}</h5>
                   <div className="underline">
                        <h2>Important Links</h2>
                        <h5>G-mail  {link}</h5>
                      
                        <h5>Linked  In  {link1}</h5>
                    

                    </div>
                   </div>
                   </div>

                   
                   </div>
                   </div>




            </div>
          </div>
          </div>
        </div>
      </div>
  

     









      </div>






















  )
}




     
































  


