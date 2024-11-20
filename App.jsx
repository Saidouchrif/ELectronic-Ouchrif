import React, { useState } from "react";
import Client from "./Client";
import "./App.css";
import {Link,Routes,Route, useNavigate } from "react-router-dom";
import ToutList from "./ToutList";
import Plane from "./Plane";
import Trip from "./Trip";
import Ticket from "./Ticket";
import Destination from "./Destination";
import Home from "./Home";
export default function App(){
    const [idclient,setidclient]=useState(1)
    const [idPlane,setidPlane]=useState(1)
    const navigate=useNavigate()
    const[chek,setchek]=useState(-1)
    //// ficher client.jsx
    const [listclient,setclient]=useState([])
    const Ajouter=(client)=>{
        if(chek===-1){
            setclient([...listclient,{...client,idclient:idclient}])
            setidclient(idclient+1)
        }else{
            const x=listclient.map((p)=>{
                if(p.id===client.id){
                    return client
                }else{
                    return p
                }
            })
            setclient(x)
            setchek(-1)
        }
    }
    const modifier=(client)=>{
        if(client.cin===""||client.nom===""||client.prenom===""||client.email===""){
            alert("veuillez remplir les champs")
        }else{
            setchek(client)
            navigate('/Client')
        }
    }
    const Supprimer=(index)=>{
        setclient(listclient.filter((client)=>client!==index))
    }
/////
////// ficher Plane.jsx
const [listPlane,setPlane]=useState([])
const AjouterP=(Plane)=>{
    if(chek===-1){
        setPlane([...listPlane,{...Plane,idPlane:idPlane}])
        setidPlane(idPlane+1)
    }else{
        const x=listPlane.map((p)=>{
            if(p.id===Plane.id){
                return Plane
            }else{
                return p
            }
        })
        setPlane(x)
        setchek(-1)
    }
}
const modifierP=(Plane)=>{
    if(Plane.marque===""||Plane.numplace===""||Plane.prix===""){
        alert("veuillez remplir les champs")
    }else{
        setchek(Plane)
        navigate('/Plane')
    }
}
const SupprimerP=(index)=>{
    setPlane(listPlane.filter((Plane)=>Plane!==index))
}
////
////// ficher Trip.jsx
const [idtrip,setidtrip]=useState(1)
const [listTrip,setlistTrip]=useState([])
const AjouterT=(trip)=>{
    if(chek===-1){
        setlistTrip([...listTrip,{...trip,idtrip:idtrip}])
        setidtrip(idtrip+1)
    }else{
        const x=listTrip.map((p)=>{
            if(p.id===trip.id){
                return trip
            }else{
                return p
            }
        })
        setlistTrip(x)
        setchek(-1)
    }
}
const modifierT=(trip)=>{
    if(trip.date===""||trip.dateD===""||trip.dateR===""||trip.etat===''||trip.plane===''){
        alert("veuillez remplir les champs")
    }else{
        setchek(trip)
        navigate('/Trip')
    }
}
const SupprimerT=(index)=>{
    setlistTrip(listTrip.filter((trip)=>trip!==index))
}
////
///// ficher Ticket.jsx
const [idticket,setidticket]=useState(1)
const [listicket,setlistticket]=useState([])
const AjouterTt=(ticket)=>{
    if(chek===-1){
        setlistticket([...listicket,{...ticket,idticket:idticket}])
        setidticket(idticket+1)
    }else{
        const x=listicket.map((p)=>{
            if(p.id===ticket.id){
                return ticket
            }else{
                return p
            }
        })
        setlistticket(x)
        setchek(-1)
    }
}
const modifierTt=(ticket)=>{
    if(ticket.client===""||ticket.trip===""||ticket.prix===""){
        alert("veuillez remplir les champs")
    }else{
        setchek(ticket)
        navigate('/Ticket')
    }
}
const SupprimerTt=(index)=>{
    setlistticket(listicket.filter((ticket)=>ticket!==index))
}
////
///// ficher Destination.jsx
const [iddes,setiddes]=useState(1)
const [listDes,setlistdes]=useState([])
const AjouterD=(des)=>{
    if(chek===-1){
        setlistdes([...listDes,{...des,iddes:iddes}])
        setiddes(iddes+1)
    }else{
        const x=listDes.map((p)=>{
            if(p.id===des.id){
                return des
            }else{
                return p
            }
        })
        setlistdes(x)
        setchek(-1)
    }
}
const modifierD=(des)=>{
    if(des.trip===""||des.villeA===""||des.villeD===""){
        alert("veuillez remplir les champs")
    }else{
        setchek(des)
        navigate('/Destination')
    }
}
const SupprimerD=(index)=>{
    setlistdes(listDes.filter((des)=>des!==index))
}
////
const x={
            color:'white',
        fontSize:'16px'
        
}
    return (
        <>
        <ul style={x} class=" navbar bg-dark nav justify-content-center">
            <li style={x} class="nav-item"><Link class="nav-link" to='/Client'>Client</Link></li>
            <li class="nav-item"><Link class="nav-link" to='/Plane'>Plane</Link></li>
            <li class="nav-item"><Link class="nav-link" to='/Trip'>Trip</Link></li>
            <li class="nav-item"><Link class="nav-link" to='/Ticket'>Ticket</Link></li>
            <li class="nav-item"><Link class="nav-link" to='/Destination'>Destination</Link></li>
            <li class="nav-item"><Link class="nav-link"  to='/ToutList'>Tout Les Listes</Link></li>
        </ul>
    
        <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Client" element={<Client chek={chek} ajouterClient={Ajouter} />} />
            <Route path="/ToutList" element={<ToutList supprimerde={SupprimerD} modifierdes={modifierD} listsed={listDes} modifierticket={modifierTt} listticket={listicket} supprimerTicket={SupprimerTt} supprimerTrip={SupprimerT} modifierTrip={modifierT} listtrip={listTrip}  ListPlane={listPlane} modifierPlane={modifierP} SupprimerPlane={SupprimerP} modifierClient={modifier} SupprimerClient={Supprimer} listClient={listclient} />} />
            <Route path="/Plane" element={<Plane listClient={listclient} ajouterPlane={AjouterP} chek={chek} />} />
            <Route path="/Trip" element={<Trip listPlane={listPlane} chek={chek} ajouterTrip={AjouterT}/>} />
            <Route path="/Ticket" element={<Ticket listTrip={listTrip} listClient={listclient} chek={chek} ajouterTicket={AjouterTt} />} />
            <Route path="/Destination" element={<Destination listTrip={listTrip} chek={chek} ajouterDes={AjouterD} />} />
        </Routes>
        </>
    )
}