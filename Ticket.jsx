import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Ticket({chek,ajouterTicket,listTrip,listClient}){
    const navigate=useNavigate()
    const [ticket,setTicket]=useState({
        client:'',
        trip:'',
        prix:'',
    })
    useEffect(()=>{
        if(chek){
            setTicket(chek)
        }
    },[chek])
    const getinfo=(e)=>{
        setTicket({
            ...ticket,[e.target.name]:e.target.value
        })
    }
    const ajouter=()=>{
        if(ticket.client===""||ticket.trip===""||ticket.prix===""){
            alert("Veuillez remplir tous les champs")
        }else{
            ajouterTicket(ticket)
            navigate('/Destination')
        }
    }
    const Reset=()=>{
        navigate('/Trip')
    }
    return(
        <>
        <div className="container p-5">
        <fieldset>
        <legend>Formulaire de Ticket</legend>
        Client :<select className="form-control" onChange={getinfo} name="client" value={ticket.client}>
            <option >Choisir le nom</option>
            {listClient.map((e)=>
            <option value={e.nom + e.prenom}>{e.nom + e.prenom}</option>
            )}
        </select>
        <br />
        Trip : <select className="form-control" onChange={getinfo} value={ticket.trip} name="trip">
            <option >Choisir le nom</option>
            {listTrip.map((e)=>
            <option value={e.date}>{e.date}</option>
            )}
        </select>
        <br />
        Prix : <input className="form-control" type="email" value={ticket.prix} name="prix" placeholder="Entre votre email" onChange={getinfo}/><br />
        <button onClick={ajouter} className="btn btn-success">{chek===-1?'Valider':"Modifier"}</button>{' '}
        <button onClick={Reset} className="btn btn-dark">Précédent</button>
        </fieldset>
        </div>
        </>
    )
}