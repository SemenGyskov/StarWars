import React from "react";
import { useState, useEffect } from "react";

export default function Planets(){
    const[Planets,setPlanets]=useState([])
    useEffect(()=>{
        fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(data => setPlanets(data.results))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
        {Planets.map(planets=>(
            <div>
            <h1>Название планеты: {planets.name}</h1>
            <p>Диаметр: {planets.diameter}</p>
            <p>Население: {planets.population}</p>
            <p>Подробнее на: <a href={planets.url}>{planets.url}</a></p>
            </div>
        ))}
    </div>
    )
}