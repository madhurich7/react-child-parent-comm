import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			head_one: "Home"
		};

	}

	toAlert(){
		alert('am alerting due to child');
	}

	onHeadOne(newHead){
		this.setState({
			head_one: newHead
		});
	}
	render(){
		return (
				<div>
					<Header head_one={this.state.head_one}>
						<p>child in header</p>
					</Header>
					<Home name={"madhuri"} age={22} onAlert={this.toAlert} 
					change_head_one={this.onHeadOne.bind(this)}
					initial_head_one={this.state.head_one}/>
				</div>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));