import React, { Component } from 'react'
import { Link } from "react-router-dom";
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
			return this.state.data.types.map(type=>{
				return (<PokemonType key={type.type.name} type={type.type.name}/>)
			})
		}
	}

	render() {
		if(this.state.imageUrl){
			return (
				<div className="Pokemon">
					<Link to={`/pokemon/${this.state.data.species.name}`}>
						<div class="col mb-4">
							<div className="card">
								<img className="card-img-top" src={this.state.imageUrl} alt={this.props.name} />
								<div className="card-body mt-2">
									<h5 className="card-title">{this.state.data.species.name}</h5>
									<p className="card-text">{this.renderTypes()}</p>
								</div>
							</div>
						</div>
					</Link>
				</div>
			)
		}
		return null
	}
}
