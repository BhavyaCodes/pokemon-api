import React, { Component } from 'react'

export default class PokemonType extends Component {

	static defaultProps = {type: null}

	render() {
		if (!this.props.type){
			return null
		}
		return (
			<span className="badge badge-pill badge-info mx-1">{this.props.type}</span>
		)
	}
}