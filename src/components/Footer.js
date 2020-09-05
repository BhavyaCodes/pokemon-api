import React, { Component } from 'react'

import './Footer.css'
import logo from '../pokemon-logo.png'

export class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="Footer-links">
					<p>API used - <a href="https://pokeapi.co/">https://pokeapi.co/</a></p>
					<p>Source Code - <a href="https://github.com/Juggernaut9/pokemon-api">https://github.com/Juggernaut9/pokemon-api</a></p>
				</div>
				<img src={logo} alt="logo" />
			</div>
		)
	}
}

export default Footer
