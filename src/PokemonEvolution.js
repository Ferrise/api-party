import React, { Component } from 'react'

class PokemonEvolution extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }

    this.fetchUserData()
    debugger
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonName !== this.props.match.params.pokemonName) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`http://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
      debugger
  }

  render() {
    debugger
    const { pokemon } = this.state

    return (
      <div className="Pokemon">
        <img src={pokemon.forms.url.sprites.front_defaults} style = {styles.image} alt="" />
      </div>
    )
  }
}

const styles = {
    image: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

export default PokemonEvolution