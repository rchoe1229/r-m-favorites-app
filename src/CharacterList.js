import React from 'react'

export default function CharacterList({characters, addToFavorites}){

    const showCharacters = () => characters.map(character => (
        <li>
          <h2>{character.name}</h2>
          <img src={character.image} onClick={() => addToFavorites(character)}/>
        </li>
    ))

    return (
        <ul className="character-list">
            {showCharacters()}
        </ul>
    )
}