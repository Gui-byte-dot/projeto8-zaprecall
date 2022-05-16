import React from "react";
import PrimeiraTela from "./PrimeiraTela";
import SegundaTela from "./SegundaTela";

export default function App(){

    const[tela, setTela] = React.useState('segundatela');

    return (
        <>
        {
            tela === 'segundatela' ? <PrimeiraTela setTela={setTela}/> : <SegundaTela />
        }
       
        </>
    )
}
