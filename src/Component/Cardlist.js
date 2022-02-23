import React from 'react';
import Card from './Card';


const Cardlist = ({robots})=>{
	// if (true) {
	// 	throw new Error('Noooooooooo');
	// }
	// const roboArray=robots.map((user,i)=>{
	// 	return<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>});
	return(
	//  <div>
  //		{roboArray}
  // 	</div> 
  // we can use like comented line at the above or make it like down line:

  		<div>
  			{
  				robots.map((user,i)=>{
					return(  
						<Card
							key={i}
							id={robots[i].id} 
							name={robots[i].name}
							email={robots[i].email}
						/>
					)
				})
  			}
  		</div>
	);
}
export default Cardlist;