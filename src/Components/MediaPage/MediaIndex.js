import React from 'react'
import { Link } from 'react-router-dom';

export const MediaIndex = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'> 
        <h3 style={{textAlign:'center', marginTop:'10px'}}>Welcome to the Media Section of Nubs-Uenr</h3>
        <p style={{textAlign:'center'}}>This page contains contents from our biblestudies, prayer meetings and sermons</p>
        <p style={{textAlign:'center'}}>The content on each page maybe a youtube link or an article.</p>
        <div style={{marginTop:'10px', height:'auto', padding:'20px', display:'flex', justifyContent:'space-evenly', alignItems:'center',flexWrap:'wrap'}}>
          
        <div style={{height:'30vh',border:'2px solid green', width:'40%', display:'flex', alignItems:"center", justifyContent:'center',marginBottom:'20px'}}>
       <Link to="/biblestudies" style={{textDecoration:'none', color:'white'}}> 
       <h3>Biblestudies</h3> 
       </Link>
         </div>
        <div style={{height:'30vh',border:'2px solid green', width:'40%', display:'flex', alignItems:"center", justifyContent:'center',marginBottom:'20px'}}>
       <Link to="/prayers" style={{textDecoration:'none', color:'white'}}>
       <h3>Prayers</h3> 
       </Link>
         </div>
        <div style={{height:'30vh',border:'2px solid green', width:'40%', display:'flex', alignItems:"center", justifyContent:'center',marginBottom:'20px'}}>
       <Link to="/sermons" style={{textDecoration:'none', color:'white'}}>
       <h3>Sermons</h3> 
       </Link>
         </div>
        <div style={{height:'30vh',border:'2px solid green', width:'40%', display:'flex', alignItems:"center", justifyContent:'center',marginBottom:'20px'}}>
       <Link to="/events" style={{textDecoration:'none', color:'white'}}>
       <h3>Other Events</h3> 
       </Link>
         </div>
          
        </div>
        </div>
      </div> 
    </div>
    </>
  )
}
