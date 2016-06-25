
var HelloMessage = React.createClass({
  render: function() {
    return (
    	<div>
	    	<h1> INGREDIENTS </h1>
	    	<ul>
	    	{this.props.recipeData.ingredients.map((item)=>{
	    		return (<li> {item} </li>)
	    	})}
	    	</ul> 
	    </div>
    );
  }
});


var recipeData = {
	recipeName: 'cookie',
	ingredients: [
		'flour',
		'sugar',
		'somethin'
	],
	steps: ['do something', 'do something else', 'youre done']
}

ReactDOM.render(
  <HelloMessage recipeData={recipeData} />,
  document.getElementById('recipeInfo')
);