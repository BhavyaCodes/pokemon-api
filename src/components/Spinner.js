import React, { Component } from 'react'
import pixelBall from '../pixelBall.png'
import './Spinner.css'

export class Spinner extends Component {
	render() {
		return (
			<div className="Spinner">
				<img src={pixelBall} alt="loading"/>
			</div>
		)
	}
}

export default Spinner
