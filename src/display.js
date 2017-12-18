import React from 'react';

class Display extends React.Component {
	render(){
		var name = <h3>{this.props.name}</h3>
		var number = <h3>{this.props.number}</h3>
		var address = <h3>{this.props.address}</h3>
		return(
			<div>
				{name}
				{number}
				{address}
			</div>
		)
	}
}


export default Display;