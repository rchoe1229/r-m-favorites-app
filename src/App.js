import React, {Component} from 'react';
import './App.css';
import CharacterList from './CharacterList';
import Favorites from './Favorites'

class App extends Component {

  state = {
    characters: [],
    favorites: []
  }

  componentDidMount(){
    this.getCharacters()
  }

  getCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(response => this.setState({
        characters: response.results
      }))
  }

  removeFavorite = (character) => {
    let favorites = this.state.favorites.filter(favorite => favorite !== character)

    this.setState({favorites})
  }

  addToFavorites = (character) => {
    let foundCharacter = this.state.favorites.find(favorite => character.id === favorite.id)
    
    if(!foundCharacter){
      this.setState({
        favorites: [...this.state.favorites, character]
      })
    }
  }

  
  render(){
    return (
      <div className="App">
        <Favorites clickAction={this.removeFavorite} favorites={this.state.favorites} />
        <CharacterList clickAction={this.addToFavorites} characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
