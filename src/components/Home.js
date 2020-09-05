import React, { Component } from 'react'

import Pokemon from './Pokemon'
import Spinner from './Spinner'

import pokeApi from '../api/pokeApi'

const limit=9

export default class Home extends Component {
	constructor(props){
		super(props)
		this.state = {offset:0 ,pokemon:[],isLoading: true}
		this.renderPokemon = this.renderPokemon.bind(this)
		this.getMorePokemon = this.getMorePokemon.bind(this)
	}

	async componentDidMount(){
		const res = await pokeApi.get(`/pokemon?offset=${this.state.offset}&limit=${limit}`)
		this.setState(st=>({offset: st.offset+limit, pokemon:[...st.pokemon, ...res.data.results], isLoading: false}))
	}

	renderPokemon(){
		return this.state.pokemon.map(pokemon=>(<Pokemon key={pokemon.name} url={pokemon.url} />))
	}

	async getMorePokemon(){
		this.setState({isLoading: true})
		const res = await pokeApi.get(`/pokemon?offset=${this.state.offset}&limit=${limit}`)
		console.log(res.data)
		this.setState(st=>({offset: st.offset + limit, pokemon: [...st.pokemon, ...res.data.results], isLoading: false}))
	}

	render() {
		return (
			<div className="container my-4">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
					{this.renderPokemon()}
				</div>
				{this.state.isLoading && <Spinner />}
				<button onClick={this.getMorePokemon} type="button" class="my-3 btn btn-danger btn-lg">Get More</button>
			</div>
		)
	}
}
