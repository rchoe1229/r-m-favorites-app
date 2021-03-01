import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';
import Favorites from './Favorites'

class App extends Component {

  state = {
    characters: [],
    favorites: [],
  }

  addFavorite = (character) => {
    const foundCharacter = this.state.favorites.find(char => char === character)
    if(!foundCharacter){
      this.setState({
        favorites: [...this.state.favorites, character]
      })
    }
  }

  removeFavorite = (character) => {
    const favorites = this.state.favorites.filter(favorite => favorite !== character)
    this.setState({
      favorites
    })
  }

  componentDidMount = () => {
    fetch('https://rickandmortyapi.com/api/character/?page=2')
      .then(response => response.json())
      .then(({results}) => this.setState({
        characters: results
      })) 
  }
  
  render(){
    return (
      <div className="App">
        <Favorites favorites={this.state.favorites} removeFavorite={this.removeFavorite}/>
        <CharacterList characters={this.state.characters} 
        addFavorite={this.addFavorite}
      />
      </div>
    );
  }
}

export default App;
