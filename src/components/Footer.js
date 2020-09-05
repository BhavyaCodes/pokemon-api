import React, { Component } from 'react'

import './Footer.css'
import logo from '../pokemon-logo.png'

export class Footer extends Component {
	render() {
		return (
			<div className="Footer row">
				<div className="Footer-links col-lg-6">
					<p>API used - <a href="https://pokeapi.co/">https://pokeapi.co/</a></p>
					<p>Source Code - <a href="https://github.com/Juggernaut9/pokemon-api">https://github.com/Juggernaut9/pokemon-api</a></p>
				</div>
				<div className="image-div col-lg-6">
					<img src={logo} alt="logo" />
				</div>
			</div>
		)
	}
}

export default Footer
