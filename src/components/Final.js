import React from "react";
import "../css/final.css";
import user from "../image/user.png";
import Pdf from "react-to-pdf";
import {Button} from "antd"
const ref = React.createRef();
const Final =({profile,education,experience,setPage})=>{
  console.log("profile",profile);
  console.log("education",education)
  console.log("experience",experience)


  
    return(<>
 <div className="final-container">
        <div style={{maxWidth:"700px",textAlign:"right",margin:"10px auto",display:"flex",justifyContent:"space-between" }} >
          <h1 >
            Final Preview
          </h1>

          <Pdf targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="download-btn"> Download</button>}
      </Pdf>
       
      <Button type="primary"  onClick={()=>setPage(0)}>
                 Create New
                </Button>
        </div>
 
  <div className="container" ref={ref}>
  <div className="header">
      {
      profile?.map(
        data=>
        
    <div className="header-profile">
   
    <div className="full-name">
      <span className="first-name">{data.name}</span> 
     
    </div>
    <div className="contact-info">
      <span className="email">Email: </span>
      <span className="email-val">{data.email}</span>
      <span className="separator"></span>
      <span className="phone">Phone: </span>
      <span className="phone-val">{data?.mobilenumber}</span>
    </div>
    </div>
      )
      }


    <div>
      <img src={user} className="profile-pic"/>
    </div>
  
   


  </div>

   <div className="details">
   <div className="section">
      <div className="section__title">Education</div>
     {
      education?.map(
        data=>
      
      <div className="section__list">
        <div className="section__list-item">
          <div className="left">
            <div className="name">{data.collegename}</div>
            {/* <div className="addr">San Fr, CA</div> */}
            <div className="duration">{data?.year[0]?.$y
} - {data?.year[1]?.$y
}</div>
         
          </div>
          <div className="right">
            <div className="name">{data.degree}</div>
            <div className="desc">CGPA - {data.cgpa
}</div>
          </div>
        </div>
        <div className="section__list-item">
          <div className="left">
            <div className="name">{data.schoolname}</div>
          
            <div className="duration">{data?.schoolyear[0]?.$y
} - {data?.schoolyear[1]?.$y
}</div>
          </div>
          <div className="right">
            <div className="name">{data.group}</div>
            <div className="desc">{data.percent}</div>
          </div>
        </div>

      </div>
     
     )}
      
  </div>
    <div className="section">
      <div className="section__title">Experience</div>
      <div className="section__list">
       {
        experience?.map(
          data=>
        <div className="section__list-item">
          <div className="left">
            <div className="name">{data.companyname}</div>
           
            <div className="duration">{data.location
}</div>
          </div>
          <div className="right">
            <div className="name">{data.role}</div>
            <div className="desc">{data.experience
}</div>
          </div>
        </div>
        )

       }
        

      </div>
    </div>
  
    
     <div className="section">
       <div className="section__title">Skills</div>
       <div className="skills">
         <div className="skills__item">
           <div className="left">
            {
              experience.map(
                data=>
               
                <>
               <div className="name">
             {data.skill_1?.toUpperCase()}
             </div>
             <div className="name">
             {data.skill_2?.toUpperCase()}
             </div> <div className="name">
             {data.skill_3?.toUpperCase()}
             </div>  
             <div className="name">
             {data.skill_4?.toUpperCase()}
             </div> <div className="name">
             {data.skill_5?.toUpperCase()}
             </div> <div className="name">
             {data.skill_6?.toUpperCase()}
             </div>
             </>
            
             
             
             )
           
            }
             </div>
          
         </div>
         
       </div>
       
         
       </div>
     <div className="section">
     <div className="section__title">
    Personal Details
       </div>
       <div className="section__list">
            {
              profile?.map(
                data=>
                <>
                
        <p>
            name : <b>
             {data.name}
              </b>
        </p>
        <p>
            Gender :
              <b>
              {data.gender}
                </b>     
        
        </p>
        <p>
            D.O.B : 
            <b>
            12/05/23
       </b>
        </p>
        <p>
           age : 
           <b>
          {data.age === undefined ? null : data.age}</b>
        </p>
        <p>
            country :
            <b>
            {data.country
}
</b>        </p>
                </>
              )
            }
       


       </div>
     </div>

     <div className="section">
     <div className="section__title">
     DECLARATION:
       </div>
       <div className="section__list">
        <p>
        I hereby declare that the above given information is true to the best of my knowledge.
        </p>
        </div>
       </div>
       <div className="section">
           <div className="d-flex-place">
            <p>
                place : 
              <b>
                chennai
</b>
            </p>
            <p>
               {
              profile?.map(
                data=>data.name )}
            </p>
           </div>
           <p>
            Date : 
              <b>
                {new Date().toLocaleDateString()}
                </b>
           </p>

       </div>


     </div>
  </div>
  </div>
    </>)
}

export default Final;