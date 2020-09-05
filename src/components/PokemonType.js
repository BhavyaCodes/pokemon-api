import React, { Component } from 'react'

export default class PokemonType extends Component {

	static defaultProps = {type: null}

	getClassName = () =>{
		if (this.props.type === 'normal'){
			return "badge badge-pill badge-secondary mx-1"
		} else if (this.props.type === 'fighting'){
			return "badge badge-pill badge-secondary mx-1"
		} else if (this.props.type === 'flying '){
			return "badge badge-pill badge-info mx-1"
		} else if (this.props.type === 'poison'){
			return "badge badge-pill badge-warning mx-1"
		} else if (this.props.type === 'ground'){
			return "badge badge-pill badge-secondary mx-1"
		} else if (this.props.type === 'rock'){
			return "badge badge-pill badge-secondary mx-1"
		} else if (this.props.type === 'ghost'){
			return "badge badge-pill badge-dark mx-1"
		} else if (this.props.type === 'steel'){
			return "badge badge-pill badge-secondary mx-1"
		} else if (this.props.type === 'fire'){
			return "badge badge-pill badge-danger mx-1"
		} else if (this.props.type === 'water'){
			return "badge badge-pill badge-primary mx-1"
		} else if (this.props.type === 'grass'){
			return "badge badge-pill badge-success mx-1"
		} else if (this.props.type === 'electric'){
			return "badge badge-pill badge-warning mx-1"
		} else if (this.props.type === 'psychic'){
			return "badge badge-pill badge-light mx-1"
		} else if (this.props.type === 'dragon'){
			return "badge badge-pill badge-danger mx-1"
		} else if (this.props.type === 'dark'){
			return "badge badge-pill badge-dark mx-1"
		} else if (this.props.type === 'unknown'){
			return "badge badge-pill badge-light mx-1"
		} else if (this.props.type === 'shadow'){
			return "badge badge-pill badge-dark mx-1"
		} else{
			return "badge badge-pill badge-info mx-1"
		}
	}

	render() {
		if (!this.props.type){
			return null
		}
		return (
			<span className={this.getClassName()}>{this.props.type}</span>
		)
	}
}