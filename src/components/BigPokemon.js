import React, { Component } from 'react'
import axios from 'axios'

import PokemonType from './PokemonType'
import './BigPokemon.css'

export default class Pokemon extends Component {

	constructor(props){
		super(props)
		this.state = {imageUrl: null, data:{}, isLoading: true, error: false}
		this.renderTypes = this.renderTypes.bind(this)
		this.renderAbilities = this.renderAbilities.bind(this)
		this.renderMoves = this.renderMoves.bind(this)
	}

	async componentDidMount(){
		try {
			const res = await axios.get(this.props.url)
			this.setState({data: res.data,imageUrl: res.data.sprites.other.dream_world.front_default, isLoading: false, error: false})	
		} catch (error) {
			this.setState({error: true, isLoading: false})
		}
	}

	async componentDidUpdate(prevProps, prevState){
		if (prevProps.url !== this.props.url){
			try {
				this.setState({isLoading: true})
				const res = await axios.get(this.props.url)
				this.setState({data: res.data,imageUrl: res.data.sprites.other.dream_world.front_default, isLoading: false, error: false})	
			} catch (error) {
				this.setState({error: true, isLoading: false})
			}
		}
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
		if(this.state.isLoading){
			return (
				<div class="d-flex justify-content-center">
					<div class="spinner-border" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
		)
		}
		if(this.state.error){
			return(
				<h3>Error: Unable to find pokemon</h3>
			)
		}
			return(
				<div className="BigPokemon card mb-3">
					<div className="row no-gutters">
							<div className="col-md-4">
								<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
									<ol class="carousel-indicators">
										<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
										<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
										<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
									</ol>
									<div class="carousel-inner">
										<div class="carousel-item active">
											<img src={this.state.data.sprites.other.dream_world.front_default} class="d-block w-100" alt="..." />
										</div>
										<div class="carousel-item">
											<img src={this.state.data.sprites.front_default} class="d-block w-100" alt="front_default" />
										</div>
										<div class="carousel-item">
											<img src={this.state.data.sprites.back_default} class="d-block w-100" alt="back_default" />
										</div>
									</div>
									<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
										<span class="carousel-control-prev-icon" aria-hidden="true"></span>
										<span class="sr-only">Previous</span>
									</a>
									<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
										<span class="carousel-control-next-icon" aria-hidden="true"></span>
										<span class="sr-only">Next</span>
									</a>
								</div>
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
}