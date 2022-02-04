import React from 'react'
import './components-module.css'

import arrWiki from '@site/static/img/arrWiki.png';
import lodestone from '@site/static/img/lodestone.png';

export default function referencias(){
    return(
        
        <body className ='fundo2' >
           
          <div>
          <h2 className='textPa'> Referencias e fontes de conteúdo: </h2>
          <div  style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}>
              
           <img src={arrWiki} />
         
           </div> 
          
           <div  style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}>
                
                <p className='referenciasText'>
            
            Nossa principal fonte é o site oficial da Square enix, <a href="https://na.finalfantasyxiv.com/lodestone/"> Final fantasy XIV, <br></br>
          The Lodestone</a> , nele você poderá encontrar o conteúdo bruto <br></br> 
          diretamente da própria Square, porém não em português. Também <br></br>
          usamos como referencia a já conhecida <a href="https://na.finalfantasyxiv.com/lodestone/">Final Fantasy ARR Wiki. <br></br></a> 
          Fontes extras serão mencionadas nos posts em questão. 
            </p>
           
           </div > 

              <div  style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
                
        
        }}>
                <p className='referenciasGif'>
                <img src={lodestone} />
                </p>
           </div > 

        
          </div>

      </body>
      
    )
}
