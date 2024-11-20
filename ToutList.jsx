import React from "react";
import { useNavigate } from "react-router-dom";
export default function ToutList({listsed,modifierdes,supprimerde,supprimerTicket,listticket,modifierticket,listtrip,modifierTrip,supprimerTrip,SupprimerPlane,modifierPlane,ListPlane,modifierClient,listClient,SupprimerClient}){
    const navigate=useNavigate()
    const add=()=>{
        navigate('/Home')
    }
    return(
        <>
        <div className="container p-5">
        <h1 className="text-center">Gestion des Touts</h1><hr />
            <fieldset>
                <legend className="text-center">La liste des clients</legend>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>#ID</th>
                            <th>CIN</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>E-mail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listClient.map((e,index)=>
                        <tr key={index}>
                            <td>{e.idclient}</td>
                            <td>{e.cin}</td>
                            <td>{e.nom}</td>
                            <td>{e.prenom}</td>
                            <td>{e.email}</td>
                            <td><button onClick={()=>modifierClient(e)} className="btn btn-success">Modifier</button>{" "}<button onClick={()=>SupprimerClient(e)} className="btn btn-danger">Supprimer</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </fieldset>
            <br />
            <fieldset>
                <legend className="text-center">La liste des Plans</legend>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>#ID</th>
                            <th>Marque de Plane</th>
                            <th>Nombre de place</th>
                            <th>Prix</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListPlane.map((e,index)=>
                        <tr key={index}>
                            <td>{e.idPlane}</td>
                            <td>{e.marque}</td>
                            <td>{e.numplace}</td>
                            <td>{e.prix} dh</td>
                            <td><button onClick={()=>modifierPlane(e)} className="btn btn-success">Modifier</button>{" "}<button onClick={()=>SupprimerPlane(e)} className="btn btn-danger">Supprimer</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </fieldset>
            <br />
            <fieldset>
                <legend className="text-center">La liste des Trips</legend>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>#ID</th>
                            <th>Date de Trip</th>
                            <th>Plane</th>
                            <th>Date départ</th>
                            <th>Date d'arrive</th>
                            <th>Etat</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listtrip.map((e,index)=>
                        <tr key={index}>
                            <td>{e.idtrip}</td>
                            <td>{e.date}</td>
                            <td>{e.plane}</td>
                            <td>{e.dateD}</td>
                            <td>{e.dateR}</td>
                            <td>{e.etat}</td>
                            <td><button onClick={()=>modifierTrip(e)} className="btn btn-success">Modifier</button>{" "}<button onClick={()=>supprimerTrip(e)} className="btn btn-danger">Supprimer</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </fieldset>
            <br />
            <fieldset>
                <legend className="text-center">La liste des Tickets</legend>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>#ID</th>
                            <th>Le Client</th>
                            <th>Date de Trip</th>
                            <th>Prix de Ticket</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listticket.map((e,index)=>
                        <tr key={index}>
                            <td>{e.idticket}</td>
                            <td>{e.client}</td>
                            <td>{e.trip}</td>
                            <td>{e.prix}</td>
                            <td><button onClick={()=>modifierticket(e)} className="btn btn-success">Modifier</button>{" "}<button onClick={()=>supprimerTicket(e)} className="btn btn-danger">Supprimer</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </fieldset><br />
            <fieldset>
                <legend className="text-center">La liste des Destinations</legend>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>#ID</th>
                            <th>Trip</th>
                            <th>Pays de Départ</th>
                            <th>Pays d'Arrivée</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listsed.map((e,index)=>
                        <tr key={index}>
                            <td>{e.iddes}</td>
                            <td>{e.trip}</td>
                            <td>{e.villeD}</td>
                            <td>{e.villeA}</td>
                            <td><button onClick={()=>modifierdes(e)} className="btn btn-success">Modifier</button>{" "}<button onClick={()=>supprimerde(e)} className="btn btn-danger">Supprimer</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </fieldset><hr />
            <button className="btn btn-primary" onClick={add}>Page Home</button>
        </div>
        </>
    )
}