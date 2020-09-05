import React, { Component } from 'react'

export default class PokemonType extends Component {
	render() {
		return (
			<span class="badge badge-pill badge-info">{this.props.type}</span>
		)
	}
}
