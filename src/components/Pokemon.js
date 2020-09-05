import React, { Component } from 'react'
// import pokeApi from '../api/pokeApi'
import axios from 'axios'

export default class Pokemon extends Component {

	constructor(props){
		super(props)
		this.state = {imageUrl: null}
	}

	async componentDidMount(){
		const res = await axios.get(this.props.url)
		this.setState({imageUrl: res.data.sprites.other.dream_world.front_default})
	}

	render() {
		return (
			<div>
				{this.state.imageUrl && <img src={this.state.imageUrl} alt={this.props.name} />}
				<h2>{this.props.name}</h2>
			</div>
		)
	}
}
