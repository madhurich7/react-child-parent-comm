import React from 'react';

class Header extends React.Component{
	render(){
		return(
				<ul>
					<li>{this.props.head_one}</li>
					<li>About</li>
					{this.props.children}
				</ul>
			)
	}
}

export default Header;