import React from 'react';
import './components-module.css'
import  hwC from '@site/static/img/heavenswardCarrossel.jpg'
import sbC from '@site/static/img/stormbloodCarrossel.jpg'
import shbC from '@site/static/img/shadowbringersCarrossel.jpg'


export default function carrossel(){
    return(
       <>
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}>
       
      <div className = 'carrossel'>
        
        <ul> 
        <li>
        <img src={hwC} />
        </li>
        
        <li>
        <img src={sbC} />
        </li>

        <li>
        <img src={shbC} />
        </li>
        </ul>
      </div>
      
          

      </div>
      
      </>
    )
}