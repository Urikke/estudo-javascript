import React,{useState, useEffect} from 'react';

export default function AppFuncional(){
    const [nome, setNome] = useState(undefined);

    useEffect(
        () => {
            if(nome === undefined){
                setNome(sessionStorage.getItem("nome") || "");
            }
            else{
                sessionStorage.setItem("nome", nome)
            }
        }
    )

    return (
        <>
            Nome: <input type="text" vaue={nome} onChange={(event)=>setNome(event.target.value)}/>
            <br/>
            Olá {nome}
        </>
    );
}