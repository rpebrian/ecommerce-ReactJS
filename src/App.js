import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import Menu from './Menu';
import './App.css';
import Footer from './footer';

class App extends Component {

	state  = {
		robots: robots,
		menu: "home",
		searchField: "",
	}



	pilihmenu = (menu) => {
		if(menu === 'home') {
			this.setState({menu: menu});
			this.setState({robots: robots});
		} else {
			this.setState({menu: menu});
			const robot= this.state.robots[0];
			this.setState({robots: [robot]})
		}
	
	}

	onSearchchange = (event) => {
	

		this.setState({searchField: event.target.value});

	}


	render(){
		const filterBarang = this.state.robots.filter(barang => {
			return barang.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		let konten = "";

		if(this.state.menu === 'home'){
			konten = (
						<div className="cardStyle">
							<CardList robots={filterBarang} />
					   </div>
					   )
		} else {
			konten = ( <div className="cardStyle">
							<CardList robots={filterBarang} />						
						</div>
					)
		}


				
		return (
			<div>
				<div>
					<Menu 
						pilihmenu={(menu) => this.pilihmenu(menu)}
						searchchange={this.onSearchchange} 
					/>
				</div>
				{konten}
				<div>
					<Footer />
				</div>
			</div>

		)
	}
}

export default App;