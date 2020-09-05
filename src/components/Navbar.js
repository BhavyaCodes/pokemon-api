import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'

import logo from '../pokemon-logo.png'
import './Navbar.css'

class Navbar extends Component {

	constructor(props){
		super(props)
		this.state = {term:""}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value})
	}

	onFormSubmit(e){
		e.preventDefault()
		this.props.history.push(`/pokemon/${this.state.term.toLowerCase()}`);
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
  			<NavLink className="navbar-brand" to="/"><img className="logo-img" src={logo} alt="pokemon logo"></img></NavLink>
  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
					</ul>
					<form onSubmit={this.onFormSubmit} className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search Pokemon"
							aria-label="Search"
							value={this.state.term}
							onChange={this.handleInputChange}
							name="term"
						/>
						<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>
		)
	}
}

export default withRouter(Navbar)