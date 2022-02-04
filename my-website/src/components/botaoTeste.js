import React from 'react';
import './components-module.css'
import botoes from '@site/static/img/botoes.png'

export default function botaoTeste(){
    return(
       <>
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}>
      <button className = 'botoes'>
      <img src={botoes} />
      </button>
</div>
      </>
    )
}