import React, {Component} from "react";
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/.png'


class Pokecard extends Component {
	render() {
		let imgSrc = `${POKE_API}$.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name}</h1>
				<div className="Pokecard-image">
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<div className="Pokecard-data">Type: {this.props.type}</div>
				<div className="Pokecard-data">EXP: {this.props.exp}</div>
			</div>
		);
	}
}

export default Pokecard;
