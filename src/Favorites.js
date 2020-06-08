import React from 'react'

export default function Favorites({favorites}){

    const showCharacters = () => favorites.map(character => (
        <li>
          <h2>{character.name}</h2>
          <img src={character.image} />
        </li>
    ))

    return (
        <ul className="favorites-list">
            {showCharacters()}
        </ul>
    )
}