import React from "react";
import { useEffect,useState } from "react";

export default function Starships(){
    const[Starships,setStarships]=useState([])
    useEffect(()=>{
        fetch("https://swapi.dev/api/starships/")
        .then(response => response.json())
        .then(data => setStarships(data.results))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
        {Starships.map(ship=>(
            <div>
            <h1>Название космического корабля: {ship.name}</h1>
            <p>Максимальная атмосферная скорость: {ship.max_atmosphering_speed}</p>
            <p>Вместимость груза: {ship.cargo_capacity} тон</p>
            <p>Подробнее на: <a href={ship.url}>{ship.url}</a></p>
            </div>
        ))}
    </div>
    )
}