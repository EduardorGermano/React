import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

    const [texto, setTexto] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("UEF: "+texto);
    },[texto]);

    const alterar = (e)=>{
        setTexto(e.target.value);
        console.log(texto);
    }

    const salvar = () =>{
        const todoList = {
            id:Date.now(),
            texto: texto,
            status: false
        }
        let lista = JSON.parse(localStorage.getItem("lista-tarefas")) || [];
        lista.push(todoList);
        localStorage.setItem("lista-tarefas", JSON.stringify(lista));
        navigate("/");
    }

    return(
        <div>
            <input type="text" value={texto} onChange={alterar}/>
            <input type="button" onClick={salvar} value="Salvar"/>
        </div>
    )
}

export default Form;