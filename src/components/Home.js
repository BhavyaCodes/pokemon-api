import React, { Component } from 'react'
import Pokemon from './Pokemon'

import pokeApi from '../api/pokeApi'

const limit=10

export default class Home extends Component {
	constructor(props){
		super(props)
		this.state = {offset:0 ,pokemon:[]}
		this.renderPokemon = this.renderPokemon.bind(this)
		this.getMorePokemon = this.getMorePokemon.bind(this)
	}

	async componentDidMount(){
		const res = await pokeApi.get(`/pokemon?offset=${this.state.offset}&limit=${limit}`)
		this.setState(st=>({offset: st.offset+limit, pokemon:[...st.pokemon, res.data.results][0]}))
	}

	renderPokemon(){
		return this.state.pokemon.map(pokemon=>(<Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />))
	}

	async getMorePokemon(){
		const res = await pokeApi.get(`/pokemon?offset=${this.state.offset}&limit=${limit}`)
		this.setState(st=>({offset: st.offset+limit, pokemon:[...st.pokemon, res.data.results][0]}))
	}

	render() {
		return (
			<div>
				{this.renderPokemon()}
				<button onClick={this.getMorePokemon}>Get More</button>
			</div>
		)
	}
}
