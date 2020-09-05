import React, { Component } from 'react'
import axios from 'axios'

import PokemonType from './PokemonType'
import './BigPokemon.css'

export default class Pokemon extends Component {

	constructor(props){
		super(props)
		this.state = {imageUrl: null, data:{}}
		this.renderTypes = this.renderTypes.bind(this)
		this.renderAbilities = this.renderAbilities.bind(this)
		this.renderMoves = this.renderMoves.bind(this)
	}

	async componentDidMount(){
		const res = await axios.get(this.props.url)
		this.setState({data: res.data,imageUrl: res.data.sprites.other.dream_world.front_default})
	}

	renderTypes(){
		if(this.state.data.types){
			return this.state.data.types.map(type=>{
				return (<PokemonType key={type.type.name} type={type.type.name}/>)
			})
		}
	}

	renderAbilities(){
		return this.state.data.abilities.map(ability=>{
			return <li className="list-group-item">{ability.ability.name}</li>
		})
	}

	renderMoves(){
		return this.state.data.moves.map(move=>{
			return <li className="list-group-item">{move.move.name}</li>
		})
	}

	render() {
		if(this.state.imageUrl){
			return(
				<div className="BigPokemon card mb-3">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img  className="card-img" src={this.state.imageUrl} alt={this.props.name} />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h2 className="card-title">{this.state.data.species.name}</h2>
									<ul className="list-group my-3">
										<li className="list-group-item active"><storng>Abilities</storng></li>
										{this.renderAbilities()}
									</ul>
								<p className="card-text my-3">{this.renderTypes()}</p>
							</div>
						</div>
					</div>
				</div>
			)
		}
		return null
	}
}