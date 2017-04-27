import React from 'react';

class Home extends React.Component{
	constructor(props){
		super();
		this.state = {
			head_one: props.initial_head_one
		};
	}

	componentWillMount(){
		console.log('component will mount');
	}

	componentDidMount(){
		console.log("component mounting finished");
	}

	componentWillReceiveProps(){
		console.log("it recieves props");
	}

	shouldComponentUpdate(nextProps, nextState){
		//if this returns true then the below methods will be executed
		console.log("should this update ", nextProps, nextState);
		return false;
	}

	componentWillUpdate(nextProps, nextState){
		console.log("it will update ", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState){
		console.log("updation done ", prevProps, prevState);
	}

	componentWillUnmount(){
		
	}

	onHeadOneChange(){
		this.props.change_head_one(this.state.head_one);
		
	}
	onInputChange(e){
		this.setState({
			head_one: e.target.value
		});
	}
	render(){
		return(
				<div>
					<h1>User Info</h1>
					<p><strong>Name </strong>{this.props.name}</p>
					<p><strong>Age </strong>{this.props.age}</p>
					<button onClick={this.props.onAlert}>Click to alert</button><br/>
					<input type="text" value={this.state.head_one} onChange={(e)=>this.onInputChange(e)}/>	
					<button onClick={this.onHeadOneChange.bind(this)}>change the Home</button>
				</div>
			)
	}
}

export default Home;