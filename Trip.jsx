import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function Trip({chek,ajouterTrip,listPlane}){
    const navigate=useNavigate()
    const[trip,settrip]=useState({
        date:'',
        plane:'',
        dateD:'',
        dateR:'',
        etat:"",
    })
    useEffect(()=>{
        if(chek){
            settrip(chek)
        }
    },[chek])
    const ajouter=()=>{
        if(trip.date===""||trip.dateD===""||trip.dateR===""||trip.etat===''||trip.plane===''){
            alert("Veuillez remplir tous les champs")
        }else{
            ajouterTrip(trip)
            navigate('/Ticket')
        }
    }
    const getinfo=(e)=>{
        settrip({
            ...trip,[e.target.name]:e.target.value
        })
    }
    const Reset=()=>{
        navigate('/Plane')
    }
    return(
        <>
        <div className="container p-5">
        <fieldset>
        <legend>Formulaire de Trip</legend>
        Date de Trip : <input className="form-control" type="date"  value={trip.date} name="date" onChange={getinfo}/><br />
        Plane : <select className="form-control" value={trip.plane} onChange={getinfo} name="plane">
            <option>Select Plane</option>
            {listPlane.map((e)=>{
                return <option value={e.marque}>{e.marque}</option>
            })}
        </select>
        <br />
        Date départ : <input className="form-control" type="date" value={trip.dateD} name="dateD"  onChange={getinfo}/><br />
        Date d'arrive : <input className="form-control" type="date"  value={trip.dateR} name="dateR" onChange={getinfo}/><br />
        Etat : <select className="form-control" name="etat" value={trip.etat} onChange={getinfo} >
            <option value="">Choisir l'état</option>
            <option value="en attente">en attente</option>
            <option value="Done">Done</option>
        </select><br />
        <button onClick={ajouter} className="btn btn-success">{chek===-1?'Valider':"Modifier"}</button>{' '}
        <button onClick={Reset} className="btn btn-dark">Précédent</button>
        </fieldset>
        </div>
        </>
    )
}