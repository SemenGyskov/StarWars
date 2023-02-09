import React from "react";
import { useState, useEffect } from "react";

export default function Species(){
    const[Species,setSpecies]=useState([])
    useEffect(()=>{
        fetch("https://swapi.dev/api/species/")
        .then(response => response.json())
        .then(data => setSpecies(data.results))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
        {Species.map(species=>(
            <div>
            <h1>Раса: {species.name}</h1>
            <p>Средний рост: {species.average_height} СМ</p>
            <p>Продолжительность жизни: {species.average_lifespan} лет</p>
            <p>Подробнее на: <a href={species.url}>{species.url}</a></p>
            </div>
        ))}
    </div>
    )
}