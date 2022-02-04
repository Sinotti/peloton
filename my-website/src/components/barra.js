import React from 'react';
import './components-module.css'
import barra from '@site/static/img/barra.png'


export default function Barra(){
    return(
       <>
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}>
       
      
       <img src={barra} />
          
        
        
      </div>
      </>

      

      

    )
}