import {useState} from 'react'

export const Contador = function(inicio=0){

    const[useContador, setContador]=useState(inicio);
    
    const sumar = (sumando)=>{
            setContador(useContador+sumando); 
    };
    
    const Sustract = (restando)=>{
         setContador(useContador-restando)
    }
    
    const Reset = (valor)=>{
        setContador(valor)
    }

    return{
        useContador,
        sumar,
        Sustract,
        Reset
    }

};






















