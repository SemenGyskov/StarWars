import React from "react";
import { useState, useEffect } from "react";

export default function Transport(){
    const[Transport,setTransport]=useState([])
    useEffect(()=>{
        fetch("https://swapi.dev/api/vehicles/")
        .then(response => response.json())
        .then(data => setTransport(data.results))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
        {Transport.map(transport=>(
            <div>
            <h1>Название транспорта: {transport.name}</h1>
            <p>Длина: {transport.length} метров</p>
            <p>Вместимость груза: {transport.cargo_capacity} кг</p>
            <p>Подробнее на: <a href={transport.url}>{transport.url}</a></p>
            </div>
        ))}
    </div>
    )
}