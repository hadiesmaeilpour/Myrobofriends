import React,{Component} from 'react';
import Cardlist from '../Component/Cardlist';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import ErrorBoundry from '../Component/ErrorBoundry'
// import { robots } from './robots'
import './App.css'

class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}))
	}

	onSearchChange=(event)=>{
		// because the searchfield is empty in the constructor we fill the searchfield by this.sestate
		this.setState({searchfield: event.target.value})
		
	}

	render(){
		const {robots,searchfield}=this.state;
		const roboSearchFilter=robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		// toLowerCase is a function that make everything that you enter im to the lowercase

		return !robots.length ?
			<h1>Loading</h1> :
			(
				
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<Cardlist robots={roboSearchFilter} />
						</ErrorBoundry>	
					</Scroll>	
				</div>
			);
		// if(!robots.length){
		// 	return <h1>Loading</h1>
		// 	}else{
		// 	return (
				
		// 		<div className='tc'>
		// 			<h1 className='f1'>RoboFriends</h1>
		// 			<SearchBox searchChange={this.onSearchChange} />
		// 			<Scroll>
		// 				<Cardlist robots={roboSearchFilter} />
		// 			</Scroll>	
		// 		</div>
		// 	);
		// }	
	}
}
export default App;