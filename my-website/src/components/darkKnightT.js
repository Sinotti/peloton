import React from 'react';
import './patchAtual-module.css'
const astrologian = require('../../docs/skillsTraduzidas/astrologian.json')
export default function patchAtual(){
    return(
       
        <table border="1">
        <tr>
            <th>Nome da habilidade</th>
            <th>Level</th>
            <th>Tipo</th>
           
        </tr>
        <tr>
            <td>Ted</td>
            <td>22</td>
            <td>Estudante</td>
        </tr>
        <tr>
            <td>Ralf</td>
            <td>26</td>
            <td>Designer</td>
        </tr>
    </table>
      

      

    )
}