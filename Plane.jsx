import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Plane({ajouterPlane,chek,listClient}){
    const navigate=useNavigate()
    const[Plane,setPlane]=useState({
        marque:'',
        numplace:'',
        prix:'',
    })
    useEffect(()=>{
        if(chek){
            setPlane(chek)
        }
    },[chek])
    const getinfo=(e)=>{
        setPlane({
            ...Plane,[e.target.name]:e.target.value
        })
    }
    const ajouter=()=>{
        if(Plane.marque===""||Plane.numplace===""||Plane.prix===""){
            alert("Veuillez remplir tous les champs")
        }else{
            ajouterPlane(Plane)
            navigate('/Trip')
        }
    }
    const Reset=()=>{
        navigate('/Client')
    }
    return(
        <>
        <div  className="container p-5">
        <fieldset>
        <legend>Formulaire de Plane</legend>
        Marque : <select className="form-control" value={Plane.marque} name="marque" onChange={getinfo}>
            <option value="">Choisir</option>
            <option value="Dahlia Air">Dahlia Air</option>
            <option value="Air Arabia Maroc">Air Arabia Maroc</option>
            <option value="Royal Air Maroc Cargo">Royal Air Maroc Cargo</option>
            <option value="Royal Air Maroc Express">Royal Air Maroc Express</option>
            <option value="Royal Air Maroc">Royal Air Maroc</option>
            <option value="Med Air">Med Air</option>
        </select><br />
        Nombre de place : <select className="form-control" name="numplace" value={Plane.numplace} onChange={getinfo}>
        <option >Nombre Actuellement</option>
            {listClient.map((e)=>
                 <option value={e.idclient}>{e.idclient}</option>
            )}
        </select><br />
        Prix : <input className="form-control" type="number" value={Plane.prix} name="prix" placeholder="Entre le prix de plane...." onChange={getinfo}/><br />
        <button onClick={ajouter} className="btn btn-success">{chek===-1?'Valider':"Modifier"}</button>{' '}
        <button onClick={Reset} className="btn btn-dark">Précédent</button>
        </fieldset>
        </div>
        </>
    )
}