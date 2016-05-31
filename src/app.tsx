//import {Box, getColor, IBoxProps} from './box';
import * as Box from './box';


interface IHelloBoxProps extends React.Props<any> {
	name?: string;
}

interface IHelloBoxState {
	value?: string;
	text?: string;
	boxes?: Box.IBoxProps[];
}

class HelloBox extends React.Component<IHelloBoxProps, IHelloBoxState>{
	constructor(props) {
		super(props);
	}
	
	static defaultProps: IHelloBoxProps = {
		name: 'default name' 
	}
	
	state: IHelloBoxState = {
		value: this.props.name,
		text: this.props.name,
		boxes: []
	}
	
	private _loop: number;
	loop() {
		this._loop = setInterval(()=> {
			this.setState({
				value : Math.random().toFixed(2).toString()
			});
		}, 1000);
	}
	
	unloop() {
		clearInterval(this._loop);
		this.setState({
			value : 'unloop'
		});
	}
	
	componentDidMount() {
	}	
	
	inputChange(e) {
		this.setState({
			text: e.target.value
		});
	}
	
	mouseEnter(e: React.MouseEvent) {
	}
	
	addBox() {
		let _s = this.state;
		_s.boxes = _s.boxes || [];
		_s.boxes.push({
			color: Box.getColor(),
			text: _s.text
		});
		this.setState(_s);
	}
	
	changeAll() {
		let _s = this.state;
		_s.boxes = _s.boxes || [];
		_s.boxes.forEach((v) => {
			v.text = _s.text;
		});
		this.setState(_s);
	}
	
	renderBoxes() {
		return this.state.boxes.map((v,i,arr) => {
			return (
				<Box.Box text={v.text} color={v.color} key={i}/>
			);
		});
	}
	
	private _addbtn: HTMLButtonElement;
	render() {
		return (
			<div>
			<div>
				name: {this.props.name || 'noname'}
			</div>
			<div>
				state: {this.state.value || 'nostate'}
			</div>
			<div>
			<button onClick={() => {this.loop()}}>start</button>
			<button onClick={() => {this.unloop()}}>end</button>
			</div>
			
			<div>
				<input 
					onMouseEnter={(e) => this.mouseEnter(e) } 
					type="text" 
					value={this.state.text} 
					onChange={(e) => this.inputChange(e)}/>
				<button ref={(c) => this._addbtn = c} onClick={() => {this.addBox()}}>add</button>
				<button onClick={() => {this.changeAll()}}>change all</button>
			</div>
				{this.renderBoxes()}
			</div>			
		);
	}
}

ReactDOM.render(<HelloBox name='John' />, document.getElementById('app'))