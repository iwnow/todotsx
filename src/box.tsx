export interface IBoxProps extends React.Props<any> {
	color: string;
	text: string;
}

export interface IBoxState {
	
}

export class Box extends React.Component<IBoxProps, IBoxState> {
	constructor(props) {
		super(props);
	}
	
	static defaultProps: IBoxProps = {
		color: 'bisque',
		text: 'default'	
	};
	
	render() {
		let boxStyle = {
			backgroundColor: this.props.color
		};
		return (
			<div style={boxStyle}>
				{this.props.text}
			</div>
		);
	}
}

export function getColor() {
	let colors = ['red', 'navy', 'yellow', 'cadetblue'];
	let ind = Math.random()*10 | 0;
	if (ind > 3)
		ind = 3; 
	return colors[ind];
}