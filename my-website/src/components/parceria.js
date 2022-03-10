import React from 'react'
import './components-module.css'
import icon from '@site/static/img/icon.png'

export default function parceria(){
    return(
        
        <body className ='fundo' >

            <h2 className = 'finalTitle'>
               Posts da comunidade
            
            </h2>

            <div  style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}>
            <p className = 'parceriasText'>
                
Através da plataforma GitHub todo e qualquer usuário do site poderá efetuar suas <br></br> contribuições aos guias, seja com a alteração dos já existentes ou com a criação de novos. <br></br>
porém ainda estamos trabalhando em um pdf explicativo (posts sujeitos a moderação.)<br></br><br></br>
       
                </p>
          </div>
        </body>
    )
}