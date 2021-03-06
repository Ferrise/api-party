import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Pokemon.css'
import PokemonEvolution from './PokemonEvolution'

class Pokemon extends Component {
    state = {
        pokemonName: '',
    }

    handleChange = (ev) => {
        this.setState({ pokemonName: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokemon/${this.state.pokemonName}`)
    }

    render() {
        return (
          <div className="Pokemon">
            <img
              src="http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG13.png"
              alt="Pokemon"
              className="logo"
            />
    
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  value={this.state.pokemonName}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button type="submit">
                  Look up Pokemon 
                </button>
              </div>
            </form>
    
            <Route path="/github/:pokemonName" component={PokemonEvolution} />
          </div>
        )
      }
    }
    
    export default Pokemon
