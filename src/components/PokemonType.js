import React, { Component } from 'react'

export default class PokemonType extends Component {

	static defaultProps = {type: 'xyz'}

	render() {
		return (
			<span class="badge badge-pill badge-info mx-1">{this.props.type}</span>
		)
	}
}
