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

  addToFavorites = (character) => {
    this.setState({
      favorites: [...this.state.favorites, character]
    })

    // fetch('favoritesURL', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(character)
    // })
  }

  
  render(){
    return (
      <div className="App">
        <Favorites favorites={this.state.favorites} />
        <CharacterList addToFavorites={this.addToFavorites} characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
