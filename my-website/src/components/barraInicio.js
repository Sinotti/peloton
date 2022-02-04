import React from 'react';
import './components-module.css'
import barraInicio from '@site/static/img/barraInicio.png'


export default function BarraInicio(){
    return(
       <>
       
       
        
    
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}>
       
      
       <img src={barraInicio} />
          
        
        
      </div>
      </>

      

      

    )
}