import React, { Component } from 'react'
import axios from 'axios'

import './Pokemon.css'

export default class Pokemon extends Component {

	constructor(props){
		super(props)
		this.state = {imageUrl: null, data:{}}
	}

	async componentDidMount(){
		const res = await axios.get(this.props.url)
		this.setState({data: res.data,imageUrl: res.data.sprites.other.dream_world.front_default})
	}

	render() {
		return (
			<div className="Pokemon card">
				{this.state.imageUrl && <img className="card-img-top" src={this.state.imageUrl} alt={this.props.name} />}
				<div className="card-body">
					<h5 className="card-title">{this.props.name}</h5>
					<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
			</div>
		)
	}
}
