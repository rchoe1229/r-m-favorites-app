import React from 'react'

export default function Card({character, clickAction}){

    function handleClick(){
      clickAction(character)
    }

    return (
        <li>
          <h2>{character.name}</h2>
          <img src={character.image} onClick={handleClick}/>
        </li>
    )
}