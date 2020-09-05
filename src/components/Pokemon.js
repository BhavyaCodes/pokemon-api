import React, { Component } from 'react'
import axios from 'axios'

import PokemonType from './PokemonType'
import './Pokemon.css'

export default class Pokemon extends Component {

	constructor(props){
		super(props)
		this.state = {imageUrl: null, data:{}}
		this.renderTypes = this.renderTypes.bind(this)
	}

	async componentDidMount(){
		const res = await axios.get(this.props.url)
		this.setState({data: res.data,imageUrl: res.data.sprites.other.dream_world.front_default})
	}

	renderTypes(){
		if(this.state.data.types){
			console.log(this.state.data.types)
			return this.state.data.types.map(type=>{
				// return (<PokemonType type="xyz" />)
				return (<PokemonType type={type.type.name}/>)
			})
		}
	}

	render() {
		return (
			<div className="Pokemon card">
				{this.state.imageUrl && <img className="card-img-top" src={this.state.imageUrl} alt={this.props.name} />}
				<div className="card-body">
					<h5 className="card-title">{this.props.name}</h5>
					<p className="card-text">{this.renderTypes()}</p>
				</div>
			</div>
		)
	}
}
