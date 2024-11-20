import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Destination({ajouterDes,chek,listTrip}){
    const navigate=useNavigate()
    const[Destination,setDestination]=useState({
        trip:'',
        villeD:'',
        villeA:'',
    })
    useEffect(()=>{
        if(chek){
            setDestination(chek)
        }
    },[chek])
    const getinfo=(e)=>{
        setDestination({
            ...Destination,[e.target.name]:e.target.value
        })
    }
    const ajouter=()=>{
        if(Destination.trip===""||Destination.villeA===""||Destination.villeD===""){
            alert("Veuillez remplir tous les champs")
        }else{
            ajouterDes(Destination)
            navigate('/ToutList')
        }
    }
    const Reset=()=>{
        navigate('/Ticket')
    }
    return(
        <>
        <div className="container p-5">
        <fieldset>
        <legend>Formulaire de Plane</legend>
        Trip : <select className="form-control" value={Destination.trip} onChange={getinfo} name="trip">
            <option value="">Choisir la date</option>
            {listTrip.map((e)=>
            <option value={e.date}>{e.date}</option>
            )}
        </select>
        <br />
        Pays de départ : <select className="form-control" value={Destination.villeA} name="villeA" onChange={getinfo}>
            <option value="">Choisir le pays de départ</option>
            <option value="Afrique du Sud">Afrique du Sud</option>
            <option value="Algérie">Algérie</option>
            <option value="Allemagne">Allemagne</option>
            <option value="Argentine">Argentine</option>
            <option value="Brésil">Brésil</option>
            <option value="Canada">Canada</option>
            <option value="Chine">Chine</option>
            <option value="Égypte">Égypte</option>
            <option value="France">France</option>
            <option value="Islande">Islande</option>
            <option value="Maroc">Maroc</option>
            <option value="Qatar">Qatar</option>
            <option value="Portugal">Portugal</option>
            <option value="Suisse">Suisse</option>
            <option value="Somalie">Somalie</option>
            <option value="Russie">Russie</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Norvège">Norvège</option>
            <option value="Monaco">Monaco</option>
            <option value="Mozambique">Mozambique</option>
        </select>
        <br />
        Pays de d'arrive : <select className="form-control" value={Destination.villeD} name="villeD" onChange={getinfo}>
            <option value="">Choisir le pays de d'arrive</option>
            <option value="Afrique du Sud">Afrique du Sud</option>
            <option value="Algérie">Algérie</option>
            <option value="Allemagne">Allemagne</option>
            <option value="Argentine">Argentine</option>
            <option value="Brésil">Brésil</option>
            <option value="Canada">Canada</option>
            <option value="Chine">Chine</option>
            <option value="Égypte">Égypte</option>
            <option value="France">France</option>
            <option value="Islande">Islande</option>
            <option value="Maroc">Maroc</option>
            <option value="Qatar">Qatar</option>
            <option value="Portugal">Portugal</option>
            <option value="Suisse">Suisse</option>
            <option value="Somalie">Somalie</option>
            <option value="Russie">Russie</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Norvège">Norvège</option>
            <option value="Monaco">Monaco</option>
            <option value="Mozambique">Mozambique</option>
        </select>
        <br />
        <button onClick={ajouter} className="btn btn-success">{chek===-1?'Valider':"Modifier"}</button>{' '}
        <button onClick={Reset} className="btn btn-dark">Précédent</button>
        </fieldset>
        </div>
        </>
    )
}