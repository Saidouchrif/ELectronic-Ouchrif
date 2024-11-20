import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Client({chek,ajouterClient}){
    const navigate=useNavigate()
    const [client,setclient]=useState({
        cin:'',
        nom:'',
        prenom:'',
        email:'',
    })
    useEffect(()=>{
        if(chek){
            setclient(chek)
        }
    },[chek])
    const getinfo=(e)=>{
        setclient({
            ...client,[e.target.name]:e.target.value
        })
    }
    const ajouter=()=>{
        if(client.cin===""||client.nom===""||client.prenom===""||client.email===""){
            alert("Veuillez remplir tous les champs")
        }else{
            ajouterClient(client)
            navigate('/Plane')
        }
    }
    const Reset=()=>{
        navigate('/Home')
    }
    return(
        <>
        <div className="container p-5">
        <fieldset>
        <legend>Formulaire de Client</legend>
        CIN : <input className="form-control" type="text" name="cin" value={client.cin} onChange={getinfo} placeholder="Exemple(AZ09239)...."/><br />
        Nom : <input className="form-control" type="text"  value={client.nom} name="nom" placeholder="Entre votre nom"  onChange={getinfo}/><br />
        Prenom : <input className="form-control" type="text" value={client.prenom} name="prenom" placeholder='Entre votre prenom' onChange={getinfo}/><br />
        E-mail : <input className="form-control" type="email" value={client.email} name="email" placeholder="Entre votre email" onChange={getinfo}/><br />
        <button onClick={ajouter} className="btn btn-success">{chek===-1?'Valider':"Modifier"}</button>{' '}
        <button onClick={Reset} className="btn btn-dark">Précédent</button>
        </fieldset>
        </div>
        </>
    )
}