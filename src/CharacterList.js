import React from 'react'
import Card from './Card'

export default function CharacterList({characters, clickAction}){

    const showCharacters = () => characters.map(character => <Card character={character} clickAction={clickAction} />)

    return (
        <ul className="character-list">
            {showCharacters()}
        </ul>
    )
}