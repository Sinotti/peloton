import React from 'react';
import './components-module.css'
import bannerHeader from '@site/static/img/bannerHeader.png'
import styles from '../pages/index.module.css';
import Link from '@docusaurus/Link';

export default function patchAtual(){
    return(
       <header>
            <div  style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
         
        }}>
             
           <img src={bannerHeader} />

            </div> 

           <div className = 'container'> 
           <div  style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
         
        }}> 


        </div>
        
   
        </div>
       </header>
    )
}