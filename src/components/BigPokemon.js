import React, { Component } from 'react'
import pokeApi from '../api/pokeApi'

import PokemonType from './PokemonType'
import Spinner from './Spinner'
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
			const res = await pokeApi.get(`/pokemon/${this.props.match.params.searchTerm}`)
			this.setState({data: res.data,imageUrl: res.data.sprites.other.dream_world.front_default, isLoading: false, error: false})	
		} catch (error) {
			this.setState({error: true, isLoading: false})
		}
	}

	async componentDidUpdate(prevProps, prevState){
		if (prevProps.match.params.searchTerm !== this.props.match.params.searchTerm){
			try {
				this.setState({isLoading: true})
				const res = await pokeApi.get(`/pokemon/${this.props.match.params.searchTerm}`)
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
			return <Spinner />
		}
		if(this.state.error){
			return(
				<h3>Error: Unable to find pokemon</h3>
			)
		}
			return(
				<div className="container">
					<div className="BigPokemon card mb-3">
						<div className="row no-gutters">
								<div className="col-md-4">
									<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
										<ol className="carousel-indicators">
											<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
											<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
											<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
										</ol>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img src={this.state.data.sprites.other.dream_world.front_default} className="d-block w-100" alt="..." />
											</div>
											<div className="carousel-item">
												<img src={this.state.data.sprites.front_default} className="d-block w-100" alt="front_default" />
											</div>
											<div className="carousel-item">
												<img src={this.state.data.sprites.back_default} className="d-block w-100" alt="back_default" />
											</div>
										</div>
										<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
											<span className="carousel-control-prev-icon" aria-hidden="true"></span>
											<span className="sr-only">Previous</span>
										</a>
										<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
											<span className="carousel-control-next-icon" aria-hidden="true"></span>
											<span className="sr-only">Next</span>
										</a>
									</div>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h2 className="card-title">{this.state.data.species.name}</h2>
										<ul className="list-group my-3">
											<li className="list-group-item active">Abilities</li>
											{this.renderAbilities()}
										</ul>
									<p className="card-text my-3">{this.renderTypes()}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
}